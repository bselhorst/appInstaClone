/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Debugando tudo',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likes: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Programador raiz',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: true,
          likes: 1
        },
        {
          id: '3',
          nome: 'Paulo Costa',
          descricao: 'Codando',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likes: 2
        },
        {
          id: '4',
          nome: 'Roosevelt',
          descricao: 'Gambiarra bem feita',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: true,
          likes: 15
        },
        {
          id: '5',
          nome: 'Saulo',
          descricao: 'Iniciando mais um dia',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likes: 32
        },
      ]
    };

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>          
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} /> }
        />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  send: {
    width: 23,
    height: 23
  },
});

export default App;
