import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import LinearGradient from 'react-native-linear-gradient';
//import Reactotron from 'reactotron-react-native';

import { View, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import styles from './styles';
import RenderTextInput from '../../../../../../views/RenderTextInput';
import { trim } from '../../../../../../services/normalizers';
import { colors } from '../../../../../../constants';

const AddFilmForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <ScrollView keyboardShouldPersistTaps={'handled'} >
            <View style={styles.container}>
                <Field
                    style={styles.textField}
                    name='title'
                    label="Title"
                    type="text"
                    placeholder='Title'
                    placeholderTextColor={colors.primary}
                    component={RenderTextInput}
                    normalize={trim}
                />
                <Field
                    style={styles.textField}
                    name='description'
                    label="Description"
                    type="description"
                    placeholder='Description'
                    placeholderTextColor={colors.primary}
                    component={RenderTextInput}
                    multiline={true}
                />
                <Button transparent info style={styles.button} disabled={pristine || submitting} block onPress={handleSubmit} title='login'>
                    <Text style={styles.logIn}>SAVE</Text>
                </Button>
            </View>
        </ScrollView>


    );
};

AddFilmForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default reduxForm()(AddFilmForm);