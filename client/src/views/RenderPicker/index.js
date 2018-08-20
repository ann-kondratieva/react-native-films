import React from 'react';
import PropTypes from 'prop-types';
//import Reactotron from 'reactotron-react-native';

import { Picker } from 'native-base';
import styles from './styles';
import reactotronReactNative from 'reactotron-react-native';
import { colors } from '../../constants';

const RenderPicker = (props) => {
    const { input, values, onValueChange, selectedValue, ...inputProps } = props;
    return (
        <Picker
            mode="dropdown"
            note
            selectedValue={selectedValue}
            onValueChange={event => {
                input.onChange(event);
                setTimeout(onValueChange);
            }}
            {...inputProps}
        >
            <Picker.Item label="Sort By" value={null} />
            {values.map((item) =>
                <Picker.Item key={item.value} label={item.label} value={item.value} />
            )}

        </Picker>
    );
};

RenderPicker.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    onValueChange: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired,
    selectedValue: PropTypes.string

};

export default RenderPicker;