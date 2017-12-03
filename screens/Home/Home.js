import React , { Component } from 'react'
import { View , Text , StyleSheet , Image , StatusBar , Button , TouchableOpacity} from 'react-native'

const Header = props => 
	<View style={{width: '100%' , height: 200}}>
		<Image
			style={{width: '100%' , height: '100%'}}
			source={{uri: 'https://marketplace.canva.com/MACJXOqpbMA/1/0/thumbnail_large/canva-surfer-beach-desktop-wallpaper-MACJXOqpbMA.jpg'}}
		/>
	</View>

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			dataX: [
				{
					id: 1,
					title: 'eerw'
				},{
					id: 1,
					title: 'eerw'
				},{
					id: 1,
					title: 'eerw'
				},{
					id: 1,
					title: 'eerw'
				},
			],
			text: false		}
	}

	testPress = () => {
		this.setState({ text: true } , console.log(this.state))
	}
 
	componentWillMount = () => {
		this._fetch()
		console.log('tes')
	}

	fetchData = () => {
		this.state.dataX.map((o , i) => {
			return (
				<Text>{o.title}</Text>
			)
		})
	}

	_fetch = () => {
		const _ = this
		const api = 'http://ppid.jakarta.go.id/json?url=http://data.jakarta.go.id/dataset/a96e0288-90d8-48b1-9c3a-9db11372e59f/resource/a6ffd51f-279d-49d6-9f33-eed327ea4753/download/RPTRA-Peresmian-sampai-dengan-Maret-2017.csv'
		fetch(api).then(res => res.json())
		.then(data => {
			this.setState({ data: data , text: 'tes' })
		})
		.catch(err => console.log(err))
	}
	render() {
		return (
			<View style={{
				flex: 1,
				height: '100%',
				position: 'relative'
			}}>
				<StatusBar
            backgroundColor="#1abc9c"
				barStyle="light-content"
				/>
				<Header />
				<View>
					{this.state.dataX.map((o , i) => (
						<Text>{o.title}</Text>
					))}
				</View>
				<TouchableOpacity style={{
					position: 'absolute',
					bottom: 0,
					width: '100%',
					height: 40,
					backgroundColor: 'deeppink',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text>Press</Text>
				</TouchableOpacity>
			</View>
		)
	}
}