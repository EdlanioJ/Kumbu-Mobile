import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

export default class Setting extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" hidden = {false} translucent={false} backgroundColor="#52BA97" />
        <Text> Setting </Text>
      </View>
    )
  }
}
