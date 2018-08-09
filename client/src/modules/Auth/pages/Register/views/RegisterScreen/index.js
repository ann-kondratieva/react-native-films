import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
import RegisterForm from '../RegisterForm';
import { colors } from '../../../../../../constants';

const RegisterScreen = ({ onSignInClick, ...props }) => {
    return (
        <LinearGradient colors={[colors.secondary, colors.primary]} style={styles.linearGradient}>
            <ScrollView>
                <Text style={styles.text}>SIGN UP</Text>
                <View style={styles.inputFields} >
                    <RegisterForm {...props} />
                </View>
                <TouchableOpacity onPress={onSignInClick} style={styles.signUp} >
                    <Text style={styles.spacing}> or  <Text style={styles.highlight}>Sign In</Text> </Text>
                </TouchableOpacity >
            </ScrollView>
        </LinearGradient>
    );
};

RegisterScreen.propTypes = {
    onSignInClick: PropTypes.func.isRequired
};

export default RegisterScreen;