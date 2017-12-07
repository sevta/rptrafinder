'use strict';

import React, { Component } from 'react';
import axios from 'axios'
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList , 
  List ,
  TouchableOpacity , 
  ListView
} from 'react-native';
import { Button , Text } from 'react-native-elements'
import { Constants, Location, Permissions } from 'expo'
import { StatusBar } from 'react-native'

class Home extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	 		data: [],
	 		loading: false,
	 		location: null
	 	};
	}

	getCurrentLocation = async() => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION)
		if (status !== 'granted') {
			this.setState({location: 'Permissions Denied'})
		} 
		let location = await Location.getCurrentPositionAsync({})
		this.setState({location: JSON.stringify(location)})
		console.log(location)
	}

	componentWillMount() {
		const api = 'http://api.jakarta.go.id/ruang-publik/rptra'
		this.setState({loading: true})
		fetch('http://api.jakarta.go.id/ruang-publik/rptra')
			.then(res => res.json())
			.then(data => {
				const alldata = data.data
				console.log(alldata)
				this.setState({data: alldata})
			})
			.catch(err => {
				console.log(err)
			})
		this.getCurrentLocation()
		this.setState({loading: false})
	}

	toSingleView = data => {
		this.props.navigation.navigate('view' , {data: data})
	}

  	render() {
  		const { loading , data } = this.state
    	return (
	      <View style={styles.contaier}>
		      <StatusBar
					 backgroundColor="blue"
					 barStyle="light-content"
					/>
      		<ScrollView style={{marginTop: 15}}>
	      	{loading ? (
					<Text>Loading...</Text>
	      	) : 
					 <FlatList 
							data={data}
							renderItem={({item}) => (
								<TouchableOpacity onPress={this.toSingleView.bind(this , item)}>
									<View style={styles.card}>
											<Text style={styles.text}>{item.nama_rptra}{this.state.location}</Text>
											<Text style={styles.subText}>{item.kelurahan}</Text>
											<Text style={styles.badge}>Tesi</Text>
									</View>
							  </TouchableOpacity>
							)}
					  />
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
		width: '90%',
		height: 90,
		backgroundColor: 'white',
		marginBottom: 15,
		borderBottomWidth: 2,
		borderBottomColor: 'deepskyblue',
		position: 'relative',
		borderRadius: 4
	},
	text: {
		position: 'absolute',
		top: 20,
		left: 20,
		fontSize: 16,
		fontWeight: '600'
	},
	subText: {
		fontSize: 12,
		fontWeight: '400',
		position: 'absolute',
		left: 20,
		top: 50
	},
	badge: {
		backgroundColor: '#CF000F',
		borderRadius: 30,
		position: 'absolute',
		bottom: 20,
		right: 20,
		color: 'white',
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 2,
		paddingBottom: 2
	}
});


export default Home;	