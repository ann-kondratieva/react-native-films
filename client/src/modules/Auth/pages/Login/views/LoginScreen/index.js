import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
import LoginForm from '../LoginForm';
import { colors } from '../../../../../../constants';

const LoginScreen = ({ onSignUpClick, ...props }) => {
    return (
        <LinearGradient colors={[colors.secondary, colors.primary]} style={styles.linearGradient}>
            <ScrollView >
                <Text style={styles.text}>SIGN IN</Text>
                <View style={styles.inputFields} >
                    <LoginForm {...props} />
                </View>
                <TouchableOpacity onPress={onSignUpClick} style={styles.signUp} >
                    <Text style={styles.spacing}> or  <Text style={styles.highlight}>Sign Up</Text> </Text>
                </TouchableOpacity >
            </ScrollView>
        </LinearGradient>

    );
};

LoginScreen.propTypes = {
    onSignUpClick: PropTypes.func.isRequired
};

export default LoginScreen;