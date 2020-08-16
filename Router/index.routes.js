const express = require('express')
const Router = express.Router()
const {nuevoCliente}= require('../controllers/PacienteControllers')

module.exports = function (){
    //Agramos a nueos pacientes via POST
    Router.post('/pacientes',nuevoCliente)


    return Router;
}