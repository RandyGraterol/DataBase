const notificaciones = require('../models/notificaciones.js');
/////////////////////////////////////////////////////////////////////////////////////
const crearNoticacionPost = async(req,res)=>{
	try{
		const {titulo,message,grupoUsuario,prioridad,checked,view} = req.body;
		await notificaciones.create({titulo,message,grupoUsuario,prioridad});
		res.json({status:true,response:'Notificacion creada con exito'});
	}catch(error){
		console.error(error.message);
		res.json({status:false,response:'error al crear notiicacion',error:error.message});
	}
}
//////////////////////////////////////////////////////////////////////////////////////
const getNotificacion = async(req,res)=>{
	try{
		const data = await notificaciones.findAll();
		res.json({status:true,response:'Notificaciones obtenidas con exito',data});
	}catch(error){
		console.error(error.message);
		res.json({status:false,response:'Error al obtener notiticaciones',error:error.message});
	}
}
/////////////////////////////////////////////////////////////////////////////////////
const updateNotificacion = async(req,res)=>{
	try{
		const {titulo,message,grupoUsuario,prioridad,id} = req.body;
		await notificaciones.update({titulo,message,grupoUsuario,prioridad,checked,view},{where:{id}});	
		res.json({status:true,response:'Notificacion actualizada'});
	}catch(error){
		console.error(error.message);
		res.json({status:false,response:'Error al actualizar notiticaciones',error:error.message});
	}

}
///////////////////////////////////////////////////////////////////////////////
const destroyNotificacion = async(req,res)=>{
try{
const id = req.body.id;
await notificaciones.destroy({where:{id}});
res.json({status:true,response:'Notificacion eliminada'});
}catch(error){
	console.error(error.message);
		res.json({status:false,response:'Error al eliminar notiticaciones',error:error.message});
}
}
/////////////////////////////////////////////////////////////////////////////////////
module.exports={
	crearNoticacionPost,
	getNotificacion,
	updateNotificacion,
	destroyNotificacion
}