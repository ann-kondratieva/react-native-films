import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImagePicker from 'react-native-image-picker';

import profileSelectors from '../selectors';
import profileActionCreators from '../actions';
import ImageHeader from '../views/ImageHeader';

class ImageContainer extends Component {

    constructor(props) {
        super(props);
        this.pickerOptions = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        this.onImageClick = this.onImageClick.bind(this);
        this.onImageLoad = this.onImageLoad.bind(this);
    }

    onImageClick() {
        const { actions: { uploadAvatar }, user } = this.props;
        ImagePicker.showImagePicker(this.pickerOptions, (response) => {
            if (response.data) {
                const { uri, fileName, type } = response;
                uploadAvatar({ uri: uri, user, fileName, type });
            }
        });
    }

    onImageLoad() {
        const { actions: { endUploadingImage } } = this.props;
        endUploadingImage();
    }

    render() {
        const { user, onRefresh, isRefreshing, isLoading, imageLoader } = this.props;
        const props = {
            user,
            onRefresh,
            isRefreshing,
            isLoading,
            onImageClick: this.onImageClick,
            imageLoader,
            onImageLoad: this.onImageLoad
        };

        return (
            <ImageHeader {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        isLoading: profileSelectors.isLoading(state),
        imageLoader: profileSelectors.getLoadingImage(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(profileActionCreators, dispatch),
    };
}

ImageContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    imageLoader: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);