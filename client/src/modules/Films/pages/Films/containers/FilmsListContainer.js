import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Reactotron from 'reactotron-react-native';
import { withNavigation } from 'react-navigation';
//import { getFormValues } from 'redux-form';

import filmsActionCreators from '../actions';
import filmSelectors from '../selectors/index';
import FilmsList from '../views/FilmsList';

class FilmsListContainer extends Component {

    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.onFilmClick = this.onFilmClick.bind(this);
        this.state = {
            isFabVisible: false
        };
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

    loadMore() {
        const { filmsState: { loading } } = this.props;
        if (!loading) {
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

    componentDidMount() {
        this.loadMore();
    }

    render() {
        const { filmsState: { refreshing, items, hasMore, loading } } = this.props;
        const props = {
            items,
            onClick: this.onFilmClick,
            loadMore: this.loadMore,
            hasMore,
            refreshing,
            onRefresh: this.onRefresh,
            isFabVisible: this.state.isFabVisible,
            handleOnScroll: this.handleOnScroll,
            loading
        };
        return (
            <FilmsList {...props} />

        );
    }
};

function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state),
        //formValues: getFormValues(SERVICES_FORM)(state)
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