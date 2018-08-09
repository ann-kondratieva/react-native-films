import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../../../constants';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        height: '100%',
        width: '100%'
    },
    container: {
        //flex: 1,
        height: '100%',
        width: '100%',
        paddingLeft: 19,
        paddingRight: 16,
        //paddingVertical: 12,
        //flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 50
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    },
    scrollContainer: {
        flexGrow: 1
    }
});

export default styles;