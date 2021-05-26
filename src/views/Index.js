import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	ScrollView,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Index({ navigation }) {
	return (
		<SafeAreaView>
			<View style={styles.contenedor}>
				<View style={styles.header}>
					<View>
						<Text style={styles.hSaludo}>Bienvenido</Text>
						<Text style={styles.hNombre}>Admin Gamer</Text>
					</View>
					<Image
						source={{ uri: 'https://picsum.photos/200' }}
						style={styles.hImgPerfil}
					/>
				</View>

				<ScrollView>
					<View style={styles.ofertas}>
						<Text style={styles.oTitulo}>Las mejores ofertas</Text>

						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.oCajas}>
								<Image
									source={{
										uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
									}}
									style={styles.oImagen}
								/>
								<View style={styles.oFooter}>
									<Text style={styles.oNombre}>Casa con alberca</Text>

									<Text style={styles.oDireccion}>
										Ruela Montes, 211, Bajo 1º
									</Text>

									<View style={styles.oIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>2</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>3</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>1500</Text>
										</View>
									</View>
								</View>
							</View>

							<View style={styles.oCajas}>
								<Image
									source={{
										uri: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
									}}
									style={styles.oImagen}
								/>
								<View style={styles.oFooter}>
									<Text style={styles.oNombre}>Apartamento amoblado</Text>

									<Text style={styles.oDireccion}>
										Avinguda Ainhoa, 31, 8º E
									</Text>

									<View style={styles.oIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>4</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>6</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>5210</Text>
										</View>
									</View>
								</View>
							</View>

							<View style={styles.oCajas}>
								<Image
									source={{
										uri: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80',
									}}
									style={styles.oImagen}
								/>
								<View style={styles.oFooter}>
									<Text style={styles.oNombre}>Mansion hanson</Text>

									<Text style={styles.oDireccion}>
										Passeig Alonso, 22, 1º D
									</Text>

									<View style={styles.oIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>7</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>5</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>8400</Text>
										</View>
									</View>
								</View>
							</View>
						</ScrollView>
					</View>

					<View style={styles.recomendadas}>
						<Text style={styles.rTitulo}>Casas recomendadas</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<View style={styles.rCajas}>
								<View>
									<Image
										source={{
											uri: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
										}}
										style={styles.rImagen}
									/>
								</View>

								<View style={styles.rContenido}>
									<Text style={styles.rNombre}>Sauces Dorados</Text>
									<Text style={styles.oDireccion}>Paseo Arroyo, 40, 14º E</Text>

									<View style={styles.rIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>2</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>2</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>1500</Text>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<View style={styles.rCajas}>
								<View>
									<Image
										source={{
											uri: 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
										}}
										style={styles.rImagen}
									/>
								</View>

								<View style={styles.rContenido}>
									<Text style={styles.rNombre}>Casa Malaparte</Text>
									<Text style={styles.oDireccion}>Paseo Lidia, 7, Bajos</Text>

									<View style={styles.rIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>1</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>3</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>3550</Text>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<View style={styles.rCajas}>
								<View>
									<Image
										source={{
											uri: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
										}}
										style={styles.rImagen}
									/>
								</View>

								<View style={styles.rContenido}>
									<Text style={styles.rNombre}>Villa Mairea</Text>
									<Text style={styles.oDireccion}>Camino Arroyo, 1, Bajos</Text>

									<View style={styles.rIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>4</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>4</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>5800</Text>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<View style={styles.rCajas}>
								<View>
									<Image
										source={{
											uri: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80',
										}}
										style={styles.rImagen}
									/>
								</View>

								<View style={styles.rContenido}>
									<Text style={styles.rNombre}>Casa Aalto</Text>
									<Text style={styles.oDireccion}>
										Avenida Mascareñas, 502, 77º C
									</Text>

									<View style={styles.rIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>3</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>5</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>5630</Text>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<View style={styles.rCajas}>
								<View>
									<Image
										source={{
											uri: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
										}}
										style={styles.rImagen}
									/>
								</View>

								<View style={styles.rContenido}>
									<Text style={styles.rNombre}>Casa Das Canoas</Text>
									<Text style={styles.oDireccion}>
										Travesía Corona, 911, 27º E
									</Text>

									<View style={styles.rIconos}>
										<View style={styles.oIconosConfig}>
											<Ionicons name="bed" size={20} color="black" />
											<Text style={styles.oCantidad}>5</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="bath" size={20} color="black" />
											<Text style={styles.oCantidad}>3</Text>
										</View>
										<View style={styles.oIconosConfig}>
											<FontAwesome name="square" size={20} color="black" />
											<Text style={styles.oCantidad}>3400</Text>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contenedor: {
		backgroundColor: '#E9EDEE',
	},
	header: {
		width: 360,
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 5,
		backgroundColor: '#fff',
	},
	hSaludo: {
		color: '#E5E5E5',
	},
	hNombre: {
		fontWeight: 'bold',
		fontSize: 17,
	},
	hImgPerfil: {
		width: 45,
		height: 45,
		borderRadius: 15,
	},
	ofertas: {
		marginTop: 20,
		marginBottom: 10,
	},
	oTitulo: {
		fontSize: 24,
		fontWeight: 'bold',
		marginLeft: 5,
	},
	oCajas: {
		width: 300,
		marginLeft: 15,
		marginRight: 10,
		marginTop: 14,
	},
	oImagen: {
		width: 300,
		height: 270,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
	},
	oFooter: {
		height: 100,
		backgroundColor: '#fff',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		padding: 10,
		color: '#000',
	},
	oNombre: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	oDireccion: {
		color: '#C1C1C1',
	},
	oIconos: {
		flexDirection: 'row',
		marginTop: 5,
		justifyContent: 'flex-start',
	},
	oIconosConfig: {
		flexDirection: 'row',
		borderColor: '#DEDEDE',
		borderWidth: 1.1,
		borderRadius: 5,
		marginLeft: 10,
		padding: 1.5,
	},
	recomendadas: {
		height: 960,
	},
	oCantidad: {
		marginLeft: 4,
		marginRight: 2,
	},
	rTitulo: {
		marginLeft: 5,
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
	},
	rCajas: {
		backgroundColor: '#ffffff',
		marginLeft: 15,
		height: 150,
		width: 320,
		borderRadius: 15,
		padding: 10,
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'row',
	},
	rImagen: {
		height: 120,
		width: 100,
		borderRadius: 10,
		marginTop: 5,
	},
	rContenido: {
		marginTop: 5,
		marginLeft: 2,
		maxWidth: 200,
	},
	rNombre: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	rIconos: {
		flexDirection: 'row',
		marginTop: 20,
	},
});
