import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';

import Feed from '../pages/Feed';
import CameraReader from '../pages/CameraReader';

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({navigation})=> ({
      headerStyle: {
        backgroundColor: '#F3F3F3',
      },
      headerLeft: (
        <TouchableOpacity style={{width: 36, height: 36, alignContent: 'center', alignItems: 'center', marginHorizontal: 20, marginVertical: 10}} onPress={ ()=> navigation.navigate('CameraReader') } >
          <FontAwesome name="qrcode" size={30} color='#52BA97' />
        </TouchableOpacity>),
    })

  },
  CameraReader: {
    screen: CameraReader,
    navigationOptions: {
      header: null,
      
    }
  },

})
FeedStack.navigationOptions = ({ navigation }) => {   
  let tabBarVisible = true;   
  if(navigation.state.index > 0) {
    tabBarVisible = false;   
  }
    return { tabBarVisible, }; 
  };

export default FeedStack;