import React from 'react';
import { View, Text } from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<View>
				<Text style = {warna.yoi}> Biodata : </Text>
			</View>
			)
	}
}
const warna = {
	yoi : {
		color : "#774898",
		fontSize : 20,
		fontWeight : 'bold'
	}
}


export default Judul;