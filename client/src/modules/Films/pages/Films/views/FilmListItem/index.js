import React from 'react';
import PropTypes from 'prop-types';
import Reactotron from 'reactotron-react-native';
import ImageLoad from 'react-native-image-placeholder';
import StarRating from 'react-native-star-rating';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import placeholder from '../../../../../../../placeholder.png';
import { colors } from '../../../../../../constants';

const FilmsListItem = ({ item: { _id, title, image, rating }, onClick }) => {
    return (
        <View style={styles.container} key={_id}>
            <TouchableOpacity style={styles.touchContainer} onPress={() => onClick(_id)}>
                <ImageLoad
                    style={styles.image}
                    placeholderStyle={styles.image}
                    placeholderSource={placeholder}
                    isShowActivity={false}
                    source={{ uri: image }}
                />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            <StarRating
                disabled={true}
                maxStars={5}
                rating={rating}
                starSize={16}
                fullStarColor={colors.primary}
                emptyStarColor={colors.primary}
            />
        </View>
    );
};

FilmsListItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};

export default FilmsListItem;
