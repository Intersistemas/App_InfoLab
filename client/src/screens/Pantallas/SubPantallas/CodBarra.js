

// Importación de React y hooks
import React, { useState, useEffect } from 'react';
// Componentes nativos de React Native
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, Alert, Animated, Easing, Image} from 'react-native';
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
  // const fetchData = async (codigoManual) => {
  //   const codigoEjemplo = codigoManual || inputValue;
  //   try {
  //     const response = await fetch(`http://192.168.0.46:3001/buscar/${codigoEjemplo}`);
  //     const data = await response.json();
  //     setResults(data);
  //     if (data.length > 0) {
  //       Toast.show({ type: 'success', text1: 'Dato encontrado con éxito' });
  //     } else {
  //       Toast.show({ type: 'info', text1: 'No se encontraron coincidencias' });
  //     }
  //   } catch (error) {
  //     console.error('Error al obtener los datos:', error);
  //     Toast.show({ type: 'error', text1: 'Error al obtener los datos desde el servidor' });
  //   }
  // };

  const fetchData = async (codigoManual) => {
    const codigoEjemplo = codigoManual || inputValue;
    try {
      const response = await fetch(`http://192.168.0.46:3001/buscar/${codigoEjemplo}`);
      const data = await response.json();
  
      // Validación: si data tiene "articulo"
      if (data.articulo) {
        // Ponemos el artículo como único ítem en la lista
        setResults([{
          ...data.articulo,
          stock: data.stock // le pasamos también el stock relacionado
        }]);
  
        Toast.show({ type: 'success', text1: 'Dato encontrado con éxito' });
      } else {
        setResults([]);
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
          <Image source={require('../../../../assets/logoP.png')} style={{width: 100, height: 100}} />
          {/* <Text style={styles.logoText}>InfoLab</Text> */}
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
                {/* <View style={{ flexDirection: "column", justifyContent: "center", paddingTop: 10 }}>
                  <View><Text style={styles.t2}>Almacén:</Text><Text style={styles.t2}>{"N/A"}</Text></View>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}><Text style={styles.t2}>Stock:</Text><Text style={styles.t2}>{selectedItem.STOCK_ACTUAL || "N/A"}</Text></View>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}><Text style={styles.t2}>Unidad:</Text><Text style={styles.t2}>{selectedItem.UNID || "N/A"}</Text></View>
                </View> */}
                {selectedItem.stock && selectedItem.stock.length > 0 ? (
                  selectedItem.stock.map((alm, index) => (
                    <View key={index} style={{ marginTop: 5 }}>
                      {/* <Text style={styles.t2}>Almacén: {alm.DESCRIPCION_ALMACEN}</Text> */}
                      <View><Text style={styles.t2}>Almacén:</Text><Text style={styles.t2}> {alm.DESCRIPCION_ALMACEN || "N/A"}</Text></View>
                      <Text style={styles.t2}>Stock: {alm.STOCK_ACTUAL || "N/A"}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.t2}>Stock no disponible</Text>
                )}

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
              style={{ flex: 1, width: '100%', height: '100%' }}
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

