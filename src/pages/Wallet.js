import React, { Component } from 'react';
import { TouchableOpacity, FlatList, Dimensions, Image, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Budge, Block } from '../components';

import { bai, bfa, bic, sol } from '../assets';

const {width} = Dimensions.get('screen');

const cardList =[
  {
    id: "1",
    name: "BAI",
    number: "1234",
    img: bai
  },
  {
    id: "2",
    name: "SOL",
    number: "9843",
    img: sol
  },
  {
    id: "3",
    name: "BIC",
    number: "2535",
    img: bic
  },
  {
    id: "4",
    name: "BFA",
    number: "3977",
    img: bfa
  }
];

export default class Wallet extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor:"#f5f5f5" }}>
        <Block flex="disabled" style={{ backgroundColor:"#52BA97", height: 280, paddingTop: 20 , paddingHorizontal: 20 }}>
          <Block flex="disabled" row right style={{height: 36, marginButtom: 10 }} >
            <TouchableOpacity activeOpacity={0.4} style={{ height: 32, width: 32, borderRadius: 16, borderColor: "#FFF", alignContent:"center", alignItems:"center", borderWidth: 0.5 }}>
              <Ionicons name="ios-stats" size={25} color="#FFF" />
            </TouchableOpacity>

          </Block>
          <Block center >
            <Text color="#FFF" weight={'100'} size={14}>O teu Kumbú</Text>
            <Block row style={{ marginVertical: 20 }}>
              <Text color="#FFF" weight={'100'} size={30} >KZ </Text>
              <Text color="#FFF" weight="bold"  size={30}>100.000,00</Text>
            </Block>
            <Block row space="between" style={{ width: 360 }}>
              <TouchableOpacity activeOpacity={0.4} style={{ width: 150, height: 32 , borderColor:"#FFF", borderWidth:0.5, borderRadius: 16 , alignItems:'center' }}>
                <Block row center middle>
                  <Ionicons color="#FFF" name="ios-card" size={22}/>
                  <Text style={{alignSelf:'center'}} color="#FFF" size={18}>  Adicionar</Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.4} style={{ width: 150, height: 32 , borderColor:"#FFF", borderWidth:0.5, borderRadius: 16 , alignItems:'center' }}>
                <Block row center middle>
                  <Ionicons color="#FFF" name="ios-card" size={22}/>
                  <Text style={{alignSelf:'center'}} color="#FFF" size={18}>  Retirar</Text>
                </Block>
              </TouchableOpacity>            
              
            </Block>
          </Block>
          

        </Block>
        <Block style={{paddingVertical: 20 }}>
          <Text color="#444" weight="bold" style={{ marginLeft: 20 }}>Formas de Pagamentos </Text>
          <FlatList
            showsVerticalScrollIndicator= {false}
            data={ cardList }
            scrollEnabled={ false }
            contentContainerStyle={{ paddingVertical: 10 }}
            ListFooterComponentStyle={{marginTop: 5}}
            ListFooterComponent={
              <TouchableOpacity activeOpacity={0.2} style={{ flex: 1, backgroundColor:"#FFF", width: width-40, height: 60, flexDirection:'row', paddingHorizontal: 20, marginHorizontal: 20, elevation: 2, shadowOpacity: 0.2,shadowOffset: { width: 0, height: 2 }, shadowColor:"#000", borderRadius: 5, alignContent:'center', alignItems: 'center' }}>
                  <Ionicons name="ios-add-circle-outline" size={30} color="#52BA97"/>
                  <Text size={16} color="#52BA97" weight="bold" style={{marginLeft: 10}}>Adicionar cartão</Text>
              </TouchableOpacity>
            }
            ItemSeparatorComponent={
              () => <View style={{height: 5}}/>
            }
            renderItem={
              ({ item })=>{
                return(
                  <TouchableOpacity activeOpacity={0.2} style={{ flex: 1, backgroundColor:"#FFF", width: width-40, height: 60, flexDirection:'row', paddingHorizontal: 20, marginHorizontal: 20, elevation: 2, shadowOpacity: 0.2,shadowOffset: { width: 0, height: 2 }, shadowColor:"#000", borderRadius: 5, alignContent:'center', alignItems: 'center' }}>
                    <Image style={{ width: 30, height: 30}} source={ item.img }/>
                    <Block style={{ marginLeft: 5 }}>
                      <Text size={18} color="#666">{item.name}</Text>
                      <Text size={12} color="#999">Cartão com o fim {item.number}</Text>
                    </Block>
                  </TouchableOpacity>
                );
              }
            }
            keyExtractor={ item => item.id }
            
          />

        </Block>
      
      </ScrollView>
        
    )
  }
}
