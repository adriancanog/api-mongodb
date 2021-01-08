
const express = require('express');
const router = express.Router();


const{ altaCurso } = require("../controllers/cursosController");
 

router.post("/curso/nuevo", altaCurso);
 

module.exports = router;