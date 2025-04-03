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
}
});


export default styles;