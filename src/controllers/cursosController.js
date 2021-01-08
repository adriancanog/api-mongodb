const cursosCtrl = {};

const Curso = require("../models/cursosModel");

cursosCtrl.altaCurso = async(req, res) => {
const{nombre, duracion, precio} = req.body;

const nuevoCurso = new Curso({nombre, duracion, precio});
await nuevoCurso.save();

res.json(
    nuevoCurso
)


}

module.exports = cursosCtrl;