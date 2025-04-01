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
    height: "30%",
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
    marginTop: 100,
    marginBottom: 20,
    
},
logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary, // Azul oscuro
},




container2: {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
},

picker: {
  height: 50,
  width: 200,
},
selected: {
  marginTop: 20,
  fontSize: 16,
  color: 'blue',
},
  // text:{
  //   textAlign: "center"
  // }
});

export default styles;