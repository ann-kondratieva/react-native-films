import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Image, ScrollView, RefreshControl, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../../../../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ImageHeader = ({ image, chooseImage }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            {image ?
                <TouchableOpacity onPress={chooseImage} style={styles.imageContainer}>
                    <Image source={{ uri: image.uri }} style={styles.image} />
                </TouchableOpacity> :
                <TouchableOpacity onPress={chooseImage} style={styles.imageContainer}>
                    <View style={styles.container}>
                        <Icon style={styles.icon} size={30} name="image-plus" />
                    </View>
                </TouchableOpacity>}
        </LinearGradient>
    );
};

ImageHeader.propTypes = {
    image: PropTypes.object,
    chooseImage: PropTypes.func.isRequired
};

export default ImageHeader;