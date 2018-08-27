import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Container } from 'native-base';
import styles from './styles';
import PageHeader from '../PageHeader';
import ImageHeader from '../ImageHeader';

const ProfileScreen = ({ user, goBack, onRefresh, isRefreshing, onImageClick }) => {
    return (
        <View style={styles.container}>
            <PageHeader goBack={goBack} />
            <ImageHeader user={user} onRefresh={onRefresh} isRefreshing={isRefreshing} onImageClick={onImageClick} />
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
    onImageClick: PropTypes.func.isRequired,
};

export default ProfileScreen;