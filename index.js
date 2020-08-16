//----------------serccion de las importaciones
const express = require('express');
const mongoose =require('mongoose')

//creamos la conexion de la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mogod://localhost/veterinaria',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false

})

//creamos la bariales del conecion del sevidor
const app = express();

//----------------seccion de las middleware



//-----------------seccion de las settings





//------------------seccion de las rutas





//--------------------Seccion del puerto

app.listen(3000,()=>{
    console.log('el servidor funciona')
})
