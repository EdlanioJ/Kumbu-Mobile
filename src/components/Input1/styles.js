import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const { width } = Dimensions.get('screen');


export const TextInput = styled.TextInput`
  border-color: #E0E7FF;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
  border-width: 0.5px;
  padding: 11px 16px;
  width: ${ props => props.width }px;
  height: ${ props=>props.height }px;

  ${
    props=>props.full && css`
      width: ${ width - 50 }px;
      height: 45px;
    `
  }
`;
