import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Platform,
	TouchableOpacity
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

import Listing from '../common/Listing';

class Beli extends Component {
	constructor(props) {
		super(props);

		this.onSearchPressed = this.onSearchPressed.bind(this);
	}

	onSearchPressed() {
		this.props.navigation.navigate('Searching');
	}

	render() {
		return (
			<View style={styles.topContainer}>
				<View style={styles.topWrapper}>
					<View style={styles.logoContainer}>
						<Text style={styles.logoText}>Mako</Text>
					</View>
					<TouchableOpacity
						style={styles.searchButton}
						onPress={this.onSearchPressed}
					>
						<Ionicon name="ios-search" size={25} color="#000" style={styles.iconStyle} />
						<Text style={styles.placeHolderText}>pilih lokasi "jakarta"</Text>
					</TouchableOpacity>
				</View>
				<ScrollView style={styles.scrollWrapper}>
					<Listing keyword="" />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: (Platform.OS === 'ios' ? 20 : 0)
	},
	topWrapper: {
		paddingHorizontal: 15
	},
	scrollWrapper: {
		paddingHorizontal: 15
	},
	logoContainer: {
		marginTop: 10,
		marginHorizontal: 10
	},
	searchButton: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		marginTop: 10,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	iconStyle: {
		paddingVertical: 5,
		paddingRight: 10
	},
	placeHolderText: {
		color: '#989898'
	},
	logoText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FF0000'
	},
	commonText: {
		color: '#000'
	}
});

export default Beli;
