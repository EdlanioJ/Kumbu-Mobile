import styled, { css } from 'styled-components/native';

export const Typograph = styled.Text`
  color: ${ props => props.color };
  font-size: ${ props=> props.size || 14 }px;
  line-height: ${ props => props.height }px;
  letter-spacing: ${ props => props.spacing }px;
  font-weight: ${ props => props.weight };
  ${
    props=> props.center && css`
      align-items: center;
    `
  }
  
`;
