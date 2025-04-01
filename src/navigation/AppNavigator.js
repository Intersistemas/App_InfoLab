import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen'; // Tu pantalla principal
import { ConsultasScreen } from '../screens/Pantallas/ConsultasScreen'; // Componente de Consultas
import {CodBarra} from '../screens/Pantallas/SubPantallas/CodBarra'; // Componente de Consultas
import {Descrip} from '../screens/Pantallas/SubPantallas/Descrip'; // Componente de Consultas


import { RecepcionScreen } from '../screens/Pantallas/RecepcionScreen'; // Componente de Recepción
import { InventariosScreen } from '../screens/Pantallas/InventariosScreen'; // Componente de Inventarios
import { OpcionesScreen } from '../screens/Pantallas/OpcionesScreen'; // Componente de Opciones
import {Login} from "../screens/Pantallas/Login"

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }} // Oculta el header globalmente para todas las pantallas
    >
      
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />


      <Stack.Screen
        name="ConsultasScreen"
        component={ConsultasScreen}
      />
      <Stack.Screen
        name="ConsultasScreenCodBarr"
        component={CodBarra}
      />
       <Stack.Screen
        name="ConsultasScreenDescrip"
        component={Descrip}
      />


      <Stack.Screen
        name="RecepcionScreen"
        component={RecepcionScreen}
      />
      <Stack.Screen
        name="InventariosScreen"
        component={InventariosScreen}
      />
      <Stack.Screen
        name="OpcionesScreen"
        component={OpcionesScreen}
      />
    </Stack.Navigator>
  );
};
