import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    linearGradient: {
        height: 290,
        width: '100%'
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1
    },
    imageContainer: {
        position: 'absolute'
    },
    loader: {
        position: 'relative',

    },
    loaderContainer: {
        position: 'absolute',
        width: 160,
        height: 160
    },
    imageLoading: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
        position: 'absolute'
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    username: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 100
    }
});

export default styles;