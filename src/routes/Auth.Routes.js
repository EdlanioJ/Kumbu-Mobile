import { createStackNavigator } from 'react-navigation-stack';

import Forgot from '../pages/Forgot';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SendForgot from '../pages/SendForgot';

export default createStackNavigator({
  Login,
  Register,
  Forgot,
  SendForgot,
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerShown: false,
  }
});