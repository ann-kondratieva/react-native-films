import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import AuthLoadingContainer from '../modules/Auth/components/AuthLoadingScreen';
import Films from '../modules/Films/pages/Films';
import FilmDetails from '../modules/Films/pages/FilmDetails';
import Login from '../modules/Auth/pages/Login';
import Register from '../modules/Auth/pages/Register';
import Sidebar from '../components/SideBar';
import Comments from '../modules/Films/pages/Comments';
import Profile from '../modules/Auth/pages/Profile';
import AddFilm from '../modules/Films/pages/AddFilm';


const AppStack = createStackNavigator({
    FilmDetails: {
        screen: FilmDetails
    },
    Films: {
        screen: Films
    },
    Comments: {
        screen: Comments
    },
    Profile: {
        screen: Profile
    },
    AddFilm: {
        screen: AddFilm
    }
},
{
    navigationOptions: { header: null },
    initialRouteName: 'Films'
});

const AppDrawer = createDrawerNavigator({
    Home: {
        screen: AppStack
    },
    Profile: {
        screen: Profile
    }
},
{
    navigationOptions: { header: null },
    contentComponent: Sidebar,
}
);

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
},
{
    navigationOptions: { header: null },
    initialRouteName: 'Login'
}
);

const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingContainer,
        App: AppDrawer,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default Navigator;