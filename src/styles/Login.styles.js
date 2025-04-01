import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPrincipal: {
    width: "100%", 
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
 
    
  },
  input:{
    width: "90%",
    height: 60,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    justifyContent: "center",
    borderRadius: 10
    
  },
  logoContainer: {
    width: "100%",
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

containerBtn:{
  width: "80%",
  height: 60,
  marginTop: 30,
  borderWidth: 1,
  justifyContent: "center",
  borderRadius: 10,
  backgroundColor: "#003366", // Azul oscuro
},
containerInp: {
  width: "100%",
  display: "flex",
  flexDirection: "coumn",
  alignItems: "center",
  marginTop: 20,

  
},
});


export default styles;