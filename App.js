/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
            <Judul></Judul>
          	 <Text style={styles.welcome}>Hallo Bro !</Text>
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
