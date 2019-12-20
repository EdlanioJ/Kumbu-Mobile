import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Pay from '../pages/Pay';
import Service from '../pages/Service';
import Local from '../pages/Local';

export default createMaterialTopTabNavigator({
  Pay,
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