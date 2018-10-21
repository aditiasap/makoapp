import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Welcome from './components/unauthorized/Welcome';
import LoginPage from './components/unauthorized/LoginPage';

import Account from './components/authorized/Account';
import Transaksi from './components/authorized/Transaksi';
import Jual from './components/authorized/Jual';
import Beli from './components/authorized/Beli';

import Searching from './components/common/Searching';

const AuthStack = createStackNavigator({
	Welcome: {
		screen: Welcome,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginPage,
		navigationOptions: {
			header: null
		}
	},
	Searching: {
		screen: Searching,
		navigationOptions: {
			header: null
		}
	}
});

const BeliStack = createStackNavigator({
	Beli: {
		screen: Beli,
		navigationOptions: {
			header: null
		}
	},
	Searching: {
		screen: Searching,
		navigationOptions: {
			header: null
		}
	}
});

const AppStack = createBottomTabNavigator({
	Account: { screen: Account },
	Beli: { screen: BeliStack },
	Transaksi: { screen: Transaksi },
	Jual: { screen: Jual }
}, {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			if (routeName === 'Account') {
				return <MaterialIcons name="account-circle" size={25} color={tintColor} />;
			} else if (routeName === 'Beli') {
				return <Entypo name="shopping-cart" size={25} color={tintColor} />;
			} else if (routeName === 'Transaksi') {
				return <FontAwesome name="handshake-o" size={25} color={tintColor} />;
			} else if (routeName === 'Jual') {
				return <Entypo name="shop" size={25} color={tintColor} />;
			}
		},
	}),
	tabBarOptions: {
		activeTintColor: 'rgb(255, 0, 0)'
	}
});

const Navigator = createSwitchNavigator({
	AuthStack,
	AppStack
});

class Router extends Component {
	render() {
		return (
			<Navigator />
		);
	}
}

export default Router;
