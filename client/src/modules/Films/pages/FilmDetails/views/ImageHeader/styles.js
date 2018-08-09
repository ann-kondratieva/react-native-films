import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    linearGradient: {
        height: 290,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 250,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
});

export default styles;