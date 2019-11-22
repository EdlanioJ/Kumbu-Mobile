import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class Avatar extends Component {

  render(){

    const { style, profile, shadow, logo, ...props } = this.props;
    const avatarStyles = [
      styles.avatar,
      style,
      profile && styles.profile,
      logo && styles.logo,
    ];

    return (
      <Image 
        style={ avatarStyles } 
        {...props}
      />);

  }
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 30,
    alignSelf: 'center',
  },
  profile:{
    width: 200,
    height: 200,
  },
  logo: {
    width: 50,
    height: 50,
  },
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:0.5 * 5,
    },
    shadowOpacity: 0.8,



  }
});