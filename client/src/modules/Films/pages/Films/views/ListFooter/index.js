import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text } from 'react-native';

import { colors } from '../../../../../../constants';
import styles from './styles';
import { FILMS_LIMIT } from '../../constants';
import reactotronReactNative from 'reactotron-react-native';

const ListFooter = ({ isLoading, isRefreshing, hasMore, itemsLength }) => {
    return (
        <View style={styles.container}>
            {isLoading && !isRefreshing && <ActivityIndicator size="large" style={styles.loader} color={colors.primary} />}
            {(!hasMore && itemsLength > FILMS_LIMIT) && <Text style={styles.text}>{'You\'ve reached the bottom of the list'}</Text>}
        </View>
    );
};

ListFooter.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    itemsLength: PropTypes.number.isRequired,
};

export default ListFooter;
