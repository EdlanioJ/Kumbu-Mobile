import React, { Component } from 'react'
import { StyleSheet, Button } from 'react-native';

export default class Link extends Component {

  render() {
    const {  color, size, height, weight, style, children, ...props } = this.props;

    const linkStyle= [
      styles.link,
      size && { fontSize: size },
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      style
    ] 
    return <Button type buttonStyle={linkStyle} { ...props }/>
  }
}
const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    color: "#52BA97",
  }
})