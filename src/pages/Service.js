import React, { Component } from 'react';
import { ScrollView, FlatList, Dimensions, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Block, Text, Avatar } from '../components';


const { width } = Dimensions.get('window');

const destaques =[
  {
    id: "1",
    img: "https://compass-ssl.xbox.com/assets/ac/8c/ac8cf90c-5e7c-4d34-9504-acfaecdae127.jpg?n=X1X_Image-0_Cross-Sell_1920x540.jpg"
    
  },
  {
    id: "2",
    img: "https://compass-ssl.xbox.com/assets/ac/8c/ac8cf90c-5e7c-4d34-9504-acfaecdae127.jpg?n=X1X_Image-0_Cross-Sell_1920x540.jpg"
    
  },
  {
    id: "3",
    img: "https://compass-ssl.xbox.com/assets/ac/8c/ac8cf90c-5e7c-4d34-9504-acfaecdae127.jpg?n=X1X_Image-0_Cross-Sell_1920x540.jpg"
    
  },
  {
    id: "4",
    img: "https://compass-ssl.xbox.com/assets/ac/8c/ac8cf90c-5e7c-4d34-9504-acfaecdae127.jpg?n=X1X_Image-0_Cross-Sell_1920x540.jpg"
    
  }

];

const services =[
  {
    id: "1",
    name: "Pagar conta",
    detail:"Pagar conta de luz, agua, etc.",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
  },
  {
    id: "2",
    name: "Recarga de celular",
    detail:"Unitel, Movicel, etc.",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
  },
  {
    id: "3",
    name: "Televisão ",
    detail:"Dstv, Tv a cabo, Zap",
    img: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg",
  }
];
export default class Service extends Component {
  render() {
    return (
      <Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' style={{marginTop: 20, marginLeft:20, marginBottom: 10 }} >Destaques</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={destaques}
            style={{marginVertical: 10}}
            contentContainerStyle={{paddingHorizontal: 20}}
            ItemSeparatorComponent={
              () => <View style={{width: 20}}/>
            }
            renderItem={
              ({item})=>
              <TouchableOpacity activeOpacity={0.3} style={style.popular}>
                <Image style={style.img} source={{ uri: item.img }}/>
              </TouchableOpacity>
            }
            keyExtractor={ item => item.id }

          />
          <Block space='between' row style={{marginVertical: 10, marginHorizontal: 20}}>
            <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' >Serviços</Text>
            <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' color="#52BA97" onPress={()=>{ console.log('proximo') }} >Ver mais <Ionicons name='ios-arrow-forward' color='#52BA97' size={14}/> </Text>
          </Block>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={services}
            style={{marginVertical: 10}}
            contentContainerStyle={{paddingHorizontal: 20}}
            ItemSeparatorComponent={
              () => <View style={{width: 20}}/>
            }
            renderItem={
              ({item})=>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }} >
                <Avatar style={{width: 60, height: 60}} source={{ uri: item.img }}/>
                <Block style={{marginLeft: 10}}>
                  <Text color='#333' weight='bold'>{item.name}</Text>
                  <Text weight={'300'} size={12} color='#444'>{item.detail}</Text>
                </Block>
              </TouchableOpacity>
            }
            keyExtractor={ item => item.id }

          />
          <View style={style.lineStyle}/>

          
          
        </ScrollView>
      </Block>
    )
  }
}


const style = StyleSheet.create({
  popular:{
    width: width-50,
    height: 150,
    borderRadius: 5,
    elevation: 5,
    shadowOpacity: 0.8,
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowColor:"#000",
    shadowRadius: 5, 
    marginBottom: 10
  },
  img: {
    width:'100%',
    height:'100%',
    alignSelf:'stretch',
    borderRadius: 5
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#F1F1F1',
    margin:10,
    width: width-50,
    marginHorizontal:25
}
})