import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import {
    View
} from 'react-native';
import ImageBrowser from 'react-native-interactive-image-gallery';

const Gallery = ({ images }) => {
    return (
        <View style={styles.container}>
            <ImageBrowser style={styles.gallery} images={images.map(
                (img, index) => ({
                    URI: img.original,
                    thumbnail: img.thumbnail,
                    id: String(index)
                }))} />
        </View>
    );
};



Gallery.propTypes = {
    images: PropTypes.array,
};

export default Gallery;