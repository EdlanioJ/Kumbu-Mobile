import styled, { css } from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  background-color:'#52BA97';
  border-radius: 5px;
  padding: 0px 11px; 
  align-items: center;
  align-content: center;
  ${
    props => props.full && css`
      width: 100% - 50px;
    `}

`;
