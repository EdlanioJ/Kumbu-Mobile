import React, {Component} from 'react';
import { StyleSheet, KeyboardAvoidingView, Dimensions, StatusBar } from 'react-native';


import { Block, Button, Text, Input, Link } from '../components/'

const { height } = Dimensions.get('window');

export default class Login extends Component{
  
  render(){
    const { navigation } = this.props;
    return (
      
      <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={height * 0.1} behavior="padding" enabled>
        <StatusBar backgroundColor="#52BA97" barStyle="dark-content" />
        <Block center middle >
          <Block middle>
            <Text color = "#52BA97">Logo</Text>
          </Block>
          <Block flex={2.5} center>
            <Block  center>
              <Text size={28} color="#2E384D" height={32} spacing={0} weight={'300'} style={{marginBottom: 6 }}> Entrar para o Kumbú </Text>
              <Text size={15} color="#8798AD" height={22} spacing={0} weight={'300'} style ={{ marginBottom: 40}}>Porfavor entra com os teu dados para continuar</Text>
            
              <Input placeholder= "@user" full email style={{ marginBottom: 10 }}/>
              <Input placeholder= "Password" full password style={{ marginBottom: 25 }} />
              <Button full onPress={ () => navigation.navigate('App') } style={{ marginBottom: 22 }}>
                <Text height={21} spacing={0} color="#ffffff">Entrar</Text>
              </Button>
              <Text size={16} weight="bold" color="#52BA97" onPress={ ()=> navigation.navigate('Forgot') } style={{ marginBottom: 8 }}>Esqueci minha Senha</Text>
              <Text height={22} color="#8798AD">
                Não têm conta? <Text size={16} weight="bold" color="#52BA97" onPress={ ()=> navigation.navigate('Register') } >Cadastra-se</Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
      
    );
  }
  

}

