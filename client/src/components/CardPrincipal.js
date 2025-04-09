// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../styles/CardPrincipal.style'; 

// export const CardPrincipal = () => {
//     return (
//         <View style={styles.containerPrin}>
//             <View style={styles.logoContainer}>
//                 <Icon name="qrcode-scan" size={50} color="#003366" />
//                 <Text style={styles.logoText}>InfoLab Soluciones</Text>
//             </View>

//             <TouchableOpacity style={styles.card}>
//                 <Icon name="qrcode-scan" size={100} color="#fff" />
//                 <Text style={styles.cardText}>CONSULTAS</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.card}>
//                 <Icon name="truck-delivery" size={100} color="#fff" />
//                 <Text style={styles.cardText}>RECEPCIÓN DE MERCADERÍA</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.card}>
//                 <Icon name="archive-outline" size={100} color="#fff" />
//                 <Text style={styles.cardText}>INVENTARIOS</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.card}>
//                 <Icon name="cog-outline" size={100} color="#fff" />
//                 <Text style={styles.cardText}>OPCIONES</Text>
//             </TouchableOpacity>

//             <Text style={styles.version}>Versión: 1.0</Text>
//         </View>
//     );
// };


import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/CardPrincipal.styles';

export const CardPrincipal = ({ navigation }) => {
  return (
    <View style={styles.containerPrin}>
      <View style={styles.logoContainer}>
       <Image source={require('../../assets/logoP.png')} style={{width: 100, height: 100}} />
        {/* <Text style={styles.logoText}>InfoLab Soluciones</Text> */}
      </View>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ConsultasScreen')}>
        <Icon name="qrcode-scan" size={80} color="#fff" />
        <Text style={styles.cardText}>CONSULTAS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RecepcionScreen')}>
        <Icon name="truck-delivery" size={80} color="#fff" />
        <Text style={styles.cardText}>RECEPCIÓN DE MERCADERÍA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('InventariosScreen')}>
        <Icon name="archive-outline" size={80} color="#fff" />
        <Text style={styles.cardText}>INVENTARIOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('OpcionesScreen')}>
        <Icon name="cog-outline" size={80} color="#fff" />
        <Text style={styles.cardText}>OPCIONES</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Versión: 1.0</Text>
    </View>
  );
};
