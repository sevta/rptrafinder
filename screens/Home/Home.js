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
		const api = 'http://api.jakarta.go.id/ruang-publik/rptra'
		this.setState({loading: true})
		fetch('http://api.jakarta.go.id/ruang-publik/rptra')
			.then(res => res.json())
			.then(data => {
				const alldata = data.data
				console.log(alldata)
				this.setState({data: alldata} , () => this.setState({loading: false}))
			})
			.catch(err => {
				console.log(err)
			})
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
	      	) : 
					data.map((obj , i) => (
						<TouchableOpacity onPress={this.toSingleView.bind(this , obj)}>
					    <View style={styles.card} >
					      <Text h5>{obj.nama_rptra}</Text>
					    </View>
					  </TouchableOpacity>
					))
	      }
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
		height: 90,
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 5,
		borderLeftWidth: 10,
		borderLeftColor: '#D35400',
		position: 'relative'
	}
});


export default Home;	