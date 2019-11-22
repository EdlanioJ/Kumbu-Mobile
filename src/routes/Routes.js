import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import App from './BottomTab.Routes';
import Auth from './Auth.Routes';
import Loading from '../pages/Loading';
import Main from './Main.Routes';

export default createAppContainer(createSwitchNavigator({
  Loading,
  App:{
    screen: Main
  },
  Auth,
  
},{
  initialRouteName: 'Loading'
}));