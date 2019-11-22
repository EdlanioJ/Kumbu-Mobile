import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class ImageType extends Component {
  render(){
    const { style, full, profile, ...props } = this.props;
    const imageStyles =[
      styles.image,
      full && styles.full,
      profile && { width: profile, heigth: profile, borderRadius: profile / 2 }
    ]

    return <Image style={ imageStyles }  {...props }/>
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
  },
  full: {
    width: width - 50,
  }
  
})