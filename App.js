import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul1 from './Components/Judul1';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
            <Judul1 title="Biodata : "></Judul1>
            <Judul1 title="Login : "></Judul1>
          	 <Text style={styles.welcome}> Hallo Bro !</Text>
          	 <Image
            style={{ width: 240, height: 240}}
            resizeMode="contain"
            source = {require('/app/IMG_4715~3.jpg')}
            />
            <Text >Nama : Raihan Athaya Fawwaz</Text>
            <Text >Kelas : XI RPL 3</Text>
            <Text >Absen : 32</Text>
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
    backgroundColor: '#9cd3d3',
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
