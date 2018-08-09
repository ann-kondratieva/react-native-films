import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContent: {
        backgroundColor: 'rgba(228,229,231,1)',
        borderRadius: 18,
    },
    button: {
        height: 40,
        width: '100%',
    },
    buttonText: {
        ...robotoWeights.regular,
        fontSize: 17,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonContainer: {
        height: 40
    },
    headerText: {
        ...robotoWeights.bold,
        fontSize: 18,
        marginBottom: 3
    },
    textContainer: {
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: '100%'
    },
    modalText: {
        ...robotoWeights.regular,
    },
});

export default styles;