{/*
import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/Descrip.styles'; // Importa los estilos


export function Descrip() {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
                <Icon name="qrcode-scan" size={50} color="#003366" />
                <Text style={styles.logoText}>InfoLab</Text>
      </View>

    <Text style={{fontSize: 16, marginTop: 20}}>Buscar Articulo por Nombre</Text>    
    <View style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
      <TextInput placeholder='Ingrese Codigo' textAlign='center'></TextInput>
      <Icon name="magnify" size={20} color="black" />
    </View>

            
      </View>
      
    </View>
    
  )
}*/}


/////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/Descrip.styles'; // Importa los estilos
import apiData from "../../../services/api.json"; // Importa el JSON con los datos

export function Descrip() {
  const [inputValue, setInputValue] = useState(''); // Estado para almacenar el texto ingresado
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const [api, setApi] = useState([]); // Estado para almacenar los datos de la API
  const [vista, setVista] = useState(false); // Estado para controlar la visibilidad de los resultados

  // Cargar datos del archivo JSON al montar el componente
  useEffect(() => {
    setApi(apiData); // Inicializar el estado `api` con los datos de `api.json`
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = () => {
    if (!inputValue.trim()) {
      setResults([]); // Si el campo está vacío, limpia los resultados
      setVista(false); // Ocultar la vista de resultados
      console.log("Búsqueda vacía");
      return;
    }

    // Filtrar los resultados, buscando en la propiedad `descripcion`
    const filteredResults = api.filter(item =>
      item.descripcion.toLowerCase().includes(inputValue.toLowerCase())
    );

    console.log("Resultados filtrados:", filteredResults);
    setResults(filteredResults); // Actualiza los resultados
    setVista(true); // Mostrar la vista de resultados
  };

  return (
    <View >
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
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="magnify" size={25} color="black"/>
          </TouchableOpacity>
        </View>
        <View style={styles.linea}></View>
      </View>

      {/* Mostrar resultados */}
      {vista && (
         <View style={styles.principalVista}>
        <FlatList
          data={results}
          keyExtractor={item => item.codigoBarra}
          renderItem={({ item }) => (
           
              <View style={styles.resultItem}>
              <Text style={styles.resultText}>
                {item.descripcion}
              </Text>
             <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
             <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
              <Text style={styles.resultText1}>Precio de Costo: ${item.preciosLista.precio1}</Text>
              <Text style={styles.resultText1}>Stock: {item.cantidad}</Text>
              </View>

              <View style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
              <Text style={styles.resultText1}>Lista 1: ${item.preciosLista.precio1}</Text>
              <Text style={styles.resultText1}>Codigo: {item.codigoBarra}</Text>
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

      















