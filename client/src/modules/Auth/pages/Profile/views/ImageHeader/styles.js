import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    linearGradient: {
        height: 290,
        width: '100%'
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    username: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;