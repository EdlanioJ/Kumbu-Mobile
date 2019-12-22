import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';


const {width} = Dimensions.get("window");

export default class Line extends Component {
  render() {

    const { width, color, full, ...props } = this.props;
    const lineStyles = [
      styles.line,
      full && styles.full,
      width && { width },
      color && {borderColor: color}
    ];
    return (
      <View  style={lineStyles} {...props} />
      
    )
  }
}

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    alignSelf: 'stretch'
  }, 
  full: {
    width: width- 40,
    marginHorizontal: 20
  }

});
