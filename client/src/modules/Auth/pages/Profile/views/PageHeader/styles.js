import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    title: {
        ...robotoWeights.light,
        color: 'white',
        fontSize: 20,
    },
    header: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuButton: {
        marginLeft: 18,
        marginRight: 20

    },
    settingsButton: {
        marginRight: 20
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;