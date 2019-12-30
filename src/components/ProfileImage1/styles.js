import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  width: ${props=> props.size }px;
  height: ${props=> props.size }px;
  border-radius: ${props=> props.size / 2 }px;
  border: 0.5px solid #000;
  align-items: center;
  align-content: center;
  
`;
export const Image = styled.Image`
  width: ${props=> props.size - 4 }px;
  height: ${props=> props.size - 4 }px;
  border-radius: ${props=> (props.size - 4) / 2 }px;
  border: 0.5px solid #000;
  align-self: center;
`;
