import React from 'react';


import { ImageContainer, Image } from './styles';


export default function ProfileImage(props) {

  const { link, ...props } = props;

  return (
    <ImageContainer { ...props }>
      <Image source={{ uri: link }} {...props } />
    </ImageContainer>
  );

}
