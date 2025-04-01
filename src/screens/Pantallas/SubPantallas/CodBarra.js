// import React from 'react'
// import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../../../styles/CodBarra.styles'; // Importa los estilos


// export function CodBarra() {
//   return (
//     <View style={styles.containerPrincipal}>
//       <View style={styles.container}>
//       <View style={styles.logoContainer}>
//                 <Icon name="qrcode-scan" size={50} color="#003366" />
//                 <Text style={styles.logoText}>InfoLab</Text>
//       </View>
//    <View>
//     <Text style={{fontSize: 16, marginTop: 20}}>Buscar Articulo por Codigo de barra</Text>
     
//    </View>
//    <View style={{width: "50%", height: 40, alignSelf:"center"}}></View>
//    <TextInput placeholder='Ingrese Codigo' textAlign='center'></TextInput>
//    <View style={styles.containerBtn}>
//                 <TouchableOpacity  style={styles.button}><Text style={styles.buttonText}>ESCANEAR</Text></TouchableOpacity>
//   </View>
            
//       </View>
      
//     </View>
    
//   )
// }



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/CodBarra.styles'; // Importa los estilos
import apiData from "../../../services/api.json"; // Importa los datos de tu archivo JSON

export function CodBarra() {
  const [inputValue, setInputValue] = useState(''); // Almacena el código ingresado
  const [results, setResults] = useState([]); // Almacena los resultados de la búsqueda
  const [vista, setVista] = useState(false); // Estado para controlar la visibilidad de los resultados
  const [api, setApi] = useState([]); // Almacena los datos del API
  

  // Cargar los datos de la API al montar el componente
  useEffect(() => {
    setApi(apiData); // Inicializar el estado con los datos del archivo JSON
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = () => {
    if (!inputValue.trim()) {
      setResults([]); // Si el campo está vacío, limpia los resultados
      setVista(false); // Ocultar la vista de resultados
      console.log("Búsqueda vacía");
      
      return;
    }

    // Filtrar el producto por código de barras
    const filteredResults = api.filter(item => item.codigoBarra === inputValue.trim());
    setResults(filteredResults); // Actualizar los resultados
    console.log("Resultados filtrados:", filteredResults);
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="qrcode-scan" size={50} color="#003366" />
          <Text style={styles.logoText}>InfoLab</Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>Buscar Artículo por Código de Barra</Text>
        </View>

        {/* Input para ingresar el código */}
        {/* <View style={{ width: "80%", height: 40, alignSelf: "center" }}>
          <TextInput
            placeholder="Ingrese Código"
            value={inputValue} // Vincular el input con el estado
            onChangeText={text => setInputValue(text)} // Actualizar el texto ingresado
            style={styles.input}
          />
        </View> */}


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
        <View style={styles.containerBtn}>
                 <TouchableOpacity  style={styles.button}><Text style={styles.buttonText}>ESCANEAR</Text></TouchableOpacity>
          </View>

        {/* Botón para buscar */}
        {/* <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>BUSCAR</Text>
          </TouchableOpacity>
        </View> */}

        {/* Mostrar resultados */}
       
        <FlatList
          data={results}
          keyExtractor={item => item.codigoBarra}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultText}>
                {item.descripcion} - ${item.preciosLista.precio1}
              </Text>
            </View>
          )}
          // ListEmptyComponent={
          //   <Text style={styles.emptyText}>No se encontraron resultados</Text>
          // }
        />
        
      </View>
    </View>
  );
}
