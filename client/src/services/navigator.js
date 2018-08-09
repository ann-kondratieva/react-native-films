import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import AuthLoadingContainer from '../modules/Auth/components/AuthLoadingScreen';
import Films from '../modules/Films/pages/Films';
import FilmDetails from '../modules/Films/pages/FilmDetails';
import Login from '../modules/Auth/pages/Login';
import Register from '../modules/Auth/pages/Register';
import Test from '../modules/Films/pages/Test';
import Sidebar from '../components/SideBar';

const AppStack = createStackNavigator({
    FilmDetails: {
        screen: FilmDetails
    },
    Films: {
        screen: Films
    },
    Test: {
        screen: Test
    }
},
{
    navigationOptions: { header: null },
    initialRouteName: 'Films'
});

const AppDrawer = createDrawerNavigator({
    Home: {
        screen: AppStack
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