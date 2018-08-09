import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Header, Left, Body, Right, Title, Button, Text, View } from 'native-base';
import { Image } from 'react-native';
import styles from './styles';
import { colors } from '../../../../../../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ActivityIndicator } from 'react-native';

const ImageHeader = ({ image }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            <Image source={{ uri: image }}
                style={styles.image} />
        </LinearGradient>
    );
};

ImageHeader.propTypes = {
    image: PropTypes.string
};

export default ImageHeader;