import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';

const styles = StyleSheet.create({
    titleText: {
        ...systemWeights.regular,
        color: '#9C9C9C'
    },
    text: {
        ...systemWeights.regular,
        color: colors.text,
        paddingTop: 10
    },
    ratingContainer: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    },
    rating: {
        paddingRight: 180,
        paddingTop: 15,
        height: 60
    },
    textContainer: {
        marginLeft: 30,
        marginRight: 30,
    }

});

export default styles;