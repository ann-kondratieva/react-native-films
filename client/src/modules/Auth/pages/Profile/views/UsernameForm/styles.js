import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonOk: {
        marginRight: 5
    },
    textField: {
        ...systemWeights.light,
        backgroundColor: 'transparent',
        color: 'white',
        height: 40,
        fontSize: 20,
        padding: 0,
        paddingLeft: 5,
        width: '100%'
    },
    fieldContainer: {
        width: 170,
    }
});

export default styles;