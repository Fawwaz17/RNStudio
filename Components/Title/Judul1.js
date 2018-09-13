import React,{Component}from 'react';
import { View, Text } from 'react-native';

export default class Judul1 extends Component{
	render(){
		return(
				<View>
					<Text style = {warna.wn }>{this.props.title}</Text>
				</View>
			)
	}
}

const warna = {
	wn : {
		color : "#FFFFFF",
		fontSize : 20,
		fontWeight : 'bold'
	}
}