import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';

import { listingProps } from './listingProps.js';

const { width } = Dimensions.get('window');

class Listing extends Component {
	renderContent() {
		// Filter properties by keyword
		const filteredProps = listingProps.filter(val => {
			return val.address.toLowerCase().indexOf(this.props.keyword) !== -1;
		});

		let result = [];
		let temp;

		filteredProps.map((val, key) => {
			if (key % 2 === 0 && key !== (filteredProps.length-1)) {
				temp = val;
			}
			else if (key % 2 === 0 && key === (filteredProps.length-1)) {
				result.push(
					<View key={key} style={styles.cardThumbnail}>
						<TouchableOpacity style={styles.cardContent}>
							<Image
								source={val.thumbnailImage}
								style={styles.thumbnail}
							/>
							<View style={styles.cardDetail}>
								<Text numberOfLines={1} style={styles.titleText}>{val.title}</Text>
								<Text numberOfLines={2} style={styles.descriptionText}>{val.description}</Text>
								<Text numberOfLines={1} style={styles.addressText}>{val.address}</Text>
								<Text style={styles.priceText}>{val.price}</Text>
							</View>
						</TouchableOpacity>
					</View>
				);
			}
			else if (key % 2 === 1) {
				result.push(
					<View key={key} style={styles.cardThumbnail}>
						<TouchableOpacity style={styles.cardContent}>
							<Image
								source={temp.thumbnailImage}
								style={styles.thumbnail}
							/>
							<View style={styles.cardDetail}>
								<Text numberOfLines={1} style={styles.titleText}>{temp.title}</Text>
								<Text numberOfLines={2} style={styles.descriptionText}>{temp.description}</Text>
								<Text numberOfLines={1} style={styles.addressText}>{temp.address}</Text>
								<Text style={styles.priceText}>{temp.price}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.cardContent}>
							<Image
								source={val.thumbnailImage}
								style={styles.thumbnail}
							/>
							<View style={styles.cardDetail}>
								<Text numberOfLines={1} style={styles.titleText}>{val.title}</Text>
								<Text numberOfLines={2} style={styles.descriptionText}>{val.description}</Text>
								<Text numberOfLines={1} style={styles.addressText}>{val.address}</Text>
								<Text style={styles.priceText}>{val.price}</Text>
							</View>
						</TouchableOpacity>
					</View>
				);
			}
		});
		return result;
	}

	render() {
		return (
			<View style={styles.cardSection}>
				<Text style={styles.boldText}>
					Listing Property
				</Text>
				{this.renderContent()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardSection: {
		marginVertical: 10,
		marginHorizontal: 10
	},
	cardThumbnail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10
	},
	cardDetail: {
		width: (width - 60) / 2
	},
	thumbnail: {
		width: (width - 60) / 2,
		height: (width - 60) / 3,
		marginBottom: 10
	},
	boldText: {
		color: '#000',
		fontWeight: 'bold'
	},
	addressText: {
		fontSize: 14,
		color: '#000',
		marginBottom: 5
	},
	descriptionText: {
		color: '#000',
		fontWeight: 'bold',
		marginBottom: 5
	},
	titleText: {
		fontSize: 10,
		fontWeight: 'bold',
		color: '#7A6E00',
		textTransform: 'uppercase',
		marginBottom: 5
	},
	priceText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#828282'
	}
});

export default Listing;
