import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './Auth.Routes';
import Loading from '../pages/Loading';
import Main from './BottomTab.Routes';

export default createAppContainer(createSwitchNavigator({
  Loading,
  App: {
    screen: Main
  },
  Auth,
  
},{
  initialRouteName: 'Loading'
}));