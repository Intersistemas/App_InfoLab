import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
 
    
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    
},

containerBtn:{
    width: "100%",
    height: 40,
    marginTop: 5,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#003366", // Azul oscuro
    borderRadius: 50
  },

  buttonText: {
    color: 'white', // Color del texto
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#003366", // Azul oscuro
    marginTop: 5,
    alignItems: 'center',
    
},





principalVista:{
  width: "100%",
  height: "400",
},
resultItem: {
  width: "100%",
  height: "80",

  borderBottomWidth: 1,
  borderBottomColor: 'black',

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,

  
},
inputt:{
  width: 140,
},
linea:{
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  width: 180,
  top: -10
},
resultText: {
  fontSize: 16,
  padding: 3,
  textAlign: "center",
  alignItems: "center",
  fontWeight: 'bold', // Estilo para negrita

 
  

},
resultText1: {
  fontSize: 14,
  padding: 3,
  textAlign: "center",
 

},
emptyText: {
  fontSize: 14,
  color: '#999',
  textAlign: 'center',
  marginTop: 10,
},
//---------------------------------------------------MODAL------------------------------------------------------

modalContainer: {
  width: "80%",
  height: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.93)", // Fondo semitransparente
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  alignSelf: "center",
  top: "20%",
  borderRadius: 10,

  boxShadow:  "0px 5px 10px 10px"   //sombra
  

  

},

t: {
  color: "white", // Azul oscuro
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 5,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  alignSelf: "center",

},
tDescription: {
  color: "white", //color amarillo 
  fontSize: 16,
  marginBottom: 5,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  alignSelf: "center",
  marginBottom: 20,
  
},
tt: {

    color: "white", // Azul oscuro
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
},

t2: {
  color: "white", // Azul oscuro
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  alignSelf: "center",
  fontSize: 12,

},
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: "yellow", // Azul oscuro
  marginTop: 10,
  marginBottom: 5,
  textAlign: "center",
  textDecorationLine : "underline",

},
closeButton: {

  // Estilo del botón de cerrar
  //boton flotante en la parte derecha superior
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'red', // Color de fondo del botón
  borderRadius: "20%",
  padding: 5,
  elevation: 5, // Sombra en Android

},
closeButtonText: {
  color: 'white', // Color del texto
  backgroundColor: "red", // Azul oscuro
  width: "auto",
  height: "auto",
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},


});


export default styles;