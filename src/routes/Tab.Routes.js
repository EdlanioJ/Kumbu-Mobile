import { createBottomTabNavigator } from 'react-navigation-tabs';


import Home from './Home.Routes';

import Notification from '../pages/Notification';
import Pay from '../pages/Pay';
import Setting from '../pages/Setting';
import Wallet from '../pages/Wallet';

export default createBottomTabNavigator({
  Home,
  Wallet,
  Pay,
  Notification,
  Setting,
});