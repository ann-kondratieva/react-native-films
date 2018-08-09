import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text } from 'react-native';

import { colors } from '../../../../../../constants';
import styles from './styles';

const ListFooter = ({ isLoading, isRefreshing, hasMore }) => {
    return (
        <View style={styles.container}>
            {isLoading && !isRefreshing && <ActivityIndicator size="large" style={styles.loader} color={colors.primary} />}
            {!hasMore && <Text style={styles.text}>{'You\'ve reached the bottom of the list'}</Text>}
        </View>
    );
};

ListFooter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
};

export default ListFooter;
