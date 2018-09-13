import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    username: {
        ...systemWeights.light,
        fontSize: 20,
        color: 'white',
        marginTop: 10
    },
    usernameContainer: {
        flexDirection: 'row',
        height: 40
    },
    editButton: {
        marginLeft: 5,
    },
    formContainer: {
        flexDirection: 'row',
        height: 40
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default styles;