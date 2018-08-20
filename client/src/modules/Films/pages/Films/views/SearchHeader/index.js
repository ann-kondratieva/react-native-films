import React from 'react';
import PropTypes from 'prop-types';

import { Button, View } from 'native-base';
import { Animated } from 'react-native';
import styles from './styles';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import SearchForm from '../SearchForm';

const SearchHeader = ({ closeSearch, onSubmit, onReset, form, marginLeft }) => {
    const props = {
        onReset,
        onSubmit,
        form
    };
    return (
        <Animated.View style={{ marginLeft, width: '100%' }}>
            <View style={styles.container}>
                <View>
                    <Button transparent style={styles.backButton} onPress={closeSearch}>
                        <SimpleLineIcon name='arrow-left' size={23} color='white' />
                    </Button>
                </View>
                <View style={styles.form}>
                    <SearchForm {...props} />
                </View>
            </View>
        </Animated.View>
    );
};

SearchHeader.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    closeSearch: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
    marginLeft: PropTypes.object.isRequired,
};

export default SearchHeader;