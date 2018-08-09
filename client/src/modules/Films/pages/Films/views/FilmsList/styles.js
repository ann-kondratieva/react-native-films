import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexGrow: 1
    },
    arrow: {
        color: 'white'
    },
    text: {
        ...robotoWeights.regular,
        marginTop: 100
    }
});

export default styles;