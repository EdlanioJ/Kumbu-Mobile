import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';

import { Container, IconContainer, Title, Description } from './styles';

const { width, height } = Dimensions.get('window');
const qrSize = width * 0.9;

export default function CameraReader({ navigation }) {
  const [ cameraPermission, setCameraPermission ] = useState(null);
  const [ scanned, setScanned ] = useState(null);

  useEffect( async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    setCameraPermission(status === 'granted')
  }, []);

  function handleCancel() {
    navigation.navigate('Feed');
  }



  handleBarCodeScanned = ({
    type,
    data
  }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  if (cameraPermission === null) {
    return (<Description> Requesting for camera permission </Description>);
  }
  if (cameraPermission === false) {
    return (<Description> No access to camera </Description>);
  }

  

  return (
    <Container>
      <BarCodeScanner onBarCodeScanned = {
        scanned ? null : handleBarCodeScanned
      }
      style = {{ flex: 1, alignItems: 'center', width, height,  }}
      >
        <Title>Leia o Qr Code</Title>
        <IconContainer>
          <Ionicons name="ios-qr-scanner" color="#FFF" size={qrSize} />
        </IconContainer>
        <Description onPress={ handleCancel }>cancelar</Description>

      </BarCodeScanner>

    </Container>
  );

}