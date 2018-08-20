import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    text: {
        ...robotoWeights.light,
        color: colors.primary
    },

});

export default styles;