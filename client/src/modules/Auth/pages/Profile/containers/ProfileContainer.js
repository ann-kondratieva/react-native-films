import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImagePicker from 'react-native-image-picker';

import userSelectors from '../../../selectors';
import profileSelectors from '../selectors';
import Reactotron from 'reactotron-react-native';
import ProfileScreen from '../views/ProfileScreen';
import profileActionCreators from '../actions';
import authActionCreators from '../../../actions';
import ModalWindow from '../../../../../components/Modal';
import { Container } from 'native-base';
import reactotronReactNative from 'reactotron-react-native';

class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
        this.pickerOptions = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        this.onImageClick = this.onImageClick.bind(this);
    }

    onRefresh() {
        const { user } = this.props;
        const { userActions: { getUserRequest }, actions: { startRefreshing } } = this.props;
        startRefreshing();
        getUserRequest({ id: user._id });
    }

    onImageClick() {
        const { actions: { uploadAvatar }, user } = this.props;
        ImagePicker.showImagePicker(this.pickerOptions, (response) => {
            reactotronReactNative.log('Response = ', response);
            if (response.data) {
                const { uri, fileName, type } = response;
                uploadAvatar({ uri: uri, user, fileName, type });
            }
        });
    }

    render() {
        const { user, navigation: { goBack }, isRefreshing } = this.props;
        const props = {
            user,
            goBack,
            onRefresh: this.onRefresh,
            isRefreshing,
            onImageClick: this.onImageClick
        };

        return (
            <Container>
                <ProfileScreen {...props} />
                <ModalWindow />
            </Container>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state),
        isRefreshing: profileSelectors.isRefreshing(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(profileActionCreators, dispatch),
        userActions: bindActionCreators(authActionCreators, dispatch),
    };
}

ProfileContainer.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }),
    actions: PropTypes.object.isRequired,
    userActions: PropTypes.object.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);