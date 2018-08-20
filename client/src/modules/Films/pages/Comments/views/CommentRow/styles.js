import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { colors } from '../../../../../../constants';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width,
        padding: 10,
        flexDirection: 'row'
    },
    contentHeader: {
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 20
    },
    time: {
        ...robotoWeights.regular,
        fontSize: 11,
        color: '#808080'
    },
    name: {
        ...robotoWeights.regular,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text
    },
    text: {
        ...robotoWeights.regular,
    },
    textContainer: {
        maxWidth: Dimensions.get('window').width - Dimensions.get('window').width / 4
    }
});

export default styles;