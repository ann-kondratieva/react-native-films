import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';
import { SERVICE_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexGrow: 1,
        paddingTop: SERVICE_HEIGHT
    },
    arrow: {
        color: 'white'
    },
    text: {
        ...systemWeights.regular,
        marginTop: 100
    }
});

export default styles;