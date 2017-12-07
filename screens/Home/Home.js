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
  ListView , 
  Image
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

	static navigationOptions = {
		tabBarIcon: ({tintColor}) => (
			<Image 
				source={require('./list.png')}
			/>
		)
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
      		<ScrollView style={{marginTop: 15}}>
		      	<View style={styles.header}>
							<Image 
								style={{width: '100%' , height: '100%'}}
								source={{uri: 'http://www.panjimas.com/wp-content/uploads/2017/03/RPTRA.jpg'}}
							/>
		      	</View>
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
		height: 500,
		width: 400,
	},
	header: {
		width: '100%',
		height: 200,
		marginBottom: 20
	},
	card: {
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '95%',
		height: 120,
		backgroundColor: '#fff',
		marginBottom: 15,
		borderBottomWidth: 5,
		borderBottomColor: '#B2DBBF',
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
		backgroundColor: '#70C1B3',
		borderRadius: 5,
		position: 'absolute',
		top: 20,
		right: 20,
		color: 'white',
		paddingLeft: 7,
		paddingRight: 7,
		paddingTop: 2,
		paddingBottom: 2
	}
});


export default Home;	