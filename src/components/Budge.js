import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class Budge extends Component {
  render(){
    const { name, color, size } = this.props;

    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        <View style={styles.budge} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  budge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 65,
    width: 6,
    height: 6,

  }
})

