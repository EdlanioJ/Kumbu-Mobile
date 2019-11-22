import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Text, Avatar, Block, Button } from '../components'

export default class SendForgot extends Component {
  render(){
    return (
      <Block center middle >
        <Block middle >
          <Text color = "#52BA97">Logo</Text>
        </Block>
        <Block  center flex={2.5}>
          
          <Text style={{marginTop: 10, marginBottom: 15}} color="#2E384D" size={22} weight="bold" >Edlâneo Júlio</Text>


          <Button full onPress={ () => console.log('Entrar Com Sucesso') } style={{ marginBottom: 22 }}>
            <Text height={21} spacing={0} color="#ffffff">Continuar</Text>
          </Button>
        </Block>
      </Block>

    );
  }
}