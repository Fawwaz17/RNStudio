import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class Login extends Component{
	state = {
        password: '',
        username: '',
    };

    render(){
        return(
            <View style={styles.container}> 

                <Image style={styles.container}
                    style={{width: 120, height: 120, marginLeft:65,marginTop:80}}
                    source={require('/app/IMG_4715~3.jpg')}
                />
                
                <TextInput
                    style={{height: 40, width : 250,marginTop:70}}
                    placeholder ="Username"
                    onChangeText={(username) => this.setState({username})}
                />

                <PasswordInputText
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                title="Login"
                color="#509aaf"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})