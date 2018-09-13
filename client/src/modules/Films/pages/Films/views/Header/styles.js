import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    title: {
        ...systemWeights.light,
        color: 'white',
        fontSize: 20
    },
    menuButton: {
        marginLeft: 18,
        marginRight: 20
    },
    searchContainer: {
        width: '100%',
        flex: 1
    },
    searchButton: {
        alignSelf: 'flex-end',
        marginRight: 20
    }
});

export default styles;