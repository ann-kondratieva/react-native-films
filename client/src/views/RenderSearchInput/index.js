import React from 'react';
import PropTypes from 'prop-types';
//import Reactotron from 'reactotron-react-native';

import { Item, Input } from 'native-base';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const RenderSearchInput = (props) => {
    const { input, placeholderTextColor, onChangeAction, ...inputProps } = props;
    return (
        <Item underline>
            <EvilIcons name='search' size={30} color='white' />
            <Input {...inputProps}
                placeholderTextColor={placeholderTextColor}
                onChangeText={input.onChange}
                onChange={event => {
                    input.onChange(event.target.value);
                    setTimeout(onChangeAction);
                }}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                style={styles.input} />
        </Item>
    );
};

RenderSearchInput.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    placeholderTextColor: PropTypes.string,
    onChangeAction: PropTypes.func.isRequired,
};

export default RenderSearchInput;