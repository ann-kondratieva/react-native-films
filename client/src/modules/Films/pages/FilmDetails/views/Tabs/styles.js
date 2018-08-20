import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';

const styles = StyleSheet.create({
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    },
    item: {
        backgroundColor: 'white'
    },
    text: {
        ...robotoWeights.light,
        color: colors.primary,
    },
    textActive: {
        ...robotoWeights.regular,
        color: colors.primary,
    },
    itemActive: {
        backgroundColor: 'white'
    },
    container: {
        elevation: 0
    }
});

export default styles;