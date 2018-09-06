import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';

import filmsActionCreators from '../actions';
import filmSelectors from '../selectors/index';
import FilmsList from '../views/FilmsList';
import { View, Container } from 'native-base';
import PickerContainer from './PickerContainer';
import { Animated } from 'react-native';
import { SERVICE_HEIGHT } from '../constants';
import reactotronReactNative from 'reactotron-react-native';

class FilmsListContainer extends Component {

    constructor(props) {
        super(props);

        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.loadMore = this.loadMore.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.onFilmClick = this.onFilmClick.bind(this);
        this._onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
        this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
        this._onScrollEndDrag = this._onScrollEndDrag.bind(this);

        this.state = {
            isFabVisible: false,
            scrollAnim,
            offsetAnim,
            clampedScroll: Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                    }),
                    offsetAnim
                ),
                0,
                SERVICE_HEIGHT
            ),
        };
    };

    _clampedScrollValue = 0;
    _offsetValue = 0;
    _scrollValue = 0;

    componentDidMount() {
        this.loadMore();
        this.state.scrollAnim.addListener(({ value }) => {
            const diff = value - this._scrollValue;
            this._scrollValue = value;
            this._clampedScrollValue = Math.min(
                Math.max(this._clampedScrollValue + diff, 0),
                SERVICE_HEIGHT,
            );
        });
        this.state.offsetAnim.addListener(({ value }) => {
            this._offsetValue = value;
        });
    }

    componentWillUnmount() {
        this.state.scrollAnim.removeAllListeners();
        this.state.offsetAnim.removeAllListeners();
    }

    onFilmClick(_id) {
        const { actions: { redirectToFilm } } = this.props;
        redirectToFilm(_id);
    }

    handleOnScroll(event) {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 50) {
            this.setState({
                isFabVisible: true,
            });
        } else {
            this.setState({
                isFabVisible: false,
            });
        }
    };

    _onScrollEndDrag() {
        this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
    };

    _onMomentumScrollBegin() {
        clearTimeout(this._scrollEndTimer);
    };

    _onMomentumScrollEnd() {
        const toValue = this._scrollValue > SERVICE_HEIGHT &&
            this._clampedScrollValue > (SERVICE_HEIGHT) / 2
            ? this._offsetValue + SERVICE_HEIGHT
            : this._offsetValue - SERVICE_HEIGHT;
        Animated.timing(this.state.offsetAnim, {
            toValue,
            duration: 350,
            useNativeDriver: true,
        }).start();
    };

    loadMore() {
        const { filmsState: { isLoading } } = this.props;
        if (!isLoading) {
            const { actions: { loadMoreFilms } } = this.props;
            loadMoreFilms();
        }
    }

    onRefresh() {
        const { actions: { clearFilms, startRefreshing } } = this.props;
        clearFilms();
        startRefreshing();
        this.loadMore();
    }

    render() {
        const { filmsState: { isRefreshing, items, hasMore, isLoading } } = this.props;
        const props = {
            items,
            onClick: this.onFilmClick,
            loadMore: this.loadMore,
            hasMore,
            isRefreshing,
            onRefresh: this.onRefresh,
            handleOnScroll: this.handleOnScroll,
            isLoading,
            isFabVisible: this.state.isFabVisible,
            scrollAnim: this.state.scrollAnim,
            _onScrollEndDrag: this._onScrollEndDrag,
            _onMomentumScrollBegin: this._onMomentumScrollBegin,
            _onMomentumScrollEnd: this._onMomentumScrollEnd,
            onScroll: Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                {
                    useNativeDriver: true,
                    listener: event => {
                        this.handleOnScroll(event);
                    },
                },
            )
        };
        return (
            <Container >
                <FilmsList {...props} />
                <PickerContainer clampedScroll={this.state.clampedScroll} />
            </Container>

        );
    }
};

function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch),
    };
}

FilmsListContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    filmsState: PropTypes.object.isRequired
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FilmsListContainer));