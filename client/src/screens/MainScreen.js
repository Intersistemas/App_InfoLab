// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from '../styles/MainScreen.styles'; // Importa los estilos desde la carpeta de estilos
// import { CardPrincipal } from '../components/CardPrincipal';

// export const MainScreen = () => {
//   return (
//     <View style={styles.container}>
//       <CardPrincipal/>
//     </View>
//   );
// };


import React from 'react';
import { View } from 'react-native';
import styles from '../styles/MainScreen.styles'; // Importa los estilos
import { CardPrincipal } from '../components/CardPrincipal';

export const MainScreen = ({ navigation }) => {
  // `navigation` viene automáticamente de React Navigation al estar registrado en el Stack Navigator
  return (
    <View style={styles.container}>
      {/* Pasamos la prop navigation a CardPrincipal */}
      <CardPrincipal navigation={navigation} />
    </View>
  );
};
