// Acá configuro los datos de conexión a la base de datos SQL Server
// Uso dotenv por si más adelante quiero manejar las variables de forma segura
const sql = require('mssql');

const config = {
    user: 'sa', // cambiar por el usuario real
    password: 'Jona2024*', // cambiar por la contraseña real
    server: '186.123.181.61', // o la IP/servidor donde esté la base
    database: 'db_superfigg', // nombre real de la base
    options: {
        encrypt: false, // si uso Azure poner en true
        trustServerCertificate: true, // útil para evitar problemas de certificado
    }
};

module.exports = {
    sql,
    config
};
