let db = require('./models/database/db');
const Sequelize = require('sequelize');
//Funciones asincronas
async function erase (ID){
    let estudiante=await db.Estudiante.destroy(
        { where:
                { id: ID
                }
        });
    return estudiante;
}
// funcion que retorna el id de estudiantes
async function findById(ident){

    let estudiante= await db.Estudiante.findAll({
        where:{
            id:ident
        }
    });
    return estudiante;
};
// fucion que retorna la matricula de estudiantes

async function findByMatricula(mat) {
    let estudiante = await db.Estudiante.findAll({
        where:
            {
                matricula: mat
            }
    });
}
// funcion que retorna todos los estudiantes
async function findAll() {
    let estudiantes = await db.Estudiante.findAll();
    let listaEstudiantes = [];
    for (let j = 0; j < estudiantes.length; j++) {
        listaEstudiantes[j] = {
            "id": estudiantes[j].id,
            "nombre": estudiantes[j].nombre,
            "matricula": estudiantes[j].matricula,
            "semestreIngreso": estudiantes[j].semestreIngreso,
            "creditosCursados": estudiantes[j].creditosCursados,
        }
        return listaEstudiantes;
    }
    ;
}
// funcion que retorna la info de un estudiante
async function add(body){

    let estudiante= await db.Estudiante.create({
        id: body.id,
        nombre: body.nombre,
        matricula: body.matricula,
        semestreIngreso:body.semestreIngreso,
        creditosCursados:body.creditosCursados
    });

    return estudiante;

}
async function save (body,identificador){
    if(body.nombre!=undefined)
    {
        let estudiante=await db.Estudiante.update(
            {
                nombre: body.nombre
            },
            { where:
                    {
                        id: identificador
                    }
            });
    }
    if(body.semestreIngreso!=undefined){
        estudiante=await db.Estudiante.update(
            {
                semestreIngreso: body.semestreIngreso
            },
            { where:
                    {
                        id: identificador
                    }
            });
    }
    if(body.creditosCursados!=undefined)
    {
        estudiante=await db.Estudiante.update(
            {
                creditosCursados: body.creditosCursados
            },
            { where:
                    {
                        id: identificador
                    }
            });
    }
    return estudiante;
}
//Exporta
exports.findById = findById;
exports.findByMatricula = findByMatricula;
exports.findAll = findAll;
exports.add = add;
exports.save = save;
exports.erase = erase;
