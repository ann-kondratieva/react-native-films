import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    error: {
        ...systemWeights.regular,
        color: 'red',
        fontSize: 14,
        marginTop: 5
    },

});

export default styles;