import React , {Component} from 'react'
import {
	View , 
	StyleSheet , 
	Image , 
	ListView
} from 'react-native'
import { Text } from 'react-native-elements'
import { MapView } from 'expo'

class Single extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: null,
			region: {
	      latitude: -6.117664,
	      longitude: 106.906349,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	  	}
		}
	}
	componentWillMount() {
		const data = this.props.navigation.state.params.data
		console.log('data is' ,  data.location)
		this.setState({ data: data })
	}
	render() {
		const { region , data } = this.state
		return (
			<View>
				<View style={s.header}>

					<MapView
	        style={{ width: 450 , height: 200 }}
	        region={{
	        	...data.location,
			      latitudeDelta: 0.0922,
			      longitudeDelta: 0.0421,
	        }}
	        minZoomLevel={20}
					>
						<MapView.Marker 
							coordinate={data.location}
						/>
					</MapView>
					<View style={s.details}>
						<Text style={s.text}>Nama Rptra : {data.nama_rptra}</Text>
						<Text style={s.text}>Nama Rptra : {data.alamat}</Text>
						<Text style={s.text}>Nama Rptra : {data.kelurahan}</Text>
						<Text style={s.text}>Nama Rptra : {data.kecamatan}</Text>
					</View>
				</View>
			</View>
		)
	}
}

const s = StyleSheet.create({
	header: {
		width: '100%',
		height: 600,
		backgroundColor: 'whitesmoke'
	},
	details: {
		width: '90%',
		borderRadius: 3,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 30,
		height: 'auto',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: 'white'
	},

	text: {
		marginTop: 5,
		marginBottom: 5,
		lineHeight: 20
	}
})

export default Single