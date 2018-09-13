import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import Judul1 from './Components/Title/Judul1';
import Login from './Components/Input/Login';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
            <Login/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  wnputih : {
      color : "#FFFFFF", 
      textAlign : 'left'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#219897',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
