import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Image, ScrollView, RefreshControl, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../../../../../constants';
import placeholder from '../../../../../../../userplaceholder.png';
import UsernameContainer from '../../containers/UsernameContainer';

const ImageHeader = ({ user, isRefreshing, onRefresh, onImageClick }) => {
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
                <TouchableOpacity onPress={onImageClick}>
                    <Image source={user.avatar ? { uri: user.avatar } : placeholder}
                        style={styles.image} />
                </TouchableOpacity>
                <View style={styles.username}>
                    <UsernameContainer user={user} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

ImageHeader.propTypes = {
    image: PropTypes.string,
    user: PropTypes.shape({
        username: PropTypes.string,
        avatar: PropTypes.string,
    }),
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageHeader;