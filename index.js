const express = require('express');

const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/recursos', require('./routes/recurso'));
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/empleado', require('./routes/empleado'));
app.use('/api/departamento', require('./routes/departamento'))
app.use('/api/gama', require('./routes/gama'))

app.use('/api/marca', require('./routes/marca'))

app.use('/', require('./routes/empleado'));


//app.use('/api/privilegio', require('./routes/privilegio'));
//app.use('/api/nombreRol', require('./routes/nombreRol'));

//app.get('/', (req, res) => {
   // res.send('Hola Mundo')
//})




app.listen(4000, () => {
    console.log('EL SERVIDOR FUNCIONA!')
})