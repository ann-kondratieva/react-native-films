import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { SERVICE_HEIGHT, HEADER_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    textField: {

    },
    fieldContainer: {
        // width: '90%',
    },
    container: {
        width: '60%',
        paddingLeft: '10%',
        justifyContent: 'center',
        height: 45
    },
    linearGradient: {
        height: 2,
        width: '100%',
        marginTop: 0.5
    },
    serviceContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: SERVICE_HEIGHT,
        backgroundColor: 'white'
    }
});

export default styles;