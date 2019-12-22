import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Block, Text, Avatar, Line } from '../components';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const widthFooter= width - 40;
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

export default class Feed extends Component {

  state = {
    modalVisible: true,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  render() {
    return (
      <Block flex={0} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' style={{marginTop: 20, marginLeft:20 }} >Sugestões para você</Text>
          <FlatList 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            data={offer} 
            style={{ marginTop: 10, minHeight: 105}}
            contentContainerStyle={{paddingHorizontal: 20}}
            ItemSeparatorComponent={
              () => <View style={{width: 20}}/>
            }
            renderItem={
              ({item}) =>
              <TouchableOpacity style={{alignContent: 'center', alignItems:'center'}} activeOpacity={0.8} >
                  <Avatar style={{width: 60, height: 60}} radius={30} source={{uri: item.img }} />
                  <Text size={16} color="#2E384D" height={24} spacing={0} style={{marginTop: 3 }} >{item.username}</Text>
                </TouchableOpacity>
            }
            keyExtractor={item => item.id }
          />
          

          <Line color="#F1F1F1" full/>
          <Block flex={1}  style={{marginBottom:30}}>
            <Block space='between' row  flex='disabled' style={{marginTop: 20, marginHorizontal: 20}}>
              <Text size={15} color="#2E384D" height={20} spacing={0} weight='bold' >Locais próximos</Text>
              <Text size={15} color="#2E384D" height={20} style={{alignItems: 'center', alignContent:'center' }} spacing={0} weight='bold' color="#52BA97" onPress={()=>{ console.log('proximo') }} >Ver mais <Ionicons name='ios-arrow-forward' color='#52BA97' size={14}/> </Text>
            </Block>
            <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>

              <Block row style={{marginBottom:10}} >
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} radius={30} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
                <Block flex='disabled' style={{marginTop: 10}} >
                  <Block row flex='disabled' style={{marginBottom: 5}}>
                    <Text color='#2E384D' weight='bold' style={{ marginRight: 5}}>Kero</Text>
                    <Text color='#D3D3D3' > <Ionicons name='ios-pin' size={15} /> .23 m </Text>
                  </Block>
                  <Text weight={'300'} size={12} color='#D1D1D1'>Rua 2 Bloco 2</Text>
                </Block>
              </Block>

              <Block row style={{marginBottom:10}} >
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} radius={30} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
                <Block flex='disabled' style={{marginTop: 10}} >
                  <Block row flex='disabled' style={{marginBottom: 5}}>
                    <Text color='#2E384D' weight='bold' style={{ marginRight: 5}}>Kero</Text>
                    <Text color='#D3D3D3' > <Ionicons name='ios-pin' size={15} /> .23 m </Text>
                  </Block>
                  <Text weight={'300'} size={12} color='#D1D1D1'>Rua 2 Bloco 2</Text>
                </Block>
              </Block>

              <Block row style={{marginBottom:10}} >
                <Avatar style={{width: 60, height: 60, marginHorizontal:20}} radius={30} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
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

          <Line full color="#F1F1F1" />

          <ScrollView style={{marginTop:20}} >
            <Block style={styles.post}>
              <Block row center >
                <Avatar style={{width: 60, height: 60}} radius={30} source={{uri: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"}} />
                  <Block  row >
                    <Text color='#2E384D' weight='bold' size={18} >@andre</Text>
                    <Text color='#2E384D' size={18} weight={'300'} > pagou a </Text>
                    <Text color='#2E384D' weight='bold' size={18} >Você</Text>
                  </Block>
              </Block>
              <Text size={16} color='#666' style={{textAlign: 'left'}} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum tempore iusto iure saepe suscipit inventore reprehenderit? Explicabo a, harum voluptatem repellat cum atque necessitatibus excepturi sit quod blanditiis laudantium modi!</Text>
              <Block row space="between" style={{ width: widthFooter , marginVertical: 10 }}>
                <Block row >
                  <Text color="#52BA97" size={12} weight='bold'>KZ 1.000,00 </Text>
                  <Text color="#a6a6a6" size={12}>| <Ionicons name='ios-lock' color='#a6a6a6' size={12}/> 2 horas atrás</Text>
                </Block>
                <Block row right >
                  <TouchableOpacity style={{ flexDirection:'row',alignContent: 'center', alignItems: 'center', marginRight:10 }}>
                  <FontAwesome name="comment-o" size={15} color='#666' bold /> 
                    <Text color="#a6a6a6" size={14} style={{marginLeft: 2}}>
                       0
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flexDirection:'row',alignContent: 'center', alignItems: 'center' }} >
                    <FontAwesome name="heart-o" size={15} color='#666' bold/>
                    <Text color="#a6a6a6" size={14} style={{marginLeft: 2}}> 
                       10
                    </Text>
                  </TouchableOpacity>
                </Block>
              </Block>
            </Block>
          </ScrollView>

        </ScrollView>

        <Modal
          animationType='slide'
          transparent={true}
          visible={ this.state.modalVisible }
          onRequestClose={ ()=> this.closeModal() }
          
          
        >
          <Block style={{ backgroundColor:" rgba(0, 0, 0, 0.46)"}} onPress={ ()=> this.closeModal() }>
            <Block center middle style={{ backgroundColor: "#FFF",  marginHorizontal: 60, borderRadius: 10, marginVertical:220, paddingHorizontal: 10 }}>
              <Avatar source={{uri: "https://icon-library.net/images/user-icon-jpg/user-icon-jpg-29.jpg"}} radius={60} style={{width: 120, height: 120, marginVertical: 20}}/>
              <Block center flex="disabled">
                <Text color="#666" weight="bold" size={18}>@edlanio</Text>
                <Text color="#C1C1C1" size={14}>Edlaneo Manuel Júlio Mutino</Text>
              </Block>
              <Line color="#F1F1F1"/>
              <Block flex="disabled" row style={{ marginVertical: 10, maxHeight: 35 }}>
                <Block center >
                  <Text color="#52BA97" >24</Text>
                  <Text color="#C1C1C1">A Seguir</Text>
                </Block>
                <Block center>
                  <Text color="#52BA97" >3</Text>
                  <Text color="#C1C1C1">Seguidores</Text>
                </Block>
                <TouchableOpacity style={{ paddingHorizontal: 10,paddingVertical: 4,  backgroundColor: "#FFF", borderRadius: 15, height: 30, alignContent:'center', alignItems:'center', borderWidth: 1, borderColor:"#52BA97", flexDirection:'row' }} activeOpacity={0.2}>
                  <Ionicons name="ios-person-add" size={15} color="#52BA97" />
                  <Text color="#52BA97" size={14} style={{marginLeft: 5}} >Seguir</Text>
                </TouchableOpacity>

              </Block>
              <Line color="#F1F1F1"/>
              <TouchableOpacity onPress={()=>this.closeModal()} style={{ paddingHorizontal: 30,  backgroundColor: "#52BA97", borderRadius: 20, height: 40, alignContent:'center', alignItems: 'center', marginVertical: 20, flexDirection:'row' }} activeOpacity={0.2}>
                  <Text color="#FFF" size={16} style={{ marginRight: 5 }} >Pagar</Text>
                  <Block flex="disabled" style={{borderRadius: 10, width: 20, height: 20, borderWidth: 1, borderColor:"#FFF", paddingVertical: 2, paddingHorizontal: 5}}>
                    <FontAwesome name="dollar" size={14} color="#FFF"  />
                  </Block>
                  
              </TouchableOpacity>

            </Block>

          </Block>
        </Modal>
        
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  post:{
    backgroundColor:"#FFF",
    width: width,
    elevation: 5,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor:"#000",
    marginVertical: 10,
    paddingHorizontal: 20,
    
    
  }, 

})
