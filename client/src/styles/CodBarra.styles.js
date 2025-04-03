import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPrincipal: {
    width: "100%", 
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    
  },
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
 
    
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20
    
},

containerBtn:{
    width: "50%",
    height: 40,
    marginTop: 5,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#003366", // Azul oscuro
    borderRadius: 50,
    marginTop: 20
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
resultItem: {
  width: "90%",
  height: "auto",
  marginTop: 50,
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 5,
  margin: 10,

  

  
},
resultText: {
  fontSize: 16,
  textAlign: "center",
  fontWeight: 'bold', // Estilo para negrita
  width: "70%",
  padding: 20,



},
resultText1: {
  fontSize: 16,
  padding: 20,
  width: "30%",
  textAlign: "center",
  fontWeight: 'bold', // Estilo para negrita

 

},

//---------------------------------------------------
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
  color: "white", // Azul oscuro
  marginTop: 10,
  marginBottom: 20,
  textAlign: "center",
  fontSize: 20,
},
closeButton: {
  // Estilo del botón de cerrar
  //boton flotante en la parte derecha superior
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'red', // Color de fondo del botón
  borderRadius: "50%",
  padding: 10,
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