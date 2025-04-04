// Requiero los módulos necesarios para levantar el servidor
const express = require('express');
const app = express();

// Traigo la configuración de conexión a la base desde otro archivo
const { sql, config } = require('./dbConfig');

// Defino el puerto donde se va a ejecutar el backend
const PORT = 3001;

// Middleware para poder trabajar con datos en formato JSON
app.use(express.json());

// Middleware extra que necesito para permitir peticiones desde mi app frontend
const cors = require('cors');
app.use(cors()); // Habilito CORS para que mi frontend pueda comunicarse con este backend

//-------------------------------------------º--------------------------------º---------------------------------
// ------------------------------Rutas del servidor-------------------------------------------------------------
//-------------------------------------------º--------------------------------º---------------------------------

//>>>>>>>>>>>>>>>>>>>>>Ruta para obtener todos los artículos<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/articulos', async (req, res) => {
    try {
        // Me conecto a la base de datos SQL Server
        const pool = await sql.connect(config);

        // Realizo la consulta para obtener todos los artículos de la tabla fact0007
        const resultado = await pool.request().query('SELECT * FROM FACT0007');

        // Devuelvo los resultados al cliente en formato JSON
        res.status(200).json(resultado.recordset);

    } catch (error) {
        // Si algo falla durante la consulta, muestro el error y devuelvo un mensaje al cliente
        console.error('Error al obtener los artículos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//>>>>>>>>>>>>>>>>>>>>>Ruta para buscar un artículo por su código o código de barras<<<<<<<<<<<<<<<<<<<<<<<<<
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

//>>>>>>>>>>>>>>>>>>>>>Ruta para buscar un artículo por su nombre<<<<<<<<<<<<<<<<<<<<<<<<<
app.get('/buscarNombre/:nombre', async (req, res) => {
    // Guardo el nombre que viene como parámetro en la URL
    const nombreIngresado = req.params.nombre;

    try {
        // Me conecto a la base de datos SQL Server
        const pool = await sql.connect(config);

        // Busco el nombre ingresado en la tabla fact0007 usando el campo "articulo"
        let resultado = await pool.request()
            .input('nombre', sql.VarChar, `${nombreIngresado}%`)
            .query('SELECT * FROM fact0007 WHERE descripcion LIKE @nombre');

        // Devuelvo al cliente los datos encontrados
        res.status(200).json(resultado.recordset);

    } catch (error) {
        // Si algo falla durante la consulta, muestro el error y devuelvo un mensaje al cliente
        console.error('Error al buscar el nombre:', error);
        res.status(500).send('Error interno del servidor');
    }
});
//>>>>>>>>>>>>>>>>>>>>>>Ruta para Actualizar un artículo<<<<<<<<<<<<<<<<<<<<<<<<<
app.put('/actualizarArticulo/:codigo', async (req, res) => {
    // Obtengo el código del artículo a actualizar desde los parámetros de la solicitud
    const codigoArticulo = req.params.codigo;
    // Obtengo los nuevos datos del artículo desde el cuerpo de la solicitud
    const nuevoArticulo = req.body;

    try {
        // Me conecto a la base de datos SQL Server
        const pool = await sql.connect(config);

        // Realizo la actualización del artículo en la tabla fact0007 usando el código proporcionado
        await pool.request()
            .input('codigo', sql.VarChar, codigoArticulo)
            .input('descripcion', sql.VarChar, nuevoArticulo.descripcion)
            .input('precio', sql.Float, nuevoArticulo.precio)
            .query('UPDATE fact0007 SET descripcion = @descripcion, precio = @precio WHERE articulo = @codigo');

        // Devuelvo una respuesta exitosa al cliente
        res.status(200).json({ mensaje: 'Artículo actualizado exitosamente' });

    } catch (error) {
        // Si algo falla durante la actualización, muestro el error y devuelvo un mensaje al cliente
        console.error('Error al actualizar el artículo:', error);
        res.status(500).send('Error interno del servidor');
    }
});
//>>>>>>>>>>>>>>>>>>>>>>>Ruta para eliminar un artículo<<<<<<<<<<<<<<<<<<<<<<<<<
app.delete('/eliminarArticulo/:codigo', async (req, res) => {
    // Obtengo el código del artículo a eliminar desde los parámetros de la solicitud
    const codigoArticulo = req.params.codigo;

    try {
        // Me conecto a la base de datos SQL Server
        const pool = await sql.connect(config);

        // Realizo la eliminación del artículo en la tabla fact0007 usando el código proporcionado
        await pool.request()
            .input('codigo', sql.VarChar, codigoArticulo)
            .query('DELETE FROM fact0007 WHERE articulo = @codigo');

        // Devuelvo una respuesta exitosa al cliente
        res.status(200).json({ mensaje: 'Artículo eliminado exitosamente' });

    } catch (error) {
        // Si algo falla durante la eliminación, muestro el error y devuelvo un mensaje al cliente
        console.error('Error al eliminar el artículo:', error);
        res.status(500).send('Error interno del servidor');
    }
});
//>>>>>>>>>>>>>>>>>>>>>>>Ruta para agregar un nuevo artículo<<<<<<<<<<<<<<<<<<<<<<<<<
app.post('/agregarArticulo', async (req, res) => {
    // Obtengo el nuevo artículo desde el cuerpo de la solicitud
    const nuevoArticulo = req.body;

    try {
        // Me conecto a la base de datos SQL Server
        const pool = await sql.connect(config);

        // Realizo la inserción del nuevo artículo en la tabla fact0007
        await pool.request()
            .input('articulo', sql.VarChar, nuevoArticulo.articulo)
            .input('descripcion', sql.VarChar, nuevoArticulo.descripcion)
            .input('precio', sql.Float, nuevoArticulo.precio)
            .query('INSERT INTO fact0007 (articulo, descripcion, precio) VALUES (@articulo, @descripcion, @precio)');

        // Devuelvo una respuesta exitosa al cliente
        res.status(201).json({ mensaje: 'Artículo agregado exitosamente' });

    } catch (error) {
        // Si algo falla durante la inserción, muestro el error y devuelvo un mensaje al cliente
        console.error('Error al agregar el artículo:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Arranco el servidor y lo pongo a escuchar en el puerto definido
// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });


//realizo esto para que el servidor escuche en todas las interfaces de red disponibles
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});


//La ruta a la cual tengo que apuntar es  Metodo GET => "http://localhost:3001/articulos"
//La ruta a la cual tengo que apuntar es => Metodo GET => "http://localhost:3001/buscar/:codigo"
//La ruta a la cual tengo que apuntar es => Metodo GET => "http://localhost:3001/buscarNombre/:nombre"
//La ruta a la cual tengo que apuntar es => Metodo PUT => "http://localhost:3001/actualizarArticulo/:codigo"
//La ruta a la cual tengo que apuntar es => Metodo DELETE => "http://localhost:3001/eliminarArticulo/:codigo"
//La ruta a la cual tengo que apuntar es => Metodod POST => "http://localhost:3001/agregarArticulo"