import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmActionCreators from '../actions';
import Film from '../views/Film';
import userSelectors from '../../../../Auth/selectors';
import Reactotron from 'reactotron-react-native';

class FilmContainer extends Component {

    constructor(props) {
        super(props);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit({ message }) {
        const { film, user, actions: { updateFilmRequest } } = this.props;
        let comment = {
            userId: user._id,
            userName: user.username,
            message,
            createdAt: new Date()
        };
        film.comments.push(comment);
        updateFilmRequest({ film });
    }

    render() {
        const { film, loading } = this.props;
        const props = {
            film,
            loading,
            handleCommentSubmit: this.handleCommentSubmit
        };

        return (
            <Film {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch),
    };
}

FilmContainer.propTypes = {
    film: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);