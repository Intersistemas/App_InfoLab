import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {View, Text, TextInput, Image} from 'react-native';
import styles from '../../styles/InventariosScreen.styles'; // Importa los estilos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const InventariosScreen = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const fechaActual = new Date();

// Obtener la fecha en formato dd/mm/aa
const dia = fechaActual.getDate().toString().padStart(2, '0'); // Día con dos dígitos
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Mes con dos dígitos
const anio = fechaActual.getFullYear().toString().slice(-2); // Últimos dos dígitos del año
const fecha = `${dia}/${mes}/${anio}`;

// Obtener la hora en formato hh:mm
const hora = fechaActual.getHours().toString().padStart(2, '0'); // Hora con dos dígitos
const minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Minutos con dos dígitos
const horaFormateada = `${hora}:${minutos}`;



    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                 <Image source={require('../../../assets/logoP.png')} style={{width: 100, height: 100}} />
                {/* <Text style={styles.logoText}>InfoLab</Text> */}
            </View>
            <Text style={{marginBottom: 5, fontSize: 28}}>Inventarios</Text>
                       <Text>{fecha} {horaFormateada}</Text>
            <View>
            
               
            <View style={styles.container2}>
    
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione Almacen" value="opcion1" />
                <Picker.Item label="Salon  de Ventas - Casa Ctral." value="opcion2" />
                <Picker.Item label="Salon Venta Suc2" value="opcion3" />
            </Picker>
 
              </View>
            </View>
        </View>
    );
}

//////////////////////////////////////////////////////////////

