const pensum = require('../models/pensum.js');
const estudiantes = require('../models/estudiante.js');
const horario = require('../models/horario.js');
const inscripcion = require('../models/inscripcion.js');
const notas = require('../models/notas.js');
const secciones = require('../models/secciones.js');
//////////////////////////////////////////////////////////////////////////
const obtenerPensumGet = async(req,res)=>{
try{
const data = await pensum.findAll();
const d = JSON.stringify(data);
console.log(`datos de la consulta a la tabla pensum ${d}`);
res.json({status:true,response:'datos listados correctamente',data});
}catch(error){
console.error(error.message);
res.json({status:false,response:'error al obtener lista',error:error.message});
}
}
///////////////////////////////////////////////////////////////////////////////
const obtenerEstudiantesGet = async(req,res)=>{
try{
const data = await estudiantes.findAll();
res.json({status:true,response:'datos listados correctamente',data});
}catch(error){
console.error(error.message);
res.json({status:false,response:'error al obtener lista',error:error.message});
}
}
///////////////////////////////////////////////////////////////////////////////
const obtenerHorarioGet = async(req,res)=>{
try{
const data = await horario.findAll();
res.json({status:true,response:'datos listados correctamente',data});
}catch(error){
console.error(error.message);
res.json({status:false,response:'error al obtener lista',error:error.message});
}
}
///////////////////////////////////////////////////////////////////////////////
const obtenerInscripcionGet = async(req,res)=>{

try{
const data = await inscripcion.findAll();
res.json({status:true,response:'datos listados correctamente',data});
}catch(error){
console.error(error.message);
res.json({status:false,response:'error al obtener lista',error:error.message});
}

}
////////////////////////////////////////////////////////////////////////////////
const obtenerNotasGet = async(req,res)=>{

try{
const data = await notas.findAll();
res.json({status:true,response:'datos listados correctamente',data});
}catch(error){
console.error(error.message);
res.json({status:false,response:'error al obtener lista',error:error.message});
}

}
//////////////////////////////////////////////////////////////////////////////
const obtenerSeccionesGet = async(req,res)=>{

try{
const data = await secciones.findAll();
res.json({status:true,response:'datos listados correctamente',data});
}catch(error){
console.error(error.message);
res.json({status:false,response:'error al obtener lista',error:error.message});
}

}
//////////////////////////////////////////////////////////////////////////////
module.exports={
	obtenerPensumGet,
	obtenerEstudiantesGet,
	obtenerHorarioGet,
	obtenerInscripcionGet,
	obtenerNotasGet,
	obtenerSeccionesGet
}