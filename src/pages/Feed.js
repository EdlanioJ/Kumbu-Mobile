import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Block, Text, Avatar, Image } from '../components';

import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default class Feed extends Component {
  render() {
    return (
      <Block flex={1} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' style={{marginTop: 20, marginLeft:20 }} >Sugestões para você</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={{ marginTop:15, maxHeight:105, marginBottom:30 }}>
            <Block key={1} style={{marginTop:5, marginLeft: 20 }} center >
              <Avatar style={{width: 60, height: 60}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
              <Text size={16} color="#2E384D" height={24} spacing={0} style={{marginTop: 3 }} >@edlanio</Text>
            </Block>
            <Block key={2} style={{marginTop:5, marginLeft: 20 }} center >
              <Avatar style={{width: 60, height: 60}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
              <Text size={16} color="#2E384D" height={24} spacing={0} style={{marginTop: 3 }} >@edlanio</Text>
            </Block>
            <Block key={3} style={{marginTop:5, marginLeft: 20 }} center >
              <Avatar style={{width: 60, height: 60}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
              <Text size={16} color="#2E384D" height={24} spacing={0} style={{marginTop: 3 }} >@edlanio</Text>
            </Block>
            <Block key={4} style={{marginTop:5, marginLeft: 20 }} center >
              <Avatar style={{width: 60, height: 60}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
              <Text size={16} color="#2E384D" height={24} spacing={0} style={{marginTop: 3 }} >@edlanio</Text>
            </Block>
            <Block key={5} style={{marginTop:5, marginHorizontal: 20 }} center >
              <Avatar style={{width: 60, height: 60}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
              <Text size={16} color="#2E384D" height={24} spacing={0} style={{marginTop: 3 }} >@edlanio</Text>
            </Block>
            
          </ScrollView>
          <View middle style={styles.line}/>
          <Block flex={1}  style={{marginBottom:30}}>
            <Block space='between' row  flex='disabled'>
              <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' style={{marginTop: 20, marginLeft:20 }} >Locais próximos</Text>
              <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' color="#52BA97" style={{marginTop: 20, marginEnd:20 }} onPress={()=>{ console.log('proximo') }} >Ver mais > </Text>
            </Block>
            <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>

              <Block row style={{marginBottom:10}} >
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
                <Block flex='disabled' style={{marginTop: 10}} >
                  <Block row flex='disabled' style={{marginBottom: 5}}>
                    <Text color='#2E384D' weight='bold' style={{ marginRight: 5}}>Kero</Text>
                    <Text color='#D3D3D3' > <Ionicons name='ios-pin' size={15} /> .23 m </Text>
                  </Block>
                  <Text weight={'300'} size={12} color='#D1D1D1'>Rua 2 Bloco 2</Text>
                </Block>
              </Block>

              <Block row style={{marginBottom:10}} >
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
                <Block flex='disabled' style={{marginTop: 10}} >
                  <Block row flex='disabled' style={{marginBottom: 5}}>
                    <Text color='#2E384D' weight='bold' style={{ marginRight: 5}}>Kero</Text>
                    <Text color='#D3D3D3' > <Ionicons name='ios-pin' size={15} /> .23 m </Text>
                  </Block>
                  <Text weight={'300'} size={12} color='#D1D1D1'>Rua 2 Bloco 2</Text>
                </Block>
              </Block>

              <Block row style={{marginBottom:10}} >
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
                <Block flex='disabled' style={{marginTop: 10}} >
                  <Block row flex='disabled' style={{marginBottom: 5}}>
                    <Text color='#2E384D' weight='bold' style={{ marginRight: 5}}>Kero</Text>
                    <Text color='#D3D3D3' > <Ionicons name='ios-pin' size={15} /> .23 m </Text>
                  </Block>
                  <Text weight={'300'} size={12} color='#D1D1D1'>Rua 2 Bloco 2</Text>
                </Block>
              </Block>

            </ScrollView>

          </Block>

          <View middle style={styles.line}/>

          <ScrollView style={{marginTop:20}} >
            <Block style={{ marginBottom: 5 }}>
              <Block row  flex='disabled'>
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
                <Block style={{backgroundColor:"#d3d3d3", marginRight: 20}}>
                  <Block  row  style={{marginHorizontal: 10  }}>
                    <Text color='#2E384D' weight='bold' size={18} >@andre</Text>
                    <Text color='#2E384D' size={18} > pagou a </Text>
                    <Text color='#2E384D' weight='bold' size={18} >Você</Text>
                  </Block>
                  <Text color='#A3A3A3' size={18} style={{textAlign: 'justify', marginHorizontal: 10}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.🥰</Text>
                  <Block>

                  </Block>
                </Block>


              </Block>

            </Block>
          </ScrollView>

        </ScrollView>
        
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  line: {
    width: width -40,
    height: 0.3,
    borderColor: '#F3F3F3',
    borderWidth: 1,
    marginHorizontal:20,
    alignSelf:'stretch'
    


  }
})
