import {HomeScreen, LoginScreen} from 'screens';

const options = {
  noHeader: {
    headerShown: false,
    gestureEnabled: false,
  },
};

export const routeNames = {
  Login: 'Login',
  Home: 'Home',
};

export const appRoutes = [
  {
    name: routeNames.Login,
    component: LoginScreen,
    options: options.noHeader,
  },
  {
    name: routeNames.Home,
    component: HomeScreen,
    options: options.noHeader,
  },
];
