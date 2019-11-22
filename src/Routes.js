import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import { Budge } from './components/';


import Forgot from './pages/Forgot';
import Feed from './pages/Feed';
import Loading from './pages/Loading';
//import Home from './pages/Home';
import Local from './pages/Local';
import Login from './pages/Login'; 
import Notification from './pages/Notification';
import Pay from './pages/Pay';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Seach from './pages/Search';
import SendForgot from './pages/SendForgot';
import Service from './pages/Service';
import Setting from './pages/Setting';
import Wallet from './pages/Wallet';

const NotWithBudge = props => {
  return <Budge { ...props } />
};

const Home = createMaterialTopTabNavigator({
  Feed,
  Local,
  Service,
},{
  tabBarOptions: {
    activeTintColor:'#52BA97',
    inactiveTintColor:'#808080',
    indicatorStyle:{
      backgroundColor:'#52BA97'
    },

    style: {
      backgroundColor: '#F3F3F3'
    }
  },
});

const App = createBottomTabNavigator({
  Home,
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
      if(routeName === 'Home') {
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

const Auth = createStackNavigator({
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

const Main = createStackNavigator({
  App
})

export default createAppContainer(createSwitchNavigator({
  Loading,
  App,
  Auth,
  
},{
  initialRouteName: 'Loading'
}));