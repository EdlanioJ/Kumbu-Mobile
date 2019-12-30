import styled, { css } from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen') ;

export const LineContent = styled.View`

  border-width: ${ StyleSheet.hairlineWidth }px;
  border-color: ${ props=> props.color };
  width: ${ props => props.width }px;
  align-self: stretch;
  ${
    props=>props.full && css`
      width: ${ width - 40 }px;
      margin: 0px 20px;
    `
  }



`;