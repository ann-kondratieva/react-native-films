import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        margin: 10,

    },
    text: {
        ...robotoWeights.regular,
        margin: 10
    }
});

export default styles;