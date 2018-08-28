import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../../../constants';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    container: {
        //flex: 1,
        height: '100%',
        width: '100%',
        paddingLeft: 19,
        paddingRight: 16,
        alignItems: 'center',
    },
    textContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 10
    },
    form: {

    }
});

export default styles;