import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import{ createAppContainer } from 'react-navigation';

import Feed from '../pages/Feed';
import Service from '../pages/Service';
import Local from '../pages/Local';

export default createMaterialTopTabNavigator({
  Feed,
  Local,
  Service
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