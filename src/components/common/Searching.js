import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TextInput,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

import Listing from './Listing';

class Searching extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: ''
		};

		this.onBackPressed = this.onBackPressed.bind(this);
		this.onSearchChanged = this.onSearchChanged.bind(this);
	}

	onBackPressed() {
		this.props.navigation.goBack();
	}

	onSearchChanged(keyword) {
		this.setState({ keyword });
	}

	render() {
		return (
			<View style={styles.topContainer}>
				<View style={styles.inputContainer}>
					<TouchableOpacity
						onPress={this.onBackPressed}
						style={styles.backButton}
					>
						<Ionicon name="md-arrow-back" size={25} color="#000" style={styles.iconStyle} />
					</TouchableOpacity>
					<TextInput
						placeholder='pilih lokasi "jakarta"'
						placeholderTextColor="#989898"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
						style={styles.input}
						returnKeyType="search"
						onChangeText={this.onSearchChanged}
						value={this.state.keyword}
					/>
				</View>
				<ScrollView>
					<Listing keyword={this.state.keyword} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 15,
		paddingTop: (Platform.OS === 'ios' ? 20 : 0)
	},
	backButton: {
		paddingLeft: 10
	},
	inputContainer: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		marginTop: 10,
		alignItems: 'center',
		paddingRight: 10
	},
	iconStyle: {
		paddingVertical: 5,
		paddingRight: 10
	},
	input: {
		flex: 1,
		color: '#000'
	},
	commonText: {
		color: '#000'
	}
});

export default Searching;
