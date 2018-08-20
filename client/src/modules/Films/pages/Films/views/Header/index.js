import React from 'react';
import PropTypes from 'prop-types';

import { Title, Button, View } from 'native-base';
import styles from './styles';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const PageHeader = ({ title, openDrawer, openSearch }) => {
    return (
        <React.Fragment>
            <View>
                <Button transparent style={styles.menuButton} onPress={openDrawer}>
                    <SimpleLineIcon name='menu' size={23} color='white' />
                </Button>
            </View>
            <View>
                <Title style={styles.title}>{title}</Title>
            </View>
            <View style={styles.searchContainer}>
                <Button transparent style={styles.searchButton} onPress={openSearch}>
                    <EvilIcons name='search' size={30} color='white' />
                </Button>
            </View>
        </React.Fragment>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    openDrawer: PropTypes.func.isRequired,
    openSearch: PropTypes.func.isRequired
};

export default PageHeader;