import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/OpcionesScreen.styles'; // Importa los estilos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const OpcionesScreen = () => {
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Icon name="qrcode-scan" size={50} color="#003366" />
            <Text style={styles.logoText}>InfoLab</Text>
        </View>
        <Text style={{ fontSize: 28}}>Opciones</Text>
        <Text style={{marginBottom: 40, fontSize: 16}}>ADMIN</Text>
                  
        <View>
        
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>IP:</Text><TextInput placeholder='186.123.181.61' textAlign='center'></TextInput></View>
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>Base de Datos:</Text><TextInput placeholder='db_superfigg' textAlign='center'></TextInput></View>
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>Usuario:</Text><TextInput placeholder='sa' textAlign='center'></TextInput></View>
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>Puerto:</Text><TextInput placeholder='51433' textAlign='center'></TextInput></View>

            
        </View>
       



        <View style={styles.containerBtn}>
                <TouchableOpacity><Text style={styles.buttonText}>CERRAR SESION</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBtn}>
            <TouchableOpacity><Text style={styles.buttonText}>CERRAR CONEXION</Text></TouchableOpacity>
        </View>
    </View>
    );
}


