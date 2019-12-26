import React, { Component } from 'react';
import { AsyncStorage, StatusBar, ActivityIndicator } from 'react-native';

import { Block, Text } from '../components';

export default class Loading extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <Block middle center style={{backgroundColor:"#52BA97"}} >
        
        <Text size={28} color="#2E384D" height={32} spacing={0} weight='bold' style={{marginBottom: 6 }}>Kumbú</Text>
        <ActivityIndicator color="#FFF" size="large" />
      </Block>
    );

  }

}