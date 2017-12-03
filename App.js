import React , { Component } from 'react'
import { View , Text , Stylesheet , Button , StatusBar } from 'react-native'
import { StackNavigator , DrawerNavigator } from 'react-navigation'
import Home from './screens/Home/Home'

const Burger = () =>
	<View style={{width: 20 , height: 14 , backgroundColor: '#333'}}>
	</View>

const DrawerStacks = DrawerNavigator({
	home: {screen: Home}
})

const DrawerStack = StackNavigator({
	drawerstack: { screen: DrawerStacks }
}, {
	headerMode: 'float',
	navigationOptions: ({navigation}) => ({
		headerStyle: {backgroundColor: '#2c3e50' , marginTop: Expo.Constants.statusBarHeight},
		title: 'RPTA finder',
		headerLeft: <Text style={{marginLeft: 15 , color: 'white'}} onPress={() => navigation.navigate('DrawerToggle')}>Menu</Text>,
		headerTintColor: 'white',
		headerTitleStyle: {textAlign: 'center' , fontSize: 16}
	})
})

const PrimaryNav = StackNavigator({
	drawernavigation: { screen: DrawerStack }
} , {
	headerMode: 'none'
})

class App extends Component {
	render() {
		return (
			<PrimaryNav />
		)
	}
}

export default App