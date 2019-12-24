import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, FlatList, View, Dimensions  } from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { Block, Text, Avatar } from '../components';
import mDate from '../services/momentDate';

const { width } = Dimensions.get('screen');


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
const posts =[
  {
    id: "1",
    from: "@rosario",
    to: "@mingota",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
    post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. #kumbu #Groove",
    money: "500,00",
    like: 10,
    msg: 5,
    time: new Date(),
    status: "private",
    liked: true,
  },
  {
    id: "2",
    from: "@vanessa",
    to: "@victoria.q",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
    post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eaque praesentium saepe labore ipsam tempora adipisci. Minima, quibusdam qui iure porro ullam officia totam doloribus excepturi magni corporis, aliquam earum.",
    money: "1500,00",
    like: 10,
    msg: 5,
    time: new Date(),
    status: "private",
    liked: true,
  },
  {
    id: "3",
    from: "@manuel.paca",
    to: "@gustavo.r",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
    post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eaque praesentium saepe labore ipsam tempora adipisci. Minima, quibusdam qui iure porro ullam officia totam doloribus excepturi magni corporis, aliquam earum.",
    money: "10.000,00",
    like: 10,
    msg: 5,
    time: new Date(),
    status: "public",
    liked: true,
  },
  {
    id: "4",
    from: "@paulo",
    to: "@Maria",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
    post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eaque praesentium saepe labore ipsam tempora adipisci. Minima, quibusdam qui iure porro ullam officia totam doloribus excepturi magni corporis, aliquam earum.",
    money: "90.560,00",
    like: 10,
    msg: 5,
    time: new Date(),
    status: "public",
    liked: true,
  },
  {
    id: "5",
    from: "@paulo",
    to: "Você",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
    post: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eaque praesentium saepe labore ipsam tempora adipisci. Minima, quibusdam qui iure porro ullam officia totam doloribus excepturi magni corporis, aliquam earum.",
    money: "300,00",
    like: 10,
    msg: 5,
    time: new Date(),
    status: "public",
    liked: true,
  },
  {
    id: "6",
    from: "Você",
    to: "@maria",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
    money: "50,00",
    like: 10,
    msg: 5,
    time: new Date("2019/12/11"),
    status: "private",
    liked: true,
  }

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
        <Block>
          <Block flex="disabled" row space="between" style={{ width: width-40, marginHorizontal: 20, marginVertical: 20 }}>
            <Text color="#000" size={14} weight="bold">Atividades</Text>
            <Block row right> 
              <TouchableOpacity style={{marginRight: 10}}>
                <Text color="#A2A2A2" size={14} weight="100">Todas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text  color="#A2A2A2" size={14} weight="100">Minhas</Text>
              </TouchableOpacity>
            </Block>
          </Block>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            contentContainerStyle={{ paddingBottom: 20}}
            ItemSeparatorComponent={
              () => <View style={{height: 10}}/>
            }
            renderItem={
              ({item})=>{
                return (<Block style={{ backgroundColor:"#FFF", width: width- 20, elevation: 5, shadowOpacity: 0.8, shadowOffset: { width: 0, height: 2 }, shadowColor:"#000", borderRadius: 5, marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 10}}>
                  <Block row center  >
                    <Avatar style={{width: 60, height: 60}} radius={30} source={{uri: item.img }} />
                      <Block  row >
                        <Text color='#2E384D' weight='bold' size={18} >{item.from}</Text>
                        <Text color='#2E384D' size={18} weight={'300'} > pagou a </Text>
                        <Text color='#2E384D' weight='bold' size={18} >{item.to}</Text>
                      </Block>
                  </Block>
                  <Text size={16} color='#666' style={{textAlign: 'left'}} >{item.post}</Text>
                  <Block row space="between" style={{  marginVertical: 10 }}>
                    <Block row >
                      <Text color="#52BA97" size={12} weight='bold'>{item.money}</Text>
                      <Text color="#a6a6a6" size={11}> | <Ionicons name={(item.status==="private") ?'ios-lock': 'md-people'} color='#a6a6a6' size={12}/> {mDate(item.time)}</Text>
                    </Block>
                    <Block row right >
                      <TouchableOpacity style={{ flexDirection:'row',alignContent: 'center', alignItems: 'center', marginRight:10 }}>
                      <FontAwesome name="comment-o" size={15} color='#666' bold /> 
                        <Text color="#a6a6a6" size={14} style={{marginLeft: 1}}>
                          {item.msg}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ flexDirection:'row',alignContent: 'center', alignItems: 'center' }} >
                        <FontAwesome name={(item.liked) ? "heart": 'heart-o'} size={15} color={ (item.liked) ? '#52BA97': '#666'} bold/>
                        <Text color="#a6a6a6" size={14} style={{marginLeft: 2}}> 
                          {item.like}
                        </Text>
                      </TouchableOpacity>
                    </Block>
                  </Block>
                </Block>)
                
              }
             }
            keyExtractor={item => item.id}

          />
        </Block>
      </ScrollView> 
    )
  }
}
