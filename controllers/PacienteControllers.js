const Paciente  = require('../models/Paciente')

exports.nuevoPaciente = async (req,res, next ) => {
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


exports.ObtenerPacientes = async (req,res ,next )=>{

    try{ 
        const paciente = await Paciente.find({})
        res.json(paciente);

    } catch (error) {
        console.log(error)
        next();
    }
}

exports.ObtenerPaciente = async (req,res,next) =>{


    try{
        const paciente = await Paciente.findById(req.params.id)
        res.json(paciente)

    } catch (error) {
        console.log(error)
        next();
    }
}

exports.ModificarPaciente = async (req,res,next)=>{

    try{
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new : true
        })
        res.json(paciente)

    } catch (error){
    console.log(error)
    next();
    }

}



exports.EliminarPaciente = async  (req,res,next) => {
    try{
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({Mensaje : "paciente Eliminado"})
    } catch (error){
        console.log(error);
        next();
    }
}