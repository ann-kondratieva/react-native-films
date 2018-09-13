import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    title: {
        ...systemWeights.light,
        color: 'white',
        fontSize: 20
    },
    header: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center'
    },
    menuButton: {
        marginLeft: 18,
        marginRight: 20
    }
});

export default styles;