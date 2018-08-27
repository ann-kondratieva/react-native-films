import React from 'react';
import PropTypes from 'prop-types';
//import Reactotron from 'reactotron-react-native';

import { Item, Input, Text } from 'native-base';
import styles from './styles';
import reactotronReactNative from 'reactotron-react-native';

const RenderTextInput = (props) => {
    const { input, meta: { error, submitFailed }, placeholderTextColor, ...inputProps } = props;
    let hasError = submitFailed && error;
    return (
        <React.Fragment>
            <Item underline error={hasError ? true : false}>
                <Input
                    {...inputProps}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={input.onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    value={input.value} />
            </Item>
            {hasError ? <Text style={styles.error}>{error}</Text> : <Text />}
        </React.Fragment>
    );
};

RenderTextInput.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    placeholderTextColor: PropTypes.string
};

export default RenderTextInput;