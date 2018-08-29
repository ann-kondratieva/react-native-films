import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
import LoginForm from '../LoginForm';
import { colors } from '../../../../../../constants';
import Loading from '../../../../../../views/Loading';

const LoginScreen = ({ onSignUpClick, isLoading, ...props }) => {
    return (
        <LinearGradient colors={[colors.secondary, colors.primary]} style={styles.linearGradient}>
            {isLoading ?
                <Loading /> :
                <ScrollView >
                    <Text style={styles.text}>SIGN IN</Text>
                    <View style={styles.inputFields} >
                        <LoginForm {...props} />
                    </View>
                    <TouchableOpacity onPress={onSignUpClick} style={styles.signUp} >
                        <Text style={styles.spacing}> or  <Text style={styles.highlight}>Sign Up</Text> </Text>
                    </TouchableOpacity >
                </ScrollView>}

        </LinearGradient>

    );
};

LoginScreen.propTypes = {
    onSignUpClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default LoginScreen;