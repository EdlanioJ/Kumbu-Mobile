import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  align-content: center;
  background-color: #000;

`;

export const IconContainer = styled.View`
  margin-top:20%;
  margin-bottom: 30%
`;

export const Title = styled.Text`
  font-size: ${ width * 0.09}px;
  color: #FFF;
  align-self: center;
  margin-top: 20%;
`;

export const Description = styled.Text`
  font-size: ${ width * 0.05}px;
  color: #FFF;
  align-self: center;
`;