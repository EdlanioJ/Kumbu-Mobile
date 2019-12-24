import React, { Component } from 'react';
import { View, Linking, LayoutAnimation, Dimensions, StatusBar } from 'react-native';

import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Ionicons } from '@expo/vector-icons';

import { Block, Text } from '../components/';

const { width } = Dimensions.get('window')
const qrSize = width * 0.7


export default class CameraReader extends Component {
  

  state = {
    hasCameraPermission: null,
    scanned: false,
  };
  
  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async() => {
    const {
      status
    } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  };

  render() {
    const { navigation } = this.props;
    const {
      hasCameraPermission,
      scanned
    } = this.state;

    if (hasCameraPermission === null) {
      return (<Text> Requesting for camera permission </Text>);
    }
    if (hasCameraPermission === false) {
      return (<Text> No access to camera </Text>);
    }

    return ( 
      <Block center middle style={{backgroundColor: "#000"}}>
        <BarCodeScanner onBarCodeScanned = {
          scanned ? undefined : this.handleBarCodeScanned
        }
        style = {{ flex: 1, alignItems: 'center' }}
        >
          <Text size={ width * 0.09 } color="FFF" center style={{ width: '70%', marginTop: '10%' }} >Leia o Qr Code</Text>
          <Block flex="disabled" style={{ marginTop: '20%', marginBottom:'20%' }}>
            <Ionicons name="md-qr-scanner" color="#FFF" size={qrSize} />
          </Block>
          
          <Text size={ width * 0.05 } color="#FFF" center style={{width:'70%'}} onPress={ () => navigation.pop() } >cancelar</Text>
        </BarCodeScanner>
        {
          scanned && (<Button title = {
              'Tap to Scan Again'
            }
            onPress = {
              () => this.setState({
                scanned: false
              })
            }
            />
          )
        }
        <StatusBar hidden />
      </Block>
      
    );
  }
  handleBarCodeScanned = ({
    type,
    data
  }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
} 