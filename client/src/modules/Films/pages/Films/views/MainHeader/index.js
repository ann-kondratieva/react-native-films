import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { View } from 'native-base';
import styles from './styles';
import { colors } from '../../../../../../constants';
import SearchContainer from '../../containers/SearchContainer';
import PageHeader from '../Header';

const MainHeader = ({ title, openDrawer, isSearching, openSearch, closeSearch }) => {
    const headerProps = {
        title,
        openDrawer,
        openSearch
    };
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            <View style={styles.header}>
                {isSearching ?
                    <SearchContainer closeSearch={closeSearch} /> :
                    <PageHeader {...headerProps} />}
            </View>
        </LinearGradient>
    );
};

MainHeader.propTypes = {
    title: PropTypes.string.isRequired,
    openDrawer: PropTypes.func.isRequired,
    isSearching: PropTypes.bool.isRequired,
    openSearch: PropTypes.func.isRequired,
    closeSearch: PropTypes.func.isRequired,
};

export default MainHeader;