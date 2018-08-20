import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    textField: {
        ...robotoWeights.light,
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