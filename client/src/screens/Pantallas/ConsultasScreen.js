import React from 'react';
import {View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/ConsultasScreen.styles'; // Importa los estilos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const ConsultasScreen = ({navigation}) => {
       

  // Manejar el evento al presionar el botón
  const handlePressCodBarra = () => {
    navigation.navigate('ConsultasScreenCodBarr'); // Redirige a la pantalla Admin
  };
  /////////////
  const handlePressDescrip = () => {
    navigation.navigate('ConsultasScreenDescrip'); // Redirige a la pantalla Admin
  };
          
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Icon name="qrcode-scan" size={50} color="#003366" />
                <Text style={styles.logoText}>InfoLab</Text>
            </View>
            <Text style={{marginBottom: 40, fontSize: 25}}>Consulta de Articulos</Text>
            <View style={styles.containerBtn} >
                <TouchableOpacity style={styles.button} onPress={handlePressCodBarra} >  <Text style={styles.buttonText}>CODIGO DE BARRAS</Text></TouchableOpacity>
            </View>
            <Text  style={{marginTop: 10, fontSize: 16}}>Buscar Articulos por Codigo de Barras</Text>



            <View style={styles.containerBtn}>
                <TouchableOpacity  style={styles.button}  onPress={handlePressDescrip}><Text style={styles.buttonText}>DESCRIPCION</Text></TouchableOpacity>
            </View>
            <Text style={{marginTop: 10, fontSize: 16}}>Buscar Articulos por Nombre y/o Descripcion </Text>
           
        </View>
    );
}

