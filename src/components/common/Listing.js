import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform
} from 'react-native';

class Listing extends Component {
	render() {
		const { listing } = this.props.navigation.state.params;

		return (
			<View style={[styles.topContainer, { paddingTop: (listing === 'ListingOutside') ? (Platform.OS === 'ios' ? 20 : 0) : 0 }]}>
				<Text style={styles.commonText}>Listing</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		paddingHorizontal: 15,
		backgroundColor: '#fff'
	},
	commonText: {
		color: '#000'
	}
});

export default Listing;
