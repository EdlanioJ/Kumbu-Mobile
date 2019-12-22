import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Text, Block } from '../components';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Pay from '../pages/Pay';
import Service from '../pages/Service';
import Local from '../pages/Local';

export default createMaterialTopTabNavigator({
  Pay: {
    screen: Pay,
    navigationOptions:{
      tabBarLabel:({tintColor})=> (<Text color={tintColor} size={16}>Principais</Text>)
    }

  },
  Local: {
    screen: Local,
    navigationOptions: {
      tabBarLabel: ({tintColor})=>{
        return (
          <Block row center middle>
            <Ionicons name='ios-pin' size={18} color={tintColor} />
            <Text color={tintColor} size={16} style={{marginLeft: 4 }}>Locais</Text>
          </Block>
        )
      }
    
    }
  },
  Service: {
    screen: Service,
    navigationOptions: {
      tabBarLabel: ({tintColor})=>{
        return (
          <Block row center middle>
            <FontAwesome name="shopping-bag" size={18} color={tintColor} />
            <Text color={tintColor} size={16} style={{marginLeft: 4 }}>Store</Text>
          </Block>
        )
      },
    }
  },
 
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