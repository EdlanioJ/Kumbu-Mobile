import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import { Block, Text } from '../components';

import MaterialTab from '../routes/MaterialTab';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Block flex={1}>
          <Text>Vida</Text>
          <StatusBar barStyle="dark-content" hidden = {false} translucent={false} backgroundColor="#52BA97" />
        </Block>
      </SafeAreaView>
      
    );
  }
}
const style = StyleSheet.create({
  header:{
    backgroundColor: '#52BA97' 
  }
})
