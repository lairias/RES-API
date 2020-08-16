const Paciente  = require('../models/Paciente')

exports.nuevoCliente = async (req,res, next ) => {
    //TOdo las resuestas
    // console.log(req.body)
    const paciente = new Paciente (req.body)
    try {
        await paciente.save();
        res.json({ mensaje: "EL cliente agregado" });
    } catch (error) {
        console.log(error);
        next();
    }
}


