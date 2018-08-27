import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Reactotron from 'reactotron-react-native';
import PageHeader from '../../../../../components/Header';
import filmSelectors from '../../FilmDetails/selectors';
import filmActionCreators from '../../FilmDetails/actions';
import commentActionCreators from '../actions';
import selectors from '../selectors';
import CommentScreen from '../views/CommentScreen';

class CommentsContainer extends Component {

    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
    }

    onRefresh() {
        const { film } = this.props;
        const { filmActions: { getFilmRequest }, actions: { startRefreshing } } = this.props;
        startRefreshing();
        getFilmRequest({ id: film._id });
    }

    render() {
        const { navigation, film: { comments }, isRefreshing } = this.props;
        const { goBack } = navigation;
        const handleCommentSubmit = navigation.getParam('handleCommentSubmit', null);
        const props = {
            comments,
            handleCommentSubmit,
            onRefresh: this.onRefresh,
            isRefreshing
        };
        const headerProps = {
            title: 'Comments',
            goBack
        };
        return (
            <React.Fragment>
                <PageHeader {...headerProps} />
                <CommentScreen {...props} />
            </React.Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        film: filmSelectors.getFilm(state),
        isRefreshing: selectors.isRefreshing(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filmActions: bindActionCreators(filmActionCreators, dispatch),
        actions: bindActionCreators(commentActionCreators, dispatch),
    };
}

CommentsContainer.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }),
    film: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    filmActions: PropTypes.object.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);