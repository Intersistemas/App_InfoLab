import React, { useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/OpcionesScreen.styles'; // Importa los estilos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from "../../context/AuthContext";
import Toast from "react-native-toast-message";

export const OpcionesScreen = ({ navigation }) => {

    const { updateFormData, formData = {} } = useContext(AuthContext);

    const sesionCerrada = () => {
        // Lógica para cerrar sesión
        updateFormData({ isAuthenticated: false }); // Actualiza el estado de autenticación
        Toast.show({
            type: "success",
            text1: "Sesión cerrada",
            text2: "La sesión se ha cerrado correctamente.",
        });
        
        navigation.navigate('Login'); 
   
    }

    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
           <Image source={require('../../../assets/logoP.png')} style={{width: 100, height: 100}} />
            {/* <Text style={styles.logoText}>InfoLab</Text> */}
        </View>
        <Text style={{ fontSize: 28}}>Opciones</Text>
        <Text style={{marginBottom: 40, fontSize: 16}}>ADMIN</Text>
        {/* <Text>{formData.isAuthenticated == false ? "false" : "true"}</Text> */}
                  
        <View>
        
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>IP:</Text><TextInput placeholder='192.168.0.46' textAlign='center'></TextInput></View>
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>Base de Datos:</Text><TextInput placeholder='DB_CHL' textAlign='center'></TextInput></View>
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>Usuario:</Text><TextInput placeholder='sa' textAlign='center'></TextInput></View>
            <View style={{width: "50%", height: 40, display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{fontSize: 14,  fontWeight: 'bold'}}>Puerto:</Text><TextInput placeholder='1433' textAlign='center'></TextInput></View>

            
        </View>
       



        <View style={styles.containerBtn}>
                <TouchableOpacity><Text style={styles.buttonText} onPress={sesionCerrada}>CERRAR SESION</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBtn}>
            <TouchableOpacity><Text style={styles.buttonText}>CERRAR CONEXION</Text></TouchableOpacity>
        </View>
    </View>
    );
}


