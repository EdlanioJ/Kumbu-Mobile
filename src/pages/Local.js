import React, { Component } from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { block, Text, Block, Avatar } from '../components';
const places =[
  {
    id: "1",
    name: "cantina k",
    img: "https://facebook.github.io/react-native/img/tiny_logo.png",
    distance: ".1 m",
    address: "Rua 2 Bloco 2"
  }
]
export default class Local extends Component {
  render() {
    return (
      <Block>
        <FlatList 
          showsVerticalScrollIndicator={false} 
          data={places}
          contentContainerStyle={{ paddingVertical: 20 }}
          ItemSeparatorComponent={
            () => <View style={{height: 10}}/>
          }
          
          renderItem={
            ({item})=>{
              return (
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} activeOpacity={0.3} >
                  <Avatar style={{width: 60, height: 60, marginHorizontal:20}} radius={30} source={{uri: item.img}} />
                  <Block flex='disabled' style={{marginTop: 10}} >
                    <Block row flex='disabled' style={{marginBottom: 5}}>
                      <Text color='#2E384D' weight='bold' style={{ marginRight: 5}}>{ item.name }</Text>
                      <Text color='#D3D3D3' > <Ionicons name='ios-pin' size={15} /> {item.distance} </Text>
                    </Block>
                    <Text weight={'300'} size={12} color='#D1D1D1'>{ item.address }</Text>
                  </Block>
                </TouchableOpacity>
              );

            }
          }
          keyExtractor={ item=> item.id }
        />
      </Block>
    )
  }
}
