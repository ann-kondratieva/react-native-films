import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { HEADER_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: HEADER_HEIGHT,
        alignItems: 'center'
    }
});

export default styles;