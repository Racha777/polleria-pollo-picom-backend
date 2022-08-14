const express=require('express');
const {config}=require('./config');

//Importamos middlewares
const cors=require('cors');

const app=express();
app.set('port',config.port);

//middlewares
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:"Servidor activo"
    })
})

//rutas
app.use('/platos',require('./routes/plato.route'));

//middlewares de errores

module.exports=app;