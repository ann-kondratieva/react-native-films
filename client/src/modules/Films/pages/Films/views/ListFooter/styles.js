import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        margin: 10,

    },
    text: {
        ...systemWeights.regular,
        margin: 10
    }
});

export default styles;