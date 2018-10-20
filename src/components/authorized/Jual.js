import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Jual extends Component {
	render() {
		return (
			<View style={styles.topContainer}>
				<Text style={styles.commonText}>Jual</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	commonText: {
		color: '#000'
	}
});

export default Jual;
