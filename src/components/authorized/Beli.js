import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Beli extends Component {
	render() {
		return (
			<View style={styles.topContainer}>
				<Text style={styles.commonText}>Beli</Text>
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

export default Beli;
