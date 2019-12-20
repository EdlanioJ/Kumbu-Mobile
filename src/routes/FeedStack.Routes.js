import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';

import Feed from '../pages/Feed';
import Camera from '../pages/Camera';

export default createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({navigation})=> ({
      headerStyle: {
        backgroundColor: '#F3F3F3',
      },
      headerLeft: (
        <TouchableOpacity style={{width: 36, height: 36, alignContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 10}} onPress={ ()=> navigation.navigate('Camera') } >
          <FontAwesome name="qrcode" size={30} color='#52BA97' />
        </TouchableOpacity>),
    })

  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      header: null,
    }
  },
})