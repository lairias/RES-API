const express = require('express');
const Router = express.Router();




const {
  nuevoPaciente,
  ObtenerPacientes,
  ObtenerPaciente,
  ModificarPaciente,
  EliminarPaciente
} = require("../controllers/PacienteControllers");
module.exports = function (){
    //Agramos a nueos pacientes via POST
    Router.post("/pacientes", nuevoPaciente);
    Router.get("/pacientes", ObtenerPacientes);
    Router.get("/pacientes/:id", ObtenerPaciente);
    Router.put("/pacientes/:id", ModificarPaciente);
    Router.delete("/pacientes/:id", EliminarPaciente);


    return Router;
}