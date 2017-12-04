import React , {Component} from 'react'
import {
	View , 
	Text , 
	StyleSheet , 
	Image
} from 'react-native'

class Single extends Component {
	render() {
		return (
			<View>
				<View style={s.header}>
					<Image 
						style={{width: '100%' , height: '100%'}}
						source={{uri: 'https://i.pinimg.com/736x/78/cb/ed/78cbedfe3ac0e70857fb7f46c2c41b89--cute-wallpapers-enjoying-life.jpg'}}
					/>
				</View>
			</View>
		)
	}
}

const s = StyleSheet.create({
	header: {
		width: '100%',
		height: 200,
		backgroundColor: 'deeppink'
	}
})

export default Single