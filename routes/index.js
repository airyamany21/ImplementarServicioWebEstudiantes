const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

//http comunicación
router.use(express.json());

router.get('/estudiantes', estudiantesController.getAllEstudiantes);
router.get('/estudiantes/:id', estudiantesController.getEstudiante);
router.post('/estudiantes', estudiantesController.createEstudiante);
router.put('/estudiantes/:id', estudiantesController.updateEstudiante);
router.patch('/estudiantes/:id', estudiantesController.updateEstudiante);
router.delete('/estudiantes/:id', estudiantesController.deleteEstudiante);

//Exporta
module.exports = router;

// module.exports =app =>{
//     app.get('/', (req,res) =>{
//         res.send('Hello World')
//         });
// }
module.exports = function f() {
    f.get('/', (req,res) =>{
        res.send('Hello World')
    });
}
