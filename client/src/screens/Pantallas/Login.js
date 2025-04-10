// import React, {useState} from 'react';
// import { View,Text, TextInput, Button, Alert, Image} from 'react-native';
// import styles from '../../styles/Login.styles'; // Importa los estilos
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export const Login = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handlePress = () => {
//         // Validar credenciales
//         if (username === 'admin' && password === '123456') {
//             navigation.navigate('MainScreen'); // Redirige a la pantalla Admin
//         } else {
//           Alert.alert('Error', 'Credenciales incorrectas');
//         }
//             // Limpia los campos después de presionar el botón
//             setUsername('');
//             setPassword('');
//       };

//     return (
//         <View style={styles.containerPrincipal}>
              
//             <View style={styles.container}>
//             <View style={styles.logoContainer}>
//                 <Image source={require('../../../assets/logoP.png')} style={{width: 100, height: 100}} />
//                 {/* <Text style={styles.logoText}>InfoLab Soluciones</Text> */}
//             </View>
//             <View style={styles.containerInp}>
            
//                 <TextInput style={styles.input} placeholder='Usuario'
//                 textAlign='center'
//                 value={username}
//                 onChangeText={setUsername}
//                 />
//             </View>
//             <View style={styles.containerInp}>
                
//                 <TextInput style={styles.input} placeholder='Contraseña'
//                  textAlign='center'
//                  value={password}
//                  onChangeText={setPassword}
//                  secureTextEntry
//                 />
                
                
//             </View>
            
//             <View style={styles.containerBtn}>
//                 <Button title="INGRESAR" color={"#003366"} onPress={handlePress}  />
//             </View>
            
            
//             </View>
//         </View>
//     );
// }

//----------------------------------------------------------------------

import React, {useState, useContext} from 'react';
import { View,Text, TextInput, Button, Alert, Image} from 'react-native';
import styles from '../../styles/Login.styles'; // Importa los estilos
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from "../../context/AuthContext"; // 📌 Importamos el contexto global


export const Login = ({ navigation }) => {
    const { updateFormData, formData = {} } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(formData.isAuthenticated || false); // Estado de autenticación

    const handlePress = () => {
        // Validar credenciales
        if (username === 'admin' && password === '123456') {
            // Si las credenciales son correctas, actualiza el estado de autenticación
            setIsAuthenticated(true);
            updateFormData({
                isAuthenticated: true, // Cambia el estado de loading a true
            });
            // Alert.alert('Éxito', 'Inicio de sesión exitoso');
            navigation.navigate('MainScreen'); // Navega a la pantalla principal
        } else {
          Alert.alert('Error', 'Credenciales incorrectas');
        }
            // Limpia los campos después de presionar el botón
            setUsername('');
            setPassword('');
      };
      

    //   const actualizandoDato = () => {
    //     updateFormData({
          
    //         isAuthenticated: true, // Cambia el estado de loading a true
    //     });
    //   };
    return (
        <View style={styles.containerPrincipal}>
              
            <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logoP.png')} style={{width: 100, height: 100}} />
                {/* <Text style={styles.logoText}>InfoLab Soluciones</Text> */}
                {/* <Text>😀{  isAuthenticated == true ? "true" : "false"}</Text> */}
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
                <Button title="INGRESAR" color={"#003366"}   onPress={handlePress}  />
            </View>
            
            
            </View>
        </View>
    );
}

