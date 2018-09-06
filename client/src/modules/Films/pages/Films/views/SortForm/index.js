import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { View } from 'native-base';

import RenderPicker from '../../../../../../views/RenderPicker';
import { colors } from '../../../../../../constants';
import { SORT_VALUES, SERVICE_HEIGHT } from '../../constants';
import { Animated } from 'react-native';
import reactotronReactNative from 'reactotron-react-native';

const SortForm = (props) => {
    const { handleSubmit, selectedValue, clampedScroll } = props;
    const navbarTranslate = clampedScroll.interpolate({
        inputRange: [0, SERVICE_HEIGHT],
        outputRange: [0, -(SERVICE_HEIGHT)],
        extrapolate: 'clamp',
    });
    const navbarOpacity = clampedScroll.interpolate({
        inputRange: [0, SERVICE_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    return (
        <Animated.View style={[styles.serviceContainer, { transform: [{ translateY: navbarTranslate }], opacity: navbarOpacity }]} >
            <View style={styles.container}>
                <View style={styles.fieldContainer}>
                    <Field
                        style={styles.textField}
                        name='sortBy'
                        label="SortBy"
                        type="text"
                        placeholder='Sort By'
                        values={SORT_VALUES}
                        component={RenderPicker}
                        selectedValue={selectedValue}
                        onValueChange={handleSubmit}
                    />
                </View>
            </View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            </LinearGradient>
        </Animated.View >
    );
};

SortForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string,
    clampedScroll: PropTypes.object.isRequired,
};

export default reduxForm()(SortForm);