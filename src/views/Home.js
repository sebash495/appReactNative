import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Home() {
	return (
		<View>
			<ScrollView>
				<ImageBackground
					source={{
						uri: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
					}}
					style={styles.hero}
				></ImageBackground>

				<View style={styles.contenedor}>
					<Text style={styles.titulo}>Sauces Dorados</Text>
					<Text style={styles.direccion}>Paseo Arroyo, 40, 14º E</Text>

					<View style={styles.iconos}>
						<View style={styles.iconosConfig}>
							<Ionicons name="bed" size={20} color="black" />
							<Text style={styles.cantidad}>3</Text>
						</View>
						<View style={styles.iconosConfig}>
							<FontAwesome name="bath" size={20} color="black" />
							<Text style={styles.cantidad}>5</Text>
						</View>
						<View style={styles.iconosConfig}>
							<FontAwesome name="square" size={20} color="black" />
							<Text style={styles.cantidad}>5630</Text>
						</View>
					</View>

					<Text style={styles.contenido}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</Text>

					<Text style={styles.galeria}>Galería</Text>
					<View style={styles.galeriaImg}>
						<Image
							source={{
								uri: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
							}}
							style={styles.img}
						/>
						<Image
							source={{
								uri: 'https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
							}}
							style={styles.img}
						/>
						<Image
							source={{
								uri: 'https://images.unsplash.com/photo-1503011510-c0e00592713b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
							}}
							style={styles.img}
						/>
					</View>

					<View style={styles.barraPrecio}>
						<View>
							<Text style={styles.precio}>Precio</Text>
							<Text style={styles.monto}>$10.500</Text>
						</View>

						<TouchableOpacity
							onPress={() => Alert.alert('Gracias por tu orden XD')}
							style={styles.btn}
						>
							<Text style={styles.comprar}>Comprar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	hero: {
		width: 360,
		height: 200,
	},
	contenedor: {
		width: 340,
		margin: 10,
		height: 420,
	},
	titulo: {
		fontWeight: 'bold',
		fontSize: 25,
	},
	direccion: {
		color: '#C1C1C1',
	},
	iconos: {
		flexDirection: 'row',
		marginTop: 7,
	},
	iconosConfig: {
		flexDirection: 'row',
		borderColor: '#DEDEDE',
		borderWidth: 1.1,
		borderRadius: 5,
		padding: 1.5,
		marginLeft: 3,
	},
	cantidad: {
		marginLeft: 2,
	},
	contenido: {
		color: '#C1C1C1',
		marginTop: 15,
		marginBottom: 10,
	},
	galeria: {
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 10,
	},
	img: {
		width: 100,
		height: 100,
		marginLeft: 5,
		borderRadius: 10,
	},
	galeriaImg: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5,
	},
	barraPrecio: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 15,
	},
	precio: {
		color: '#C1C1C1',
		fontSize: 15,
	},
	monto: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	btn: {
		backgroundColor: '#ECC9A9',
		width: 90,
		height: 50,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	comprar: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 16,
		textTransform: 'uppercase',
	},
});
