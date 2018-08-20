import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';

const styles = StyleSheet.create({
    container: {
        //margin: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
    },
    textField: {
        ...robotoWeights.redular,
        color: colors.primary,
        fontSize: 15
    },
    button: {
        borderRadius: 50,
        backgroundColor: colors.primary,
        width: 35,
        height: 35,
        marginTop: 10
    },
    fieldContainer: {
        width: '90%',
    }
});

export default styles;