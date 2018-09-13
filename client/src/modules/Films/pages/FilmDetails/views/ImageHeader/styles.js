import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    linearGradient: {
        height: 290,
        width: '100%'
    },
    image: {
        width: 200,
        height: 250,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;