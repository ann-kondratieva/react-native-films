import { createTheme } from 'react-native-theming';

const themes = [
    createTheme({
        backgroundColor: 'white',
        textColor: 'black',
        mainColor: '#B993D6',
        secondaryColor: '#8CA6DB'
    }, 'Light'),
    createTheme({
        backgroundColor: 'black',
        textColor: 'white',
        mainColor: '#B993D6',
        secondaryColor: '#8CA6DB'
    }, 'Dark'),
];

export default themes;