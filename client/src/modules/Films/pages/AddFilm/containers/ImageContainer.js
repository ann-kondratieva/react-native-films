import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImagePicker from 'react-native-image-picker';

import ImageHeader from '../views/ImageHeader';
import selectors from '../selectors';
import addFilmActionCreators from '../actions';

class ImageContainer extends Component {

    constructor(props) {
        super(props);
        this.chooseImage = this.chooseImage.bind(this);
        this.pickerOptions = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
    }

    chooseImage() {
        const { actions: { addImage } } = this.props;
        ImagePicker.showImagePicker(this.pickerOptions, (response) => {
            if (response.data) {
                const { uri, fileName, type } = response;
                addImage({ uri, fileName, type });
            }
        });
    }

    render() {
        const { image } = this.props;
        const props = {
            image,
            chooseImage: this.chooseImage
        };
        return (
            <ImageHeader {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        image: selectors.getImage(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //filmActions: bindActionCreators(filmActionCreators, dispatch),
        actions: bindActionCreators(addFilmActionCreators, dispatch),
    };
}

ImageContainer.propTypes = {
    image: PropTypes.object,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);