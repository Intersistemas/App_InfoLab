// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../../../styles/Descrip.styles'; // Importa los estilos
// import Toast from 'react-native-toast-message';

// export function Descrip() {
//   const [inputValue, setInputValue] = useState(''); // Estado para almacenar el texto ingresado
//   const [results, setResults] = useState([]); // Estado para almacenar los resultados de búsqueda
//   const [vista, setVista] = useState(false); // Estado para controlar la visibilidad de los resultados

//     const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
//     const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el artículo seleccionado



//   // Esta función se ejecuta al presionar el botón "ESCANEAR"
//   const fetchData = async () => {
//     const busquedaXnombre = inputValue.trim(); // Elimina espacios en blanco
//     if (!busquedaXnombre) {
//       console.log("Búsqueda vacía");
//       setResults([]);
//       setVista(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://192.168.0.46:3001/buscarNombre/${busquedaXnombre}`);
//       if (!response.ok) {
//         throw new Error(`Error en la respuesta del servidor: ${response.status}`);
//       }
//       const data = await response.json();

     
      
//       if (data && data.length > 0) {
//         setResults(data); // Guardo los datos que recibo del backend
//         setVista(true); // Mostrar la vista de resultados
//         console.log("Datos recibidos del backend:", data);
//         Toast.show({
//           type: 'success',
//           text1: 'Dato encontrado con éxito',
      
//         });
      
//       } else {
//         console.log("No hay coincidencias en la base de datos");
//         setResults([]);
//         setVista(false);
//         Toast.show({
//           type: 'info',
//           text1: 'No se encontraron coincidencias',
//         })
//       }
//     } catch (error) {
//       console.error('Error al obtener los datos desde el servidor:', error);
//       setResults([]);
//       setVista(false);
//       Toast.show({
//         type: 'error',
//         text1: 'Error al obtener los datos desde el servidor',
//       });
//     }
//   };
//   console.log("Resultados:", results); // Muestra los resultados en consola


//   //Funcion que se ejecuta para mostrar mi modal

//   const handleItemPress = (item) => {
//     setSelectedItem(item); // Almaceno el artículo seleccionado
//     setModalVisible(true); // Muestro el modal
//   }


//   return (
//     <View>
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>
//           <Icon name="qrcode-scan" size={50} color="#003366" />
//           <Text style={styles.logoText}>InfoLab</Text>
//         </View>

//         <Text style={{ fontSize: 16, marginTop: 20 }}>Buscar Artículo por Nombre</Text>

//         <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//           <TextInput
//             placeholder="Ingrese Descripcion"
//             value={inputValue}
//             onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
//             style={styles.inputt}
//           />
//           <TouchableOpacity onPress={fetchData}>
//             <Icon name="magnify" size={25} color="black" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.linea}></View>
//       </View>

//       {/* Mostrar resultados */}
//       {/* ------------------------------ */}
//       <View style={styles.principalVista}>
//     {vista && results.length > 0 ? (
//       <FlatList
//       data={results}
//       keyExtractor={item => item.codigoBarra}
//       renderItem={({ item }) => (
//         <TouchableOpacity style={styles.resultItem} onPress={() => handleItemPress(item) }>
//           <Text style={styles.resultText} numberOfLines={1}>
//             {item.DESCRIPCION || 'Sin descripción'}
//           </Text>
//           <Text>
//              <Icon name="arrow-right" size={20} color="grey" />
//           </Text>

//         </TouchableOpacity>
//       )}
//     />
//     ) : (
//       <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
//         <Icon name="reload" size={30} color="grey" />
//         <Text style={{ fontSize: 16, color: "grey", marginLeft: 10 }}>No hay resultados para mostrar</Text>
//       </View>
//     )}
//   </View>
  



//       {/* Modal--------------------------------------------------------------- */}

//               {/* Modal, que al seleccionar mi dato mostrado me muestra los detalles */}
//               <Modal visible={modalVisible} animationType="slide" transparent={true}>
          
//           <View style={styles.modalContainer}>
//           <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>X</Text>
//             </TouchableOpacity>
//           <View>
            
//           <Text style={styles.modalTitle}>Detalles del Artículo:</Text>
//             {selectedItem ? (
//               <>
//                 <View>
//                 <Text  style={styles.tDescription} >{selectedItem.DESCRIPCION}</Text>
//                 <Text style={styles.tt} > Precio Lista 1: <Text  style={styles.t}>${selectedItem.PRECIO_LISTA1}</Text></Text>
//                 <Text style={styles.tt} > Precio Lista 2: <Text  style={styles.t}>${selectedItem.PRECIO_LISTA2}</Text></Text>
//                 <Text style={styles.tt} > Precio Lista 3: <Text  style={styles.t}>${selectedItem.PRECIO_LISTA3}</Text></Text>
//                 {/* <Text style={styles.t} >Ultima Actualizacion: {selectedItem.FECHAACTPRECIOS}</Text> */}
            
//                 <Text style={styles.t}>
//                   Ultima Actualizacion: {selectedItem.FECHAACTPRECIOS ? 
//                     new Date(selectedItem.FECHAACTPRECIOS).toLocaleString('es-ES', {
//                       dateStyle: 'short'
//                     }) : 
//                     "N/A"}
//                 </Text>


//                 </View>
//                 <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",paddingTop: 10 }}>
//                   <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
//                   <Text  style={styles.t2} >
//                     Almacen Salon de Ventas: 
//                   </Text>
//                   <Text  style={styles.t2} >
//                     -
//                   </Text>
//                   </View>
//                   <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
//                   <Text  style={styles.t2} >Stock:  </Text>
//                   <Text  style={styles.t2} >{selectedItem.STOCK_ACTUAL || "N/A"}</Text>
//                   </View>
//                   <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
//                   <Text  style={styles.t2}> Unidad: </Text>
//                   <Text style={styles.t2}> {selectedItem.UNIDA || "N/A"}</Text>
//                   </View>
//                 </View>
//               </> 
//             ) : (
//               <Text style={styles.t} >No hay información disponible</Text>
//             )}
//           </View>

          
           
//           </View>
//         </Modal>
//     </View>
//   );
// }



import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../styles/Descrip.styles';
import Toast from 'react-native-toast-message';

export function Descrip() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const [vista, setVista] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para manejar el indicador de carga

  // Función para buscar datos del backend
  const fetchData = useCallback(async () => {
    const busquedaXnombre = inputValue.trim();
    if (!busquedaXnombre) {
      Toast.show({
        type: 'info',
        text1: 'Ingrese un término de búsqueda válido',
      });
      setResults([]);
      setVista(false);
      return;
    }

    setLoading(true); // Mostrar indicador de carga
    try {
      const response = await fetch(`http://192.168.10.118:3001/buscarNombre/${busquedaXnombre}`);
      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.length > 0) {
        setResults(data);
        setVista(true);
        Toast.show({
          type: 'success',
          text1: 'Datos encontrados con éxito',
        });
      } else {
        setResults([]);
        setVista(false);
        Toast.show({
          type: 'info',
          text1: 'No se encontraron coincidencias',
        });
      }
    } catch (error) {
      console.error('Error al obtener los datos desde el servidor:', error);
      setResults([]);
      setVista(false);
      Toast.show({
        type: 'error',
        text1: 'Error al obtener los datos desde el servidor',
      });
    } finally {
      setLoading(false); // Ocultar indicador de carga
    }
  }, [inputValue]);

  // Función para manejar la selección de un elemento
  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon name="qrcode-scan" size={50} color="#003366" />
          <Text style={styles.logoText}>InfoLab</Text>
        </View>

        <Text style={{ fontSize: 16, marginTop: 20 }}>Buscar Artículo por Nombre</Text>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Ingrese Descripción"
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.inputt}
          />
          <TouchableOpacity onPress={fetchData}>
            <Icon name="magnify" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.linea}></View>
      </View>

      {/* Mostrar resultados */}
      <View style={styles.principalVista}>
        {loading ? (
          <ActivityIndicator size="large" color="#003366" style={{ marginTop: 20 }} />
        ) : vista && results.length > 0 ? (
          <FlatList
            data={results}
            keyExtractor={(item) => item.codigoBarra}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.resultItem} onPress={() => handleItemPress(item)}>
                <Text style={styles.resultText} numberOfLines={1}>
                  {item.DESCRIPCION || 'Sin descripción'}
                </Text>
                <Icon name="arrow-right" size={20} color="grey" />
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Icon name="reload" size={30} color="grey" />
            <Text style={{ fontSize: 16, color: 'grey', marginLeft: 10 }}>No hay resultados para mostrar</Text>
          </View>
        )}
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <View>
            
            
            {selectedItem ? (
              <>
              <Text style={styles.modalTitle}>{selectedItem.DESCRIPCION}</Text>
              <Text style={styles.tDescription}>Codigo: {selectedItem.ARTICULO}</Text>
                <View>
                  
                  <Text style={styles.tt}>
                    Precio de Costo: <Text style={styles.t}>${selectedItem.PRECIO_DE_COSTO}</Text>
                  </Text>
                  <Text style={styles.tt}>
                    Precio Lista 1: <Text style={styles.t}>${selectedItem.PRECIO_LISTA1}</Text>
                  </Text>
                  <Text style={styles.tt}>
                    Precio Lista 2: <Text style={styles.t}>${selectedItem.PRECIO_LISTA2}</Text>
                  </Text>
                  <Text style={styles.tt}>
                    Precio Lista 3: <Text style={styles.t}>${selectedItem.PRECIO_LISTA3}</Text>
                  </Text>
                  <Text style={styles.t}>
                    Última Actualización:{' '}
                    {selectedItem.FECHAACTPRECIOS
                      ? new Date(selectedItem.FECHAACTPRECIOS).toLocaleString('es-ES', {
                          dateStyle: 'short'
                        })
                      : 'N/A'}
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",paddingTop: 10 }}>
                  <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                  <Text  style={styles.t2} >
                    Almacen Salon de Ventas: 
                  </Text>
                  <Text  style={styles.t2} >
                    -
                  </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                  <Text  style={styles.t2} >Stock:  </Text>
                  <Text  style={styles.t2} >{selectedItem.STOCK_ACTUAL || "N/A"}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                  <Text  style={styles.t2}> Unidad: </Text>
                  <Text style={styles.t2}> {selectedItem.UNID || "N/A"}</Text>
                  </View>
                </View>
              </>
            ) : (
              <Text style={styles.t}>No hay información disponible</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}