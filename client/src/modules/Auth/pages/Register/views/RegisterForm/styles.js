import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.65)',
        borderRadius: 25,
        marginTop: 25,
        marginBottom: 25,
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 0
    },
    logIn: {
        ...robotoWeights.regular,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    textField: {
        ...robotoWeights.light,
        backgroundColor: 'transparent',
        marginTop: 8,
        color: 'white',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20
    },
    container: {
        padding: 20
    },
    spinner: {
        marginTop: 12
    }
});

export default styles;