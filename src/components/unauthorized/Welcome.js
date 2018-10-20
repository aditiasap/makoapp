import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Platform,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

import Listing from '../common/Listing';

const { width } = Dimensions.get('window');

class Welcome extends Component {
	constructor(props) {
		super(props);

		this.onLoginPress = this.onLoginPress.bind(this);
		this.onSearchPressed = this.onSearchPressed.bind(this);
	}

	onLoginPress() {
		this.props.navigation.navigate('Login');
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
					<View style={styles.cardSection}>
						<Image
							source={require('../../assets/images/companyProfileImage.png')}
							style={styles.companyProfileImage}
						/>
						<Text style={styles.commonText}>
							Mako adalah Transformasi Digital Layanan Anggota Koperasi Indonesia.
							Temukan berbagai program layanan untuk mempermudah hidup anda, mulai dari kemudahan
							mendapatkan hunian idaman dan property lainnya, dengan berbagai cara pendanaannya.
						</Text>
					</View>
					<View style={styles.separatorContainer}>
						<Text style={styles.commonText}>
							Segera bergabung dan nikmati kemudahannya..
						</Text>
					</View>
					<Listing keyword="" />
				</ScrollView>
				<View style={styles.loginSection}>
					<TouchableOpacity
						style={[styles.button, { borderColor: '#B39135' }]}
						onPress={this.onLoginPress}
					>
						<Text style={[styles.buttonText, { color: '#B39135' }]}>MASUK</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, { borderColor: '#FF0000' }]}
					>
						<Text style={[styles.buttonText, { color: '#FF0000' }]}>DAFTAR</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		backgroundColor: '#fff'
	},
	topWrapper: {
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
		alignItems: 'center',
		paddingHorizontal: 10
	},
	iconStyle: {
		paddingVertical: 5,
		paddingRight: 10
	},
	separatorContainer: {
		borderBottomWidth: 2,
		borderColor: '#ddd',
		paddingHorizontal: 10,
		paddingVertical: 10
	},
	cardSection: {
		marginVertical: 10,
		marginHorizontal: 10
	},
	companyProfileImage: {
		alignSelf: 'center',
		marginBottom: 10
	},
	scrollWrapper: {
		paddingHorizontal: 15
	},
	loginSection: {
		borderTopWidth: 2,
		borderColor: '#ddd',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		marginHorizontal: 15
	},
	button: {
		width: (width - 60) / 2,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10
	},
	commonText: {
		color: '#000'
	},
	boldText: {
		color: '#000',
		fontWeight: 'bold'
	},
	placeHolderText: {
		color: '#989898'
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold'
	},
	logoText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FF0000'
	}
});

export default Welcome;
