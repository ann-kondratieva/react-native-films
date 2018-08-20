import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, Button } from 'native-base';

import RenderSearchInput from '../../../../../../views/RenderSearchInput';

const SearchForm = (props) => {
    const { handleSubmit, onReset } = props;
    return (
        <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
            <View style={styles.fieldContainer}>
                <Field
                    style={styles.textField}
                    name='search'
                    label="Search"
                    type="text"
                    placeholder='Search'
                    onChangeAction={handleSubmit}
                    placeholderTextColor='white'
                    component={RenderSearchInput}
                />
            </View>
            <Button style={styles.button} transparent onPress={onReset} title='send'>
                <Icon size={24} color='white' name='close' />
            </Button>

        </View>
    );
};

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string,
    reset: PropTypes.func.isRequired,
};

export default reduxForm()(SearchForm);