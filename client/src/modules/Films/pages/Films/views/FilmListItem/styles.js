import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    container: {
        width: '45%',
        minWidth: '45%',
        height: 210,
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 145,
        height: 160
    },
    text: {
        ...robotoWeights.light,
        marginTop: 5
    },
    touchContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;