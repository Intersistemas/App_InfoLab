import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    containerPrin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background, // Usando el color de fondo
        
       
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.primary, // Azul oscuro
        padding: 20,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
        height: 140,
        
    },
    cardText: {
        color: colors.white, // Blanco
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    version: {
        marginTop: 20,
        fontSize: 14,
        color: colors.gray, // Gris
    },
});

export default styles;
