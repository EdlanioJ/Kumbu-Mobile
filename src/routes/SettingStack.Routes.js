import { createStackNavigator } from 'react-navigation-stack';

import Setting from '../pages/Setting';

const SettingStack = createStackNavigator({
  Setting
})

SettingStack.navigationOptions = ({ navigation }) => {   
  let tabBarVisible = true;   
  if(navigation.state.index > 0) {
    tabBarVisible = false;   
  }
    return { tabBarVisible, }; 
  };

  export default SettingStack;