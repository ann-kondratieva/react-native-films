import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import {
    Dimensions, ScrollView
} from 'react-native';
import ImageBrowser from 'react-native-interactive-image-gallery';
const { width, height } = Dimensions.get('window');

const Gallery = ({ images }) => {
    return (
        <ImageBrowser style={styles.container} images={images.map(
            (img, index) => ({
                URI: img.original,
                thumbnail: img.thumbnail,
                id: String(index)
            }))} />
    );
};



Gallery.propTypes = {
    images: PropTypes.array,
};

export default Gallery;