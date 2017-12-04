'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

class All extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: [
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},	{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},	{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},	{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},	{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},	{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  		{
	  			name: 'dasdasda',
	  		},
	  	]
	  };
	}
  render() {
    return (
		<View>
			{this.state.data.length && this.state.data.map(o => (
				<Text>{o.name}</Text>
			))}
		</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default All