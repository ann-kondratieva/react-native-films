import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Image, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import { colors } from '../../../../../../constants';

const ImageHeader = ({ image, isRefreshing, onRefresh }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            <ScrollView
                style={styles.linearGradient}
                contentContainerStyle={styles.scrollContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        colors={[colors.primary, colors.secondary]}
                    />
                }>
                <Image source={{ uri: image }}
                    style={styles.image} />
            </ScrollView>
        </LinearGradient>
    );
};

ImageHeader.propTypes = {
    image: PropTypes.string,
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default ImageHeader;