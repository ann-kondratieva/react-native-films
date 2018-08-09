import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    error: {
        ...robotoWeights.regular,
        color: 'red',
        fontSize: 14,
        marginTop: 5
    },

});

export default styles;