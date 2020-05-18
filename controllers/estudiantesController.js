let modelo = require('./estudiantesModel');
const Sequelize = require('sequelize');
// Borra estudiante
const deleteEstudiante = function (req,res) {
     if(modelo.erase(req.params.id)){
          res.status(200).
          json({msg:`id: ${req.params.id} deleted

succesfully`})
     } else {
          res.status(500).
          json({error:`could not delete id:

${req.params.id}`})
     }
};
//Muestra estudiante
const getEstudiante = function(req, res){
     console.log(req.params.id);
     modelo.findByID(req.params.id).then((estudiante) => {
          res.status(200).json(estudiante);
     }).catch(err => {
          res.status(500).json({error: "No encontrado"});
     });
};
//Muestra todos los estudiantes
const getAllEstudiantes = function(req, res){
     modelo.findAll().then((estudiantes) =>{
          res.status(200).json(estudiantes);
     }).catch(err =>{
          res.status(500).json({error: "No encontrado"});
     });
};
// Crea estudiantes
const createEstudiante = function(req, res){
     let r=modelo.add(req.body);
     if(r){
          res.status(200).json(r);
     }else{
          res.status(500).json({error: "No se pudo crear"});
     }
}
//Actualiza estudiante
const updateEstudiante = function(req, res){
     let r = modelo.save(req.params.id, req.body);
     if(r){
          res.status(200).json(r);
     }else{
          res.status(500).json({error: "No existe"});
     }
}
//Exporta las funciones
exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;
// const estudiantes = [
//      {id: "001", matricula: "01142739", nombre: "karen", semestre: 7, creditos: 280},
//      {id: "002", matricula: "01132739", nombre: "karla", semestre: 8, creditos: 280},
//      {id: "003", matricula: "01132738", nombre: "abner", semestre: 8, creditos: 280},
//      {id: "004", matricula: "01142736", nombre: "juan", semestre: 7, creditos: 280},
//      {id: "005", matricula: "01142734", nombre: "lugo", semestre: 7, creditos: 280}];
//
// const findById = function (id) {
//      return estudiantes.find((e) => {
//           return e.id == id;
//      });
// };
//
// const findByMatricula = function (matricula) {
//      return estudiantes.find((e) => {
//           return e.matricula == matricula;
//      });
// };
// const findAll = function() {
//      return estudiantes;
// };
//
// exports.findById = findById;
// exports.findByMatricula = findByMatricula;
// exports.findAll = findAll;


