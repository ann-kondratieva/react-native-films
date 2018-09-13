import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    text: {
        ...systemWeights.light,
        color: colors.primary
    },

});

export default styles;