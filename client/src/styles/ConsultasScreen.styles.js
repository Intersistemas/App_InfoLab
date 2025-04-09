import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#003366", // Azul oscuro
    marginTop: 10,
    alignItems: 'center',
    
},
logoContainer: {
  width: "100%",
  marginBottom: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  
},
containerBtn:{
  width: "50%",
  height: 40,
  marginTop: 30,
  borderWidth: 1,
  justifyContent: "center",
  borderRadius: 10,
  backgroundColor: "#003366", // Azul oscuro
  borderRadius: 10,
  borderColor: "#f79b52", // Azul oscuro
  //tamaño del borde
  borderWidth: 2,

  
},
buttonText: {
  color: 'white', // Color del texto
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},



});

export default styles;