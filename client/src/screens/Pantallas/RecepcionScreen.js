


import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles/RecepcionScreen.styles'; // Importa los estilos

export const RecepcionScreen = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [inputValue, setInputValue] = useState(''); // Estado para almacenar el texto ingresado
    
    
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
            <Text style={{marginBottom: 40, fontSize: 28}}>Recepcion de Mercaderias</Text>
           <Text>{fecha} {horaFormateada}</Text>
           <View style={styles.containerInpInfo}>
                <View style={{width: "50%", height: 40}}>
                    <View style={styles.container2}>
    
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Seleccione" value="opcion1" />
                            <Picker.Item label="Salon  de Ventas - Casa Ctral." value="opcion2" />
                            <Picker.Item label="Salon Venta Suc2" value="opcion3" />
                        </Picker>

                    </View>
                </View>
               
                <View style={{width: "50%", height: 40}}>
                    <View style={styles.container2}>
    
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Nº Comprobante" value="opcion1" />
                            <Picker.Item label="X" value="opcion2" />
                            <Picker.Item label="A" value="opcion3" />
                            <Picker.Item label="B" value="opcion4" />
                            <Picker.Item label="C" value="opcion5" />
                        </Picker>

                    </View>
              
                </View>
           </View>

           <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", padding: 10 }}>
          <TextInput
            placeholder="Seleccione Almacen"
            value={inputValue}
            onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
            style={styles.inputt}
            
          />
            <TouchableOpacity >
                <Icon name="menu" size={25} color="black"/>
            </TouchableOpacity>
            </View>



            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", padding: 10 }}>
          <TextInput
            placeholder="Seleccione Proveedor"
            value={inputValue}
            onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
            style={styles.inputt}
            
          />
            <TouchableOpacity >
                <Icon name="menu" size={25} color="black"/>
            </TouchableOpacity>
            </View>


      

















            <View style={{display: "flex", flexDirection: "row"}}>
            <View style={styles.containerBtn}>
                <TouchableOpacity  style={styles.button}><Text style={styles.buttonText}>TEXTO</Text></TouchableOpacity>
            </View>
            <View style={styles.containerBtn}>
               
                <TouchableOpacity  style={styles.button}><Text style={styles.buttonText}>CODIGO</Text></TouchableOpacity>
            </View>
            </View>


            <View style={{display: "flex", flexDirection: "column"}}>
            <View style={{width: "50%",height: 40}}><TextInput placeholder='Observaciones' textAlign='center'></TextInput></View>
            <View style={styles.containerBtn}>
               
                <TouchableOpacity  style={styles.button}><Text style={styles.buttonText}>GRABAR</Text></TouchableOpacity>
            </View>
            </View>
            
            
           
        </View>
    );
}

