import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
//import Reactotron from 'reactotron-react-native';

import { View } from 'react-native';
import { Button, Text } from 'native-base';
import styles from './styles';
import RenderTextInput from '../../../../../../views/RenderTextInput';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import reactotronReactNative from 'reactotron-react-native';

const UsernameForm = (props) => {
    const { handleSubmit, pristine, submitting, onClose } = props;
    return (
        <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
            <View style={styles.fieldContainer}>
                <Field
                    style={styles.textField}
                    name='username'
                    label="Username"
                    type="text"
                    placeholderTextColor='white'
                    component={RenderTextInput}
                />
            </View>
            <Button style={styles.buttonOk} disabled={pristine || submitting} transparent onPress={handleSubmit}>
                <Icon size={22} color='white' name='check' />
            </Button>
            <Button style={styles.buttonCancel} transparent onPress={onClose}>
                <Icon size={22} color='white' name='close' />
            </Button>
        </View>
    );
};

function mapStateToProps(state, props) {
    return {
        initialValues: {
            username: props.username
        },
    };
}

UsernameForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string,
    username: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(reduxForm({ enableReinitialize: true, keepDirtyOnReinitialize: true })(UsernameForm));