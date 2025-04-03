// Requiero los módulos necesarios para levantar el servidor
const express = require('express');
const app = express();

// Traigo la configuración de conexión a la base desde otro archivo
const { sql, config } = require('./dbConfig');

// Defino el puerto donde se va a ejecutar el backend
const PORT = 3000;

// Middleware para poder trabajar con datos en formato JSON
app.use(express.json());

// Middleware extra que necesito para permitir peticiones desde mi app frontend
const cors = require('cors');
app.use(cors()); // Habilito CORS para que mi frontend pueda comunicarse con este backend

// Ruta GET que recibe el código desde el frontend
app.get('/buscar/:codigo', async (req, res) => {
    // Guardo el código que viene como parámetro en la URL
    const codigoIngresado = req.params.codigo;

    try {
        // Me conecto a la base de datos SQL Server
        const pool = await sql.connect(config);

        // Primero intento buscar directamente en la tabla fact0007 usando el campo "articulo"
        let resultado = await pool.request()
            .input('codigo', sql.VarChar, codigoIngresado)
            .query('SELECT * FROM fact0007 WHERE articulo = @codigo');

        // Si encuentro resultados en esa tabla, los devuelvo directamente al cliente
        if (resultado.recordset.length > 0) {
            return res.status(200).json(resultado.recordset);
        }

        // Si no encontré nada, busco en la tabla fact0007_cb usando el campo "CodeBar"
        let resultadoCB = await pool.request()
            .input('codigo', sql.VarChar, codigoIngresado)
            .query('SELECT * FROM fact0007_cb WHERE CodeBar = @codigo');

        // Si lo encuentro en la segunda tabla, obtengo el código relacionado
        if (resultadoCB.recordset.length > 0) {
            const codigoRelacionado = resultadoCB.recordset[0].Articulo;

            // Ahora uso ese código relacionado para volver a buscar en la tabla principal fact0007
            let resultadoFinal = await pool.request()
                .input('codigo', sql.VarChar, codigoRelacionado)
                .query('SELECT * FROM fact0007 WHERE articulo = @codigo');

            // Devuelvo al cliente los datos finales encontrados
            return res.status(200).json(resultadoFinal.recordset);
        }

        // Si no encontré nada en ninguna de las dos tablas, aviso que no hay coincidencias
        res.status(404).json({ mensaje: 'Código no encontrado en ninguna tabla' });

    } catch (error) {
        // Si algo falla durante la consulta, muestro el error y devuelvo un mensaje al cliente
        console.error('Error al buscar el código:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Arranco el servidor y lo pongo a escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
