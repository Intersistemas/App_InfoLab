import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  containerPrincipal: {
    width: "100%", 
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  container: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
 
    
  },
  input:{
    width: "90%",
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#007aff',
    justifyContent: "center",
    borderRadius: 10
    
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    
},
logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary, // Azul oscuro
},
  // text:{
  //   textAlign: "center"
  // }
  containerBtn:{
    width: "50%",
    height: 40,
    marginTop: 30,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#003366", // Azul oscuro
    borderRadius: 50,
    
  },
  buttonText: {
    color: 'white', // Color del texto
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;