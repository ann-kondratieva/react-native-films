import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { View } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../../../../../constants';
import StarRating from 'react-native-star-rating';
import Reactotron from 'reactotron-react-native';

const Rating = ({ rating, onStarRatingPress, isLoadingRating }) => {
    return (
        <View style={styles.container}>
            {isLoadingRating ? <ActivityIndicator size="small" style={styles.loader} color={colors.primary} /> :
                <StarRating
                    maxStars={5}
                    rating={rating}
                    starSize={28}
                    fullStarColor={colors.primary}
                    emptyStarColor={colors.primary}
                    selectedStar={(rating) => onStarRatingPress(rating)}
                />}
        </View>
    );
};

Rating.propTypes = {
    rating: PropTypes.number,
    onStarRatingPress: PropTypes.func.isRequired,
    isLoadingRating: PropTypes.bool.isRequired
};

export default Rating;