import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';
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
        ...systemWeights.light,
        color: colors.primary,
    },
    textActive: {
        ...systemWeights.regular,
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