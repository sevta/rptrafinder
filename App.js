import React , { Component } from 'react'
import { View , Text , Stylesheet , Button , StatusBar } from 'react-native'
import { StackNavigator , DrawerNavigator , TabNavigator } from 'react-navigation'
import Home from './screens/Home/Home'
import All from './screens/All/All'
import { Header } from 'react-native-elements'
import Single from './screens/Home/Single'

const HomeStack = StackNavigator({
	home: { screen: Home },
	view: { 
		path: 'single/:id' , 
		screen: Single ,
		navigationOptions: ({navigation}) => ({
			title: `${navigation.state.params.data.nama_rptra}`
		})
	}
} , {
	navigationOptions: {
		title: 'Home',
     	gesturesEnabled: true,
		headerTintColor: '#fff',
		headerStyle: {marginTop: Expo.Constants.statusBarHeight , backgroundColor: '#CF000F'},
		// header: (
		// 	<Header
		// 		outerContainerStyles={{marginTop: Expo.Constants.statusBarHeight , backgroundColor: 'white'}}
		// 		leftComponent={<Text>Home</Text>}
		// 	/>
		// )
	}
})


const PrimaryNav = TabNavigator({
	screen1: { screen: HomeStack },
	screen2: { screen: All }
} , {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		style: {backgroundColor: '#CF000F'},
		labelStyle: {color: '#fff'}
	}
})

class App extends Component {
	render() {
		return <PrimaryNav />
	}
}

export default App