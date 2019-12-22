import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';

import { Block, Text, Line } from '../components';

const {width} = Dimensions.get('screen')

const notify =[
  {
    id: 1,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore',
    data: Date.now(),
    seen: true,
  },
  {
    id: 2,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore, expedita enim commodi totam mollitia ex quos amet dolore quasi aliquid maxime beatae distinctio',
    data: Date.now(),
    seen: false,
  },
  {
    id: 3,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore, expedita enim commodi totam mollitia ex quos amet dolore quasi',
    data: Date.now(),
    seen: false,
  },
  {
    id: 4,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    data: Date.now(),
    seen: true,
  },
  {
    id: 5,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore, expedita enim commodi totam mollitia ex quos amet dolore quasi aliquid maxime beatae distinctio, ab animi cupiditate sunt illo error',
    data: Date.now(),
    seen: false,
  },
  {
    id: 6,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore, expedita enim commodi totam mollitia ex quos amet dolore quasi aliquid maxime beatae distinctio, ab animi cupiditate sunt illo error',
    data: Date.now(),
    seen: true,
  },
  {
    id: 7,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore, expedita enim commodi totam mollitia ex quos amet dolore quasi aliquid maxime beatae distinctio, ab animi cupiditate sunt illo error',
    data: Date.now(),
    seen: false,
  },
  {
    id: 8,
    detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore, expedita enim commodi totam mollitia ex quos amet dolore quasi aliquid maxime beatae distinctio, ab animi cupiditate sunt illo error',
    data: Date.now(),
    seen: true,
  },
];

export default class Notification extends Component {
  render() {
    return (
      <Block>
        <Block row space='between' style={{ paddingVertical: 20, backgroundColor:'#F3F3F3', height:65, paddingHorizontal:20 }} >
          <Text weight='bold' color='#2E384D' size={16}>Notificações</Text>
          <Text color='#52BA97' size={16} weight='bold'>Configurar</Text>

        </Block>
        <FlatList 
          
          showsVerticalScrollIndicator= {false}
          ItemSeparatorComponent= {
            ()=> <Line  color="#F2F2F2"/>
          }
          data={notify}
          style={{ minHeight: 105}}
          renderItem ={
            ({item}) => {
              return (
                <TouchableOpacity style={{ width: width,paddingHorizontal: 20, backgroundColor: item.seen ? '#FFF':'#F3F3F3'}}>
                  <Text size={15} color='#666' style={{textAlign: 'justify'}} >{item.detail}</Text>
                  <Text size={ 12} color='#666'>{item.data}</Text>
                </TouchableOpacity>
              );
            }
          }
          keyExtractor= {item => item.id}
        />


      </Block>
    )
  }
}
