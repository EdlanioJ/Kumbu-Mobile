import { createStackNavigator } from 'react-navigation-stack';

import Notification from '../pages/Notification';

const NotificationStack = createStackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: {
      header: null,
    }
  }
})
NotificationStack.navigationOptions = ({ navigation }) => {   
  let tabBarVisible = true;   
  if(navigation.state.index > 0) {
    tabBarVisible = false;   
  }
    return { tabBarVisible, }; 
  };

  export default NotificationStack;