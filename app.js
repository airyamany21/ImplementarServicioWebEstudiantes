const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
// const cors = require('cors')
const path = require('path');

// const router = require('./index.js');

// app.use(cors())
// app.use(router);
app.use(bodyParser.json());
app.set('index',path.join(__dirname,'..routes/index'));

app.listen(port, ()=> {
    console.log("Servidor escuchando por el puerto:",port);
}).on("error", err => {
    console.log("Error al inicar el servidor", err);
});
// // let db = require('./models/database/db');
// // const Sequelize = require('sequelize');
//
// const estudiantes = {
//     findById,
//     findByMatricula,
//     findAll,
// }=require('./estudiantesModel.js');
//
// const express = require('express');
// const app = express();
// const port = 4000;
// // const router = require('./routes/index');
//
// app.get('/estudiantes',(req,res) => {
//     res.send(findAll());
//     console.log(req);
//
// });
//
// app.get('/',(req,res) => {
//     res.send('Acceder al API /estudiantes');
// });
//
// app.get('/estudiantes', (req,res) => {
//  let registros = estudiantes.findAll();
//  res.status(200).json(resgistros);
// });
//
// // app.get('/estudiantes/:id', (req,res) => {
// //     let registros =estudiantes.findById(req.params.id);
// //     res.status(200).json(resgistros);
// // });
//
// app.post('/estudiantes', (req,res) => {
//     res.send('Creando un nuevo estudiante');
// });
//
// app.put('/estudiantes/:id', (req,res) => {
//     res.send('Modificando el registro del estudiante ' + req.params.id);
// });
//
// app.patch('/estudiantes/:id', (req,res) => {
//     res.send('Modificando atributos del estudiante ' + req.params.id);
// });
//
// app.delete('/estudiantes/:id', (req,res) => {
//     res.send('Borrando atributos del estudiante ' + req.params.id);
// });
//
// app.use(router);
// app.listen(port, () => {
//     console.log('Servidor escuchando por el puerto:',port);
//
// }).on('error', err => {
//     console.log('Error al inciar elservidor:',err);
// });