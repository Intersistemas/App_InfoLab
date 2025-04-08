
// //---------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../../../styles/CodBarra.styles'; // Importa los estilos
// import Toast from 'react-native-toast-message';


// export function CodBarra() {
//   const [inputValue, setInputValue] = useState(''); // Código ingresado manualmente (por ahora lo dejamos sin uso)
//   const [results, setResults] = useState([]); // Almaceno el resultado de la búsqueda

//   const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
//   const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el artículo seleccionado

  



//   // Esta función se ejecuta al presionar el botón "ESCANEAR"

//   const fetchData = async () => {
//     const codigoEjemplo = inputValue; // Aquí puedes usar el valor ingresado en el input
//     try {
     
//       const response = await fetch(`http://192.168.1.109:3001/buscar/${codigoEjemplo}`);
//       const data = await response.json();
//       setResults(data); // Guardo los datos que recibo del backend
//       console.log("Datos recibidos del backend:", data); // Muestro en consola
//       if (data.length > 0) {
//       Toast.show({
//         type: 'success',
//         text1: 'Dato encontrado con éxito',
    
//       });
//       } else {
//         console.log("No hay coincidencias en la base de datos");
//         Toast.show({
//           type: 'info',
//           text1: 'No se encontraron coincidencias',
//         })
//       }
     
//     } catch (error) {
//       console.error('Error al obtener los datos desde el servidor:', error);
//       Toast.show({
//         type: 'error',
//         text1: 'Error al obtener los datos desde el servidor',
//       });
//     }
//   }

// //Funcion que se ejecuta para mostrar mi modal

//   const handleItemPress = (item) => {
//     setSelectedItem(item); // Almaceno el artículo seleccionado
//     setModalVisible(true); // Muestro el modal
//   }










//   return (
//     <View style={styles.containerPrincipal}>
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>
//           <Icon name="qrcode-scan" size={50} color="#003366" />
//           <Text style={styles.logoText}>InfoLab</Text>
//         </View>
  
//         <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>
//           Buscar Artículo por Código de Barra
//         </Text>
  
//         {/* Input que en el futuro va a ser usado cuando se active el escáner */}
//         <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//           <TextInput
//             placeholder="Codigo del producto"
//             value={inputValue}
//             onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto ingresado
//             style={styles.inputt}
//             width="60%" // Ajusta el ancho del TextInput
//             textAlign='center' // Centra el texto dentro del TextInput

//           />
//           <TouchableOpacity onPress={fetchData}>
//             <Icon name="magnify" size={25} color="black" />
//           </TouchableOpacity>
//         </View>
  
//         <View style={styles.containerBtn}>
//           <TouchableOpacity style={styles.button} >
//             <Text style={styles.buttonText}>ESCANEAR</Text>
//           </TouchableOpacity>
//         </View>
  
//         <FlatList
//           data={results}
//           keyExtractor={item => item.codigoBarra}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.resultItem} onPress={() => handleItemPress(item) }>
//               <Text style={styles.resultText}>
//                 {item.DESCRIPCION}
//               </Text>
//               <Text>
//               <Icon name="arrow-right" size={20} color="grey" />
//               </Text>

//             </TouchableOpacity>
//           )}
//         />
  
//         {/* Modal, que al seleccionar mi dato mostrado me muestra los detalles */}
//         <Modal visible={modalVisible} animationType="slide" transparent={true}>
          
//           <View style={styles.modalContainer}>
//           <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>X</Text>
//             </TouchableOpacity>
//           <View>
            
          
//             {selectedItem ? (
//               <>
//               <Text  style={styles.modalTitle} >{selectedItem.DESCRIPCION}</Text>
//               <Text  style={styles.tDescription} >Codigo: {selectedItem.ARTICULO}</Text>
//                 <View>
                
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
//                   <Text style={styles.t2}> {selectedItem.UNID || "N/A"}</Text>
//                   </View>
//                 </View>
//               </> 
//             ) : (
//               // <Text style={styles.t} >No hay información disponible</Text>
//                     <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
//                       <Icon name="reload" size={30} color="grey" />
//                       <Text style={{ fontSize: 16, color: "grey", marginLeft: 10 }}>No hay resultados para mostrar</Text>
//                     </View>
//             )}
//           </View>

          
           
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );

// }


// Importación de React y hooks
import React, { useState, useEffect } from 'react';
// Componentes nativos de React Native
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, Alert, Animated, Easing } from 'react-native';
// Iconos de MaterialCommunityIcons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Importación de estilos personalizados
import styles from '../../../styles/CodBarra.styles';
// Librería para mostrar mensajes emergentes (toast)
import Toast from 'react-native-toast-message';
// Componentes para manejar la cámara en Expo SDK 52
import { CameraView, useCameraPermissions } from 'expo-camera';

export function CodBarra() {
  // Estados para el formulario y los datos
  const [inputValue, setInputValue] = useState(''); // Código ingresado o escaneado
  const [results, setResults] = useState([]); // Lista de resultados
  const [modalVisible, setModalVisible] = useState(false); // Mostrar/ocultar modal
  const [selectedItem, setSelectedItem] = useState(null); // Ítem seleccionado
  const [cameraVisible, setCameraVisible] = useState(false); // Mostrar/ocultar cámara
  const [permission, requestPermission] = useCameraPermissions(); // Permisos de cámara
  const lineAnim = useState(new Animated.Value(0))[0]; // Valor animado para la línea roja

  // Solicita permisos de cámara al iniciar
  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  // Maneja la animación de la línea del escáner
  useEffect(() => {
    if (cameraVisible) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(lineAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(lineAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      lineAnim.stopAnimation();
    }
  }, [cameraVisible]);

  // Consulta al backend para buscar el producto
  const fetchData = async (codigoManual) => {
    const codigoEjemplo = codigoManual || inputValue;
    try {
      const response = await fetch(`http://192.168.10.118:3001/buscar/${codigoEjemplo}`);
      const data = await response.json();
      setResults(data);
      if (data.length > 0) {
        Toast.show({ type: 'success', text1: 'Dato encontrado con éxito' });
      } else {
        Toast.show({ type: 'info', text1: 'No se encontraron coincidencias' });
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      Toast.show({ type: 'error', text1: 'Error al obtener los datos desde el servidor' });
    }
  };

  // Muestra el modal con el ítem seleccionado
  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // Al escanear un código con la cámara
  const handleBarCodeScanned = ({ type, data }) => {
    setCameraVisible(false);
    setInputValue(data);
    fetchData(data);
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        {/* Encabezado con icono y título */}
        <View style={styles.logoContainer}>
          <Icon name="qrcode-scan" size={50} color="#003366" />
          <Text style={styles.logoText}>InfoLab</Text>
        </View>

        {/* Título de la pantalla */}
        <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>
          Buscar Artículo por Código de Barra
        </Text>

        {/* Campo de texto y botón de búsqueda */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Código del producto"
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            style={styles.inputt}
            width="60%"
            textAlign='center'
          />
          <TouchableOpacity onPress={() => fetchData()}>
            <Icon name="magnify" size={25} color="black" />
          </TouchableOpacity>
        </View>

        {/* Botón para escanear con cámara */}
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (!permission?.granted) {
                Alert.alert("Permiso denegado", "No tenés permiso para usar la cámara.");
              } else {
                setCameraVisible(true);
              }
            }}
          >
            <Text style={styles.buttonText}>ESCANEAR</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de resultados */}
        <FlatList
          data={results}
          keyExtractor={item => item.codigoBarra}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.resultItem} onPress={() => handleItemPress(item)}>
              <Text style={styles.resultText}>{item.DESCRIPCION}</Text>
              <Icon name="arrow-right" size={20} color="grey" />
            </TouchableOpacity>
          )}
        />

        {/* Modal de detalle del producto */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {selectedItem ? (
              <>
                <Text style={styles.modalTitle}>{selectedItem.DESCRIPCION}</Text>
                <Text style={styles.tDescription}>Código: {selectedItem.ARTICULO}</Text>
                <Text style={styles.tt}>Precio Lista 1: <Text style={styles.t}>${selectedItem.PRECIO_LISTA1}</Text></Text>
                <Text style={styles.tt}>Precio Lista 2: <Text style={styles.t}>${selectedItem.PRECIO_LISTA2}</Text></Text>
                <Text style={styles.tt}>Precio Lista 3: <Text style={styles.t}>${selectedItem.PRECIO_LISTA3}</Text></Text>
                <Text style={styles.t}>
                  Última Actualización: {selectedItem.FECHAACTPRECIOS ?
                    new Date(selectedItem.FECHAACTPRECIOS).toLocaleString('es-ES', { dateStyle: 'short' }) :
                    "N/A"}
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 10 }}>
                  <View><Text style={styles.t2}>Almacén:</Text><Text style={styles.t2}>-</Text></View>
                  <View><Text style={styles.t2}>Stock:</Text><Text style={styles.t2}>{selectedItem.STOCK_ACTUAL || "N/A"}</Text></View>
                  <View><Text style={styles.t2}>Unidad:</Text><Text style={styles.t2}>{selectedItem.UNID || "N/A"}</Text></View>
                </View>
              </>
            ) : (
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Icon name="reload" size={30} color="grey" />
                <Text style={{ fontSize: 16, color: "grey", marginLeft: 10 }}>No hay resultados para mostrar</Text>
              </View>
            )}
          </View>
        </Modal>

        {/* Vista personalizada del escáner */}
        {cameraVisible && (
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
            {/* Cámara activa */}
            <CameraView
              onBarcodeScanned={handleBarCodeScanned}
              style={{ flex: 1 }}
              barcodeScannerSettings={{
                barcodeTypes: ['code128', 'ean13', 'ean8', 'qr'],
              }}
            />

            {/* Fondo oscuro sobre la cámara */}
            <View style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)'
            }} />

            {/* Marco del escáner */}
            <View style={{
              position: 'absolute',
              top: '35%',
              left: '10%',
              right: '10%',
              width: '80%',
              height: 150,
              borderWidth: 2,
              borderColor: 'red',
              backgroundColor: 'transparent',
              zIndex: 1000,
              overflow: 'hidden'
            }}>
              {/* Línea roja animada */}
              <Animated.View
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,

                  backgroundColor: 'red',
                  transform: [{
                    translateY: lineAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 200],
                    }),
                  }],
                }}
              />
            </View>

            {/* Botón para cerrar cámara */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 40,
                right: 20,
                backgroundColor: 'rgba(0,0,0,0.6)',
                padding: 10,
                borderRadius: 20,
                zIndex: 1000
              }}
              onPress={() => setCameraVisible(false)}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}