'use strict';

import React, { Component } from 'react';
import axios from 'axios'
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList , 
  List ,
  TouchableOpacity
} from 'react-native';
import { Button , Text } from 'react-native-elements'

class Home extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	 		data: [],
	 		loading: false
	 	};
	}

	componentWillMount() {
		const api = 'http://ppid.jakarta.go.id/json?url=http://data.jakarta.go.id/dataset/a96e0288-90d8-48b1-9c3a-9db11372e59f/resource/a6ffd51f-279d-49d6-9f33-eed327ea4753/download/RPTRA-Peresmian-sampai-dengan-Maret-2017.csv'
		this.setState({loading: true})
		axios.get(api).then(res => {
			this.setState({data: res.data , loading: false})
		})
		.catch(err => console.log(err))
	}

	toSingleView = data => {
		this.props.navigation.navigate('view' , {data: data})
	}

  	render() {
  		const { loading , data } = this.state
    	return (
	      <View style={styles.contaier}>
      		<ScrollView style={{marginTop: 15}}>
	      	{loading ? (
					<Text>Loading...</Text>
	      	) : data.map((obj , i) => (
	      		<TouchableOpacity onPress={this.toSingleView.bind(this , obj)}>
	      			<View style={styles.card} >
	      				<Text h5>{obj.nama_rptra}</Text>
	      			</View>
      			</TouchableOpacity>
	      	))}
      		</ScrollView>
	      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'tomato'
	},
	scrollView: {
		height: 400,
		width: 400
	},
	card: {
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		height: 120,
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderLeftWidth: 30,
		borderLeftColor: '#91CED7',
		position: 'relative'
	}
});


export default Home;	