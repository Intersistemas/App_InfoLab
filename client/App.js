// import colors from '../constants/colors';

// const Header = () => {
//     return (
//         <View style={{ backgroundColor: colors.primary, padding: 20 }}>
//             <Text style={{ color: colors.white, fontSize: 20 }}>Header</Text>
//         </View>
//     );
// };


// import React from 'react';
// import MainScreen from './src/screens/MainScreen'; // Ajusta la ruta según tu estructura de carpetas

// export default function App() {
//   return (
//     <MainScreen />
//   )
// }

import { NavigationContainer } from "@react-navigation/native";
import {AppNavigator} from "./src/navigation/AppNavigator"
import Toast from 'react-native-toast-message';


export default function App(){
  return (
    <>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    <Toast />
    </>
    )
}