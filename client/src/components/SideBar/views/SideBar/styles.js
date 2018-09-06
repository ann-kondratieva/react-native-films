import { StyleSheet } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import { createStyle } from 'react-native-theming';

import { colors } from '../../../../constants';

const styles = createStyle({
    container: {
        backgroundColor: '@backgroundColor',
        flex: 1
    },
    headerText: {
        ...robotoWeights.light,
        color: 'white',
        fontSize: 30,
    },
    serviceBar: {
        backgroundColor: 'transparent',
    },
    backButton: {
        margin: 10
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    icon: {
        color: colors.primary
    },
    item: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        ...robotoWeights.regular,
        color: colors.text,
        fontSize: 16
    },
    noUnderline: {
        borderBottomWidth: 0
    },
    list: {
        paddingTop: 7
    },
    imageContainer: {
        paddingLeft: 30
    },
    image: {
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
        width: 65,
        height: 65
    }
});

export default styles;