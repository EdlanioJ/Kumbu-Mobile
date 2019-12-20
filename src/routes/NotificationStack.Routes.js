import { createStackNavigator } from 'react-navigation-stack';

import Notification from '../pages/Notification';

export default createStackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: {
      header: null,
    }
  }
})