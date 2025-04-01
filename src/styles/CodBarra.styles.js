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
  width: "100%",
  height: "80",
  // borderBottomWidth: 1,
  // borderBottomColor: 'black',
  marginTop: 50

  
},
resultText: {
  fontSize: 16,
  padding: 3,
  textAlign: "center",
  fontWeight: 'bold', // Estilo para negrita

},
});


export default styles;