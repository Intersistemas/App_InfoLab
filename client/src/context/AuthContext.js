// import { createContext } from "react";

// export const AuthContext = createContext({
//   isAuthenticated: false,
//   setIsAuthenticated: () => {},
// });


import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Necesario para manejar la sesión local

// 1). Creamos el contexto `AuthContext` con valores predeterminados.
export const AuthContext = createContext({
  isAuthenticated: false,  // Estado de autenticación (false = no autenticado)
  setIsAuthenticated: () => {}, // Función para cambiar la autenticación
  logout: () => {}, // Agregamos la función para cerrar sesión
  formData: {},  // Objeto que almacena los datos del formulario
  updateFormData: () => {}, // Función para actualizar `formData`
});

// 2). Creamos el `AuthProvider`, que envuelve la app y gestiona los estados globales.
export const AuthProvider = ({ children }) => {
  
  // 3). Estado para manejar la autenticación del usuario.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 4). Estado para almacenar los datos del formulario.
  const [formData, setFormData] = useState({
    //estado para manejar la carga de datos de seccionales, comienza en false,
    //para que se cargue una sola vez pero unas vez cargado se cambia a true

    isDataLoaded: false,
    isAuthenticated: false, // Estado de autenticación (false = no autenticado)
   
    
    
  });

  // 5). Función para actualizar `formData` sin perder los datos anteriores.
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,  // Mantiene los valores previos
      ...newData,   // Agrega los nuevos valores
    }));
  };

  // 6). Función para cerrar sesión globalmente
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken"); // Eliminamos el token almacenado
      setIsAuthenticated(false); // Cambiamos el estado global de autenticación
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  //funcion para resetear todos los valores

  const resetFormData = () => {
    setFormData({
      isDataLoaded: false,
      isAuthenticated: false, // Estado de autenticación (false = no autenticado)
     
      

    });
  };

  // 7). Retornamos el `AuthContext.Provider`, que provee el contexto a toda la app.
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,  // Estado de autenticación
        setIsAuthenticated, // Función para cambiar la autenticación
        logout, // Función para cerrar sesión
        formData,  // Datos del formulario
        updateFormData,  // Función para actualizar `formData`
        resetFormData, // Función para resetear todos los valores
      }}
    >
      {children} {/* Renderiza los componentes hijos dentro del contexto */}
    </AuthContext.Provider>
  );
};

