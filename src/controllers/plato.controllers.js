const platoController={};

const platoModel=require('../models/plato.model');

platoController.getAll=async (req,res)=>{
    const platos=await platoModel.find();
    res.json(platos);
}

platoController.create=async (req,res)=>{
    try{
        const {nombre,precio,imagen}=req.body;
        const nuevoPlato=new platoModel({
            nombre,
            precio,
            imagen
        });
        await nuevoPlato.save();
        res.json(nuevoPlato);
    }catch(error){
        console.log(error);
    }
}

module.exports=platoController;