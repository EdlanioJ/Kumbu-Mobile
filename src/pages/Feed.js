import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, FlatList, View  } from 'react-native';

import { Block, Text, Avatar } from '../components';

const offer =[
  {
    id: "1",
    username:"@edlanio",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"
  },
  {
    id: "2",
    username:"@pedro",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"
  },
  {
    id: "3",
    username:"@andre",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"
  },
  {
    id: "4",
    username:"@marcos",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"
  },
  {
    id: "5",
    username:"@marta",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"
  },
  {
    id: "6",
    username:"@maria",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"
  },
];
export default class Pay extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor:"#f5f5f5" }}>
        <Block style={{backgroundColor: "#52BA97"}}>
          <Block style={{marginHorizontal: 20, marginVertical: 20}}>
            <Text color="#FFF" weight="bold" size={14}>Sugestões para você</Text>
          </Block>
          <FlatList 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            data={offer}
            contentContainerStyle={{paddingHorizontal: 20, marginBottom: 20}}
            ItemSeparatorComponent={
              () => <View style={{width: 20}}/>
            }
            renderItem={
              ({item}) =>
                <TouchableOpacity style={{alignContent: 'center', alignItems:'center'}} activeOpacity={0.8} >
                  <Avatar style={{width: 60, height: 60}} radius={30} source={{uri: item.img }} />
                  <Text size={16} color="#FFF" height={24} spacing={0} style={{marginTop: 3 }} >{item.username}</Text>
                </TouchableOpacity>
            }
            keyExtractor={item => item.id }
          />
        </Block>
      </ScrollView> 
    )
  }
}
