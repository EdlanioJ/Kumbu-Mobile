import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Input } from '../components';

import TabNavigation from './BottomTab.Routes';
import Search from '../pages/Search';
import CameraReader from '../pages/CameraReader';


export default createStackNavigator({
  Tab: {
    screen: TabNavigation,
    navigationOptions: ({navigation})=> ({
      headerStyle: {
        backgroundColor: '#F3F3F3',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      
       
      },
      headerLeft:  (
        <TouchableOpacity style={ style.Button } onPress={ ()=> navigation.navigate('CameraReader') } >
          <FontAwesome name="qrcode" size={25} color='#52BA97' />
        </TouchableOpacity>),
      headerRight: ( 
        <TouchableOpacity style={ style.Button } onPress={ ()=> navigation.navigate('Search') } >
          <Ionicons name="ios-search" size={25} color="#52BA97"/>
        </TouchableOpacity>
      )
        
    
    })
  },
  Search: {
    screen: Search,
    navigationOptions: {

      headerRight: ( <Input style={{ width: 275, header: 30 }} placeholder="Quem desejas pagar"  />)
    }
  },
  CameraReader: {
    screen: CameraReader,
    navigationOptions: {
      header: null,
    }
  },
}, {
  mode:'modal'
});

const style = StyleSheet.create({
  Button: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#D3D3D3',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 15,
    shadowOpacity: 0.4,
    alignItems:'center',
    justifyContent:'center', 
    marginHorizontal: 25
  }
});