import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

class Account extends Component {
	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<Image
					source={require('../../assets/images/kisel.png')}
					style={styles.coopImage}
				/>
				<View style={styles.cardSection}>
					<Text style={styles.commonText}>Badu Bidu</Text>
					<View style={styles.content}>
						<Text style={styles.commonText}>Anggota Reguler</Text>
						<Text style={styles.commonText}>Sejak 01/Jan/2000</Text>
					</View>
				</View>
				<View style={styles.separatorSection}>
					<Text style={styles.separatorText}>SIMPANAN</Text>
				</View>
				<View style={styles.cardSection}>
					<Text style={[styles.commonText, { textAlign: 'right' }]}>Update 01/Dec/2018</Text>
					<View style={styles.content}>
						<Text style={styles.commonText}>Simpanan Wajib</Text>
						<Text style={styles.commonText}>Rp. 1.000,00</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.commonText}>Simpanan Pokok</Text>
						<Text style={styles.commonText}>Rp. 2.000,00</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.commonText}>Simpanan Sukarela</Text>
						<Text style={styles.commonText}>Rp. 3.000,00</Text>
					</View>
				</View>
				<View style={styles.separatorSection}>
					<Text style={styles.separatorText}>SHU</Text>
				</View>
				<View style={styles.cardSection}>
					<View style={styles.content}>
						<Text style={styles.commonText}>SHU 2017 (10/Sep/2018)</Text>
						<Text style={styles.commonText}>Rp. 4.000,00</Text>
					</View>
				</View>
				<View style={styles.separatorSection}>
					<Text style={styles.separatorText}>PINJAMAN</Text>
				</View>
				<View style={styles.cardSection}>
					<View style={styles.content}>
						<Text style={styles.commonText}>KPR BTN (10/Sep/2001)</Text>
						<Text style={styles.commonText}>Rp. 4.000,00</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.commonText}>Cicilan ke-100 (20/Sep/2018)</Text>
						<Text style={styles.commonText}>Rp. 100,00</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.commonText}>Saldo Pinjaman (20/Sep/2018)</Text>
						<Text style={styles.commonText}>Rp. 2.000,00</Text>
					</View>
					<View style={styles.separatorLine} />
					<View style={styles.content}>
						<Text style={styles.commonText}>Tagihan ke-101 (20/Sep/2018)</Text>
						<Text style={styles.commonText}>Rp. 100,00</Text>
					</View>
				</View>
				<View style={styles.separatorSection}>
					<Text style={styles.separatorText}>TABUNGAN</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		backgroundColor: '#fff'
	},
	coopImage: {
		marginVertical: 10,
		marginHorizontal: 10
	},
	cardSection: {
		paddingHorizontal: 20
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	separatorSection: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: '#FF0000',
		marginVertical: 10
	},
	separatorLine: {
		borderBottomWidth: 2,
		borderColor: '#ddd',
		marginVertical: 10
	},
	separatorText: {
		color: '#fff',
		fontWeight: 'bold'
	},
	commonText: {
		color: '#000',
		lineHeight: 25
	}
});

export default Account;
