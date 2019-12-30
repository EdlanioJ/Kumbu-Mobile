import React from 'react';

import { Typograph } from './styles';

const Text = (props) =>{
  const { children, ...props } = props;
  return (
    <Typography {...props}>{children}</Typography>
  );
};

export default Text;
