import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

import PaymentTab from './PaymentTab.Routes';
import Search from '../pages/Search';
import Camera from '../pages/Camera';


export default createStackNavigator({
  Payment: {
    screen: PaymentTab,
    navigationOptions: ({navigation}) =>({
      headerStyle: {
        backgroundColor: '#F3F3F3',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerLeft:  (
        <TouchableOpacity style={{ width: 36, height: 36, alignContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 5 }} onPress={ ()=> navigation.navigate('Camera') } >
          <FontAwesome name="qrcode" size={25} color='#52BA97' />
        </TouchableOpacity>),
      headerRight: ( 
        <TouchableOpacity style={{ width: 36, height: 36, alignContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 5 }} onPress={ ()=> navigation.navigate('Search') } >
          <Ionicons name="ios-search" size={25} color="#52BA97"/>
        </TouchableOpacity>
      )

    })
  },
  Search,
  Camera: {
    screen: Camera,
    navigationOptions: {
      header: null,
    }

  },

})