import React from 'react';

import { View } from 'react-native';

import { TextInput } from './styles';



export default function Input(props) {
  const { email, password, phone, number, ...props } = props;

  const inputType = email 
      ? 'email-address' : number
      ? 'numeric' : phone
      ? 'phone-pad' : 'default';


  return (
    <TextInput
      secureTextEntry = {password}
      keyboardType ={inputType}
      { ...props }
    />
  )

}