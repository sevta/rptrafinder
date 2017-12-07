'use strict';

import React, { Component } from 'react'
import { MapView } from 'expo'

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
	  	data: [],
	  	region: {
	      latitude: -6.117664,
	      longitude: 106.906349,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	  	}
	  };
	}

	componentWillMount() {
		fetch('http://api.jakarta.go.id/ruang-publik/rptra')
			.then(res => res.json())
			.then(data => {
				const alldata = data.data
				this.setState({data: alldata})
			})
			.catch(err => {
				console.log(err)
			})
	}

  render() {
  	const { data , region } = this.state
    return (
		<View>
      <MapView
	      minZoomLevel={0}
        style={{ width: 450 , height: 700 }}
        region={region}
      >
      	{data.map((marker , i) => (
	      	<MapView.Marker 
		      	key={i+1}
						coordinate={marker.location}
						title={`RPTRA ${marker.nama_rptra}`}
						description={marker.fasilitas}
	      	/>
      	))}
      </MapView>
		</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default All