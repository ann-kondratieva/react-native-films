import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../actions';
import selectors from '../selectors';
import userSelectors from '../../../../Auth/selectors';
import Rating from '../views/Rating';
import Reactotron from 'reactotron-react-native';

class RatingContainer extends Component {

    constructor(props) {
        super(props);
        this.onStarRatingPress = this.onStarRatingPress.bind(this);
    }

    onStarRatingPress(value) {
        Reactotron.log(value);
        let { film, actions: { updateFilmRatingRequest }, user } = this.props;
        updateFilmRatingRequest({ userId: user._id, filmId: film._id, rating: value });
    }

    render() {
        const { film, isLoadingRating } = this.props;
        const props = {
            rating: film.rating,
            isLoadingRating,
            onStarRatingPress: this.onStarRatingPress
        };
        return (
            <Rating {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        isLoadingRating: selectors.getRatingState(state),
        user: userSelectors.getUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch),
    };
}

RatingContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    isLoadingRating: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RatingContainer);