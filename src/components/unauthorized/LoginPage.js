import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TextInput,
	TouchableOpacity
} from 'react-native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			passcode: ''
		};

		this.onLoginPressed = this.onLoginPressed.bind(this);
		this.usernameChanged = this.usernameChanged.bind(this);
		this.passcodeChanged = this.passcodeChanged.bind(this);
	}

	onLoginPressed() {
		if (this.state.username === 'test' && this.state.passcode === '1234') {
			this.props.navigation.navigate('AppStack');			
		}
	}

	usernameChanged(username) {
		this.setState({ username });
	}

	passcodeChanged(passcode) {
		this.setState({ passcode });
	}

	render() {
		return (
			<View style={styles.topContainer}>
				<View style={styles.logoContainer}>
					<Text style={styles.logoText}>Mako</Text>
				</View>
				<View style={styles.inputContainer}>
					<EvilIcon name="user" size={40} color="#FF0000" style={styles.iconStyle} />
					<TextInput
						placeholder='Username'
						placeholderTextColor="#989898"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
						style={styles.input}
						value={this.state.username}
						onChangeText={this.usernameChanged}
					/>
				</View>
				<View style={styles.inputContainer}>
					<EvilIcon name="lock" size={40} color="#FF0000" style={styles.iconStyle} />
					<TextInput
						placeholder='Passcode'
						placeholderTextColor="#989898"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
						style={styles.input}
						secureTextEntry
						value={this.state.passcode}
						onChangeText={this.passcodeChanged}
					/>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={this.onLoginPressed}
				>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		paddingTop: (Platform.OS === 'ios' ? 20 : 0),
		paddingHorizontal: 15,
		backgroundColor: '#fff'
	},
	logoContainer: {
		marginVertical: 40
	},
	inputContainer: {
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
	input: {
		flex: 1,
		color: '#000'
	},
	button: {
		backgroundColor: '#FF0000',
		marginTop: 30,
		paddingVertical: 10,
		marginHorizontal: 20,
		borderRadius: 20
	},
	logoText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FF0000',
		textAlign: 'center'
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#FFF'
	},
	commonText: {
		color: '#000'
	}
});

export default LoginPage;
