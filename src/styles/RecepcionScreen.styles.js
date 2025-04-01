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
  width: "40%",
  height: 40,
  marginTop: 10,
  padding: 10,
  margin: 10,
  borderWidth: 1,
  justifyContent: "center",
  borderRadius: 5,
  backgroundColor: "#003366", // Azul oscuro
  borderRadius: 10,
},
buttonText: {
  color: 'white', // Color del texto
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},






/////////////////////////////


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

});

export default styles;