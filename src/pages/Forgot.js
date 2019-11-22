import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';

import { Block, Text, Button, Input } from '../components/';
const { height } = Dimensions.get('window');

export default class Forgot extends Component {
  
  render(){
    const { navigation } = this.props;
    
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={height * 0.1} behavior="padding" enabled>
        <Block center middle >
          <Block middle >
            <Text color = "#52BA97">Logo</Text>
          </Block>
          <Block  center flex={2.5}>
            <Text size={28} color="#2E384D" height={32} spacing={0} weight={'300'} style={{marginBottom: 6 }}> Esqueceu a Sua Senha? </Text>
            <Text size={15} color="#8798AD" height={22} spacing={0} weight={'300'} style ={{ marginBottom: 40}}>Entra com o teu nome de usuario</Text>

            <Input placeholder= "@user" full email style={{ marginBottom: 10 }}/>

            <Button full onPress={ () => navigation.navigate('SendForgot') } style={{ marginBottom: 22 }}>
              <Text height={21} spacing={0} color="#ffffff">Procurar</Text>
            </Button>
              
          </Block>

        </Block>
      </KeyboardAvoidingView>
      
    );
  }
  
}

