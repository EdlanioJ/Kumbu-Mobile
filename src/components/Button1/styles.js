import styled, { css } from 'styled-components/native';
import {Dimensions} from 'react-native';


const { width } = Dimensions.get('screen');

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${ props => props.color || '#52BA97' };
  border-radius: 5px;
  padding: 0px 11px; 
  align-items: center;
  align-content: center;
  opacity: ${ props => props.opacity || 0.8 } ;
  ${
    props => props.full && css`
      width: ${ width - 50 }px;
    `
  }

`;
