import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    textField: {
        ...systemWeights.light,
        backgroundColor: 'transparent',
        color: 'white'
    },
    fieldContainer: {
        width: '90%',
    },
    container: {
        flexDirection: 'row',
    }
});

export default styles;