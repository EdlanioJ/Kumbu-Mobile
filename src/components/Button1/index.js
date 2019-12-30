import React from 'react';

import { ButtonContainer } from './styles';

export default function Button(props) {
  
  const { children, ...props} = props;

  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
    
  );
}
