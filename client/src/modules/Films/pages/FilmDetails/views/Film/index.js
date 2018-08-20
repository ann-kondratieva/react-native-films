import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ImageHeader from '../ImageHeader';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../../../../../constants';

import TabsView from '../Tabs';

const Film = ({ film, openComments, isRefreshing, onRefresh, loading }) => {
    return (
        <View style={styles.container}>
            {loading && !isRefreshing ?
                <ActivityIndicator size="large" style={styles.loader} color={colors.primary} /> :
                <View style={styles.container}>
                    <ImageHeader image={film.image} isRefreshing={isRefreshing} onRefresh={onRefresh} />
                    <TabsView openComments={openComments} film={film} />
                </View>}
        </View >
    );
};

Film.propTypes = {
    film: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    openComments: PropTypes.func.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default Film;