import { StyleSheet } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { createStyle } from 'react-native-theming';

const styles = createStyle({
    linearGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;