import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Gallery from '../views/Gallery';
import selectors from '../selectors';
import galleryActionCreators from '../actions';

class GalleryContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { images } = this.props;

        const props = {
            images
        };
        return (
            <Gallery {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        //gallery: selectors.getGalleryState(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(galleryActionCreators, dispatch),
    };
}

GalleryContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    //gallery: PropTypes.object.isRequired,
    images: PropTypes.array

};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);