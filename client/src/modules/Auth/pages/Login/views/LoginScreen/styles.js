import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%',
        display: 'flex'
    },
    text: {
        ...systemWeights.thin,
        marginTop: 75,
        textAlign: 'center',
        fontSize: 50,
        letterSpacing: 0,
        color: 'white'
    },
    inputFields: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    spacing: {
        ...systemWeights.regular,
        flexGrow: 1,
        fontWeight: '300',
        textAlign: 'center',
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.65)'
    },
    highlight: {
        ...systemWeights.regular,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '400',
        fontSize: 18,
    },
    signUp: {
        alignSelf: 'center',
        width: 180,
        height: 40
    }

});

export default styles;