import { createBottomTabNavigator } from 'react-navigation-tabs';

import FeedStack from './FeedStack.Routes';
import WalletStack from './WalletStack.Routes';
import PaymentStack from './PaymentStack.Routes';
import NotificationStack from './NotificationStack.Routes';
import SettingStack from './SettingStack.Routes';




export default createBottomTabNavigator({
  FeedStack,
  WalletStack,
  PaymentStack,
  NotificationStack,
  SettingStack,
});