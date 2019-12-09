import React, { Component } from 'react';



import { TouchableOpacity } from './styles';

export default class Button extends Component {
  

  render(){
    const { children, opacity, ...props } = this.props;
    return (
      <TouchableOpacity activeOpacity = { opacity || 0.8 } {...props}>
        { children }
      </TouchableOpacity>
      )
  }

}
