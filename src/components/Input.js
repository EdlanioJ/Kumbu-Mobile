import React , { Component } from 'react';
import { TextInput, StyleSheet, Dimensions, View } from 'react-native';

const { width }  = Dimensions.get("window");

export default class Input extends Component {
  render() {
    const { style, full, email, password, phone, number, ...props } = this.props;
    const inputStyles = [
      styles.input,
      full && styles.full, 
      style,
    ];

    const inputType = email 
      ? 'email-address' : number
      ? 'numeric' : phone
      ? 'phone-pad' : 'default';

    return (
      
        <TextInput
          style = { inputStyles }
          secureTextEntry = {password}
          autoCapitalize = "none"
          autoCorrect = {false}
          keyboardType ={inputType}
          {...props}
        />
      
    );

  }
}
const styles = StyleSheet.create({
  full: {
    width: width - 50,
    height: 45,
  },
  input: {
    borderColor: "#E0E7FF",
    borderRadius: 5,
    
    fontSize: 16,
    paddingVertical: 11,
    paddingHorizontal:  16,
    color: "#000",
    borderWidth: 0.5,

  }
});