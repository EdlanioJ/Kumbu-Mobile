import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import{ createAppContainer } from 'react-navigation';

import Feed from '../pages/Feed';
import Service from '../pages/Service';
import Local from '../pages/Local';

export default createMaterialTopTabNavigator({
  Service,
  Feed,
  Local,
 
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