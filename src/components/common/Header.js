import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
	constructor(props) {
		super(props);

		this.onSearchPressed = this.onSearchPressed.bind(this);
	}

	onSearchPressed() {
		this.props.navigation.navigate(this.props.listing, { listing: this.props.listing });
	}

	render() {
		return (
			<View style={styles.topContainer}>
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
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		paddingTop: (Platform.OS === 'ios' ? 20 : 0),
		paddingHorizontal: 15,
		backgroundColor: '#fff'
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
		marginBottom: 20,
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
	}
});

export default Header;
