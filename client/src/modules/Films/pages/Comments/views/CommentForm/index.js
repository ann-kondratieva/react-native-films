import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { View, Button } from 'native-base';

import RenderTextInput from '../../../../../../views/RenderTextInput';
import { colors } from '../../../../../../constants';

const CommentForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
            <View style={styles.fieldContainer}>
                <Field
                    style={styles.textField}
                    name='message'
                    label="Message"
                    type="text"
                    placeholder='Enter comment, please'
                    placeholderTextColor={colors.primary}
                    component={RenderTextInput}
                />
            </View>
            <Button style={styles.button} disabled={pristine || submitting} block onPress={handleSubmit} title='send'>
                <Icon size={22} color='white' name='paper-plane' />
            </Button>
        </View>
    );
};

CommentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default reduxForm()(CommentForm);