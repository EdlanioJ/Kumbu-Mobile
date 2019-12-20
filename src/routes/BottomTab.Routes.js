import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';


import { Ionicons } from '@expo/vector-icons';

import { Budge } from '../components/';


import Feed from './FeedStack.Routes';
import Notification from './NotificationStack.Routes';
import Pay from './PaymentStack.Routes';
import Setting from './SettingStack.Routes';
import Wallet from './WalletStack.Routes';

const NotWithBudge = props => {
  return <Budge { ...props } />
};
export default createBottomTabNavigator({
  Feed,
  Wallet,
  Pay,
  Notification,
  Setting,
},{
  navigationOptions: {
    headerShown: true
  },
  tabBarOptions: {
    activeTintColor: "#52BA97",
    inactiveTintColor:"gray",
    showLabel: false,
    showIcon: true,
  },
  defaultNavigationOptions: ({ navigation }) => ({

    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if(routeName === 'Feed') {
        iconName = `ios-home`;
      }else if(routeName === 'Wallet') {
        iconName = `ios-wallet`;
      }else if(routeName === 'Pay') {
        iconName = `md-add`;
      }else if(routeName === 'Notification') {
        iconName = `ios-notifications`;
        IconComponent = NotWithBudge;

      }else if(routeName ===  'Setting') {
        iconName = `ios-menu`
      }
      return <IconComponent  name={iconName} size={25} color={tintColor} />
    }
  }),
});
