import React, {useState} from 'react';
import { View,Text, TextInput, Button, Alert} from 'react-native';
import styles from '../../styles/Login.styles'; // Importa los estilos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        // Validar credenciales
        if (username === 'admin' && password === '123456') {
            navigation.navigate('MainScreen'); // Redirige a la pantalla Admin
        } else {
          Alert.alert('Error', 'Credenciales incorrectas');
        }
            // Limpia los campos después de presionar el botón
            setUsername('');
            setPassword('');
      };

    return (
        <View style={styles.containerPrincipal}>
              
            <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Icon name="qrcode-scan" size={50} color="#003366" />
                <Text style={styles.logoText}>InfoLab Soluciones</Text>
            </View>
            <View style={styles.containerInp}>
            
                <TextInput style={styles.input} placeholder='Usuario'
                textAlign='center'
                value={username}
                onChangeText={setUsername}
                />
            </View>
            <View style={styles.containerInp}>
                
                <TextInput style={styles.input} placeholder='Contraseña'
                 textAlign='center'
                 value={password}
                 onChangeText={setPassword}
                 secureTextEntry
                />
                
                
            </View>
            
            <View style={styles.containerBtn}>
                <Button title="INGRESAR" color={"#003366"} onPress={handlePress}  />
            </View>
            
            
            </View>
        </View>
    );
}

