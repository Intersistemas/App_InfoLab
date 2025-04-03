
//---------------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/CodBarra.styles'; // Importa los estilos
import Toast from 'react-native-toast-message';


export function CodBarra() {
  const [inputValue, setInputValue] = useState(''); // Código ingresado manualmente (por ahora lo dejamos sin uso)
  const [results, setResults] = useState([]); // Almaceno el resultado de la búsqueda

  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el artículo seleccionado

  



  // Esta función se ejecuta al presionar el botón "ESCANEAR"

  const fetchData = async () => {
    const codigoEjemplo = inputValue; // Aquí puedes usar el valor ingresado en el input
    try {
     
      const response = await fetch(`http://192.168.0.46:3001/buscar/${codigoEjemplo}`);
      const data = await response.json();
      setResults(data); // Guardo los datos que recibo del backend
      console.log("Datos recibidos del backend:", data); // Muestro en consola
      if (data.length > 0) {
      Toast.show({
        type: 'success',
        text1: 'Dato encontrado con éxito',
    
      });
      } else {
        console.log("No hay coincidencias en la base de datos");
        Toast.show({
          type: 'info',
          text1: 'No se encontraron coincidencias',
        })
      }
     
    } catch (error) {
      console.error('Error al obtener los datos desde el servidor:', error);
      Toast.show({
        type: 'error',
        text1: 'Error al obtener los datos desde el servidor',
      });
    }
  }

//Funcion que se ejecuta para mostrar mi modal

  const handleItemPress = (item) => {
    setSelectedItem(item); // Almaceno el artículo seleccionado
    setModalVisible(true); // Muestro el modal
  }






  // return (
  //   <View style={styles.containerPrincipal}>
  //     <View style={styles.container}>
  //       <View style={styles.logoContainer}>
  //         <Icon name="qrcode-scan" size={50} color="#003366" />
  //         <Text style={styles.logoText}>InfoLab</Text>
  //       </View>

  //       <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>
  //         Buscar Artículo por Código de Barra
  //       </Text>

  //       {/* Input que en el futuro va a ser usado cuando se active el escáner */}
  //       <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
  //         <TextInput
  //           placeholder="Codigo del producto"
  //           value={inputValue}
  //           // onChangeText={handleInputChange} // Actualiza el estado con el texto ingresado
  //           onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
  //           style={styles.inputt}
  //         />
  //         <TouchableOpacity onPress={() => {}}>
  //           <Icon name="magnify" size={25} color="black" />
  //         </TouchableOpacity>
  //       </View>

  //       <View style={styles.containerBtn}>
  //         <TouchableOpacity style={styles.button} onPress={fetchData}>
  //           <Text style={styles.buttonText}>ESCANEAR</Text>
  //         </TouchableOpacity>
  //       </View>

  //     <FlatList
  //         data={results}
  //         keyExtractor={item => item.codigoBarra}
  //         renderItem={({ item }) => (
  //           <TouchableOpacity style={styles.resultItem} onPress={handleItemPress} >
  //             <Text style={styles.resultText}>
  //               {item.DESCRIPCION}
  //             </Text>
  //             <Text style={styles.resultText1}>
  //               ${item.PRECIO_LISTA1}
  //             </Text>
  //           </TouchableOpacity>
  //         )}

  //       />
  //       {/* Modal, que al seleccionar mi dato mostrado me muestra los detalles */}
  //       <Modal visible={modalVisible} animationType="slide">
  //         <View style={styles.modalContainer}>
  //           <Text style={styles.modalTitle}>Detalles del Artículo</Text>
  //           <Text>Descripción: {selectedItem?.DESCRIPCION}</Text>
  //           <Text>Precio: ${selectedItem?.PRECIO_LISTA1}</Text>
  //           <TouchableOpacity onPress={() => setModalVisible(false)}>
  //             <Text>Cerrar</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </Modal> 
  //     </View>
  //   </View>
  // );



  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="qrcode-scan" size={50} color="#003366" />
          <Text style={styles.logoText}>InfoLab</Text>
        </View>
  
        <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>
          Buscar Artículo por Código de Barra
        </Text>
  
        {/* Input que en el futuro va a ser usado cuando se active el escáner */}
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Codigo del producto"
            value={inputValue}
            onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
            style={styles.inputt}
            width="60%" // Ajusta el ancho del TextInput
            textAlign='center' // Centra el texto dentro del TextInput

          />
          <TouchableOpacity onPress={() => {}}>
            <Icon name="magnify" size={25} color="black" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.button} onPress={fetchData}>
            <Text style={styles.buttonText}>ESCANEAR</Text>
          </TouchableOpacity>
        </View>
  
        <FlatList
          data={results}
          keyExtractor={item => item.codigoBarra}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.resultItem} onPress={() => handleItemPress(item) }>
              <Text style={styles.resultText}>
                {item.DESCRIPCION}
              </Text>
              {/* <Text style={styles.resultText1}>
                ${item.PRECIO_LISTA1}
              </Text> */}
              <Text>
              <Icon name="arrow-right" size={20} color="grey" />
              </Text>

            </TouchableOpacity>
          )}
        />
  
        {/* Modal, que al seleccionar mi dato mostrado me muestra los detalles */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          
          <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          <View>
            
          <Text style={styles.modalTitle}>Detalles del Artículo</Text>
            {selectedItem ? (
              <>
                <View>
                <Text  style={styles.t} >{selectedItem.DESCRIPCION}</Text>
                <Text style={styles.tt} > Precio Lista 1: <Text  style={styles.t}>${selectedItem.PRECIO_LISTA1}</Text></Text>
                <Text style={styles.tt} > Precio Lista 2: <Text  style={styles.t}>${selectedItem.PRECIO_LISTA2}</Text></Text>
                <Text style={styles.tt} > Precio Lista 3: <Text  style={styles.t}>${selectedItem.PRECIO_LISTA3}</Text></Text>
                <Text style={styles.t} >Ultima Actualizacion: {selectedItem.FECHAACTPRECIOS}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                  <Text  style={styles.t2} >
                    Almacen Salon de Ventas: -
                  </Text>
                  <Text  style={styles.t2} >
                    Stock: {selectedItem.STOCK_ACTUAL || "N/A"}
                  </Text>
                  <Text  style={styles.t2} >
                    Unidad: {selectedItem.UNIDAD || "N/A"}
                  </Text>
                </View>
              </> 
            ) : (
              <Text style={styles.t} >No hay información disponible</Text>
            )}
          </View>

          
           
          </View>
        </Modal>
      </View>
    </View>
  );

}


