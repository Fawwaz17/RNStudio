/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

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
          <View>
            <Text style={styles.welcome}>Halo, Raihan Athaya Fawwaz</Text>
            <Text style={styles.welcome}>Kelas : XI RPL 3</Text>
            <Text style={styles.welcome}>Absen : 32</Text>
            <Image
            style={{width: undefined, height: undefined, flex : 1}}
            resizeMode="contain"
            source = {{uri : 'https://avatars1.githubusercontent.com/u/39233484?s=400&u=931e7c5176bd5379eb1c96d89c92b9ef3dcbca54&v=4'}}
            
            />
          </View>
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
