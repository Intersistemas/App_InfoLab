import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/Descrip.styles'; // Importa los estilos
import Toast from 'react-native-toast-message';

export function Descrip() {
  const [inputValue, setInputValue] = useState(''); // Estado para almacenar el texto ingresado
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const [vista, setVista] = useState(false); // Estado para controlar la visibilidad de los resultados



  // Esta función se ejecuta al presionar el botón "ESCANEAR"
  const fetchData = async () => {
    const busquedaXnombre = inputValue.trim(); // Elimina espacios en blanco
    if (!busquedaXnombre) {
      console.log("Búsqueda vacía");
      setResults([]);
      setVista(false);
      return;
    }

    try {
      const response = await fetch(`http://192.168.0.46:3001/buscarNombre/${busquedaXnombre}`);
      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.status}`);
      }
      const data = await response.json();

     
      
      if (data && data.length > 0) {
        setResults(data); // Guardo los datos que recibo del backend
        setVista(true); // Mostrar la vista de resultados
        console.log("Datos recibidos del backend:", data);
        Toast.show({
          type: 'success',
          text1: 'Dato encontrado con éxito',
      
        });
      
      } else {
        console.log("No hay coincidencias en la base de datos");
        setResults([]);
        setVista(false);
        Toast.show({
          type: 'info',
          text1: 'No se encontraron coincidencias',
        })
      }
    } catch (error) {
      console.error('Error al obtener los datos desde el servidor:', error);
      setResults([]);
      setVista(false);
      Toast.show({
        type: 'error',
        text1: 'Error al obtener los datos desde el servidor',
      });
    }
  };
  console.log("Resultados:", results); // Muestra los resultados en consola

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="qrcode-scan" size={50} color="#003366" />
          <Text style={styles.logoText}>InfoLab</Text>
        </View>

        <Text style={{ fontSize: 16, marginTop: 20 }}>Buscar Artículo por Nombre</Text>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Ingrese Descripcion"
            value={inputValue}
            onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
            style={styles.inputt}
          />
          <TouchableOpacity onPress={fetchData}>
            <Icon name="magnify" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.linea}></View>
      </View>

      {/* Mostrar resultados */}
      {vista && (
        <View style={styles.principalVista}>
          <FlatList
            data={results}
            keyExtractor={item => item.ARTICULO.toString()}
            renderItem={({ item }) => (
              <View style={styles.resultItem}>
                {/* <Text style={styles.resultText}>
                  {item.DESCRIPCION || 'Sin descripción'}
                </Text> */}
              {/* El "numberOfLines", me sirve  */}
              <Text style={styles.resultText} numberOfLines={1}>
                {item.DESCRIPCION || 'Sin descripción'}
              </Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                  <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <Text style={styles.resultText1}>
                      Precio de Costo: ${item.PRECIO_DE_COSTO || 'N/A'}
                    </Text>
                    <Text style={styles.resultText1}>
                      Stock: {item.STOCK_ACTUAL || 'N/A'}
                    </Text>
                  </View>

                  <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <Text style={styles.resultText1}>
                      Lista 1: ${item.PRECIO_LISTA1 || 'N/A'}
                    </Text>
                    <Text style={styles.resultText1}>
                      Código: {item.ARTICULO || 'N/A'}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No se encontraron resultados</Text>
            }
          />
        </View>
      )}
    </View>
  );
}