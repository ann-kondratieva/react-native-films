import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../PageHeader';
import ImageContainer from '../../containers/ImageContainer';

const ProfileScreen = ({ user, goBack, onRefresh, isRefreshing }) => {
    const props = {
        user,
        onRefresh,
        isRefreshing,
    };
    return (
        <View style={styles.container}>
            <PageHeader goBack={goBack} />
            <ImageContainer {...props} />
        </View>
    );
};

ProfileScreen.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    goBack: PropTypes.func.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,

};

export default ProfileScreen;