import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';

const styles = StyleSheet.create({
    button: {
        width: '60%',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.primary,
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
        ...systemWeights.regular,
        fontSize: 16,
        color: colors.primary,
    },
    textField: {
        ...systemWeights.light,
        backgroundColor: 'transparent',
        color: colors.primary,
    },
    container: {
        padding: 30
    },
    linearGradient: {
        height: 290,
        width: '100%'
    }
});

export default styles;