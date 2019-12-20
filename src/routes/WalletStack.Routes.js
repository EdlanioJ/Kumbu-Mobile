import { createStackNavigator } from 'react-navigation-stack';

import Wallet from '../pages/Wallet';

export default createStackNavigator({
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      header: null,
    }
  }
})