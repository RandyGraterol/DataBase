//TABLAS
const pensum = require('../models/pensum.js');
const estudiantes = require('../models/estudiante.js');
const horario = require('../models/horario.js');
const inscripcion = require('../models/inscripcion.js');
const notas = require('../models/notas.js');
const secciones = require('../models/secciones.js');
/////////////////////////////////////////////////
const crearPensumPost = async(req,res)=>{
try{
const {codigo,semestre,asignatura,horasTeoricas,horasPracticas,horasSemanales,uc,prelaciones} = req.body;
res.json({status:true,response:'pensum creado con exito'});
await pensum.create({codigo,semestre,asignatura,horasTeoricas,horasPracticas,horasSemanales,uc,prelaciones});
}catch(error){
console.error(error.message);
res.json({status:false,response:'Error al registrar pensum',error:error.message});
}
}
//////////////////////////////////////////////////
const crearEstudiantePost = async(req,res)=>{
  try{
    const {cedula,primerapellido,segundoapellido,primernombre,segundonombre,correo,fechaNacimiento,sexo,discapacidad,etnia,telefonoL,status,telefonoM,gu,img} = req.body

  await estudiantes.create({cedula,primerapellido,segundoapellido,primernombre,segundonombre,correo,fechaNacimiento,sexo,discapacidad,etnia,telefonoL,status,telefonoM,gu,img});
    res.json({status:true,response:'Estudiante creado con exito'});

  }catch(error){
   console.error(error.message);
   res.json({status:false,response:'Error al registrar estudiante',error:error.message}); 
  }
}
//////////////////////////////////////////////////
const crearHorarioPost =async(req,res)=>{
try{
const {codigo,nombreMateria,seccion,clase,aula} = req.body;
await horario.create({codigo,nombreMateria,seccion,clase,aula});
res.json({status:true,response:'Horario creado con exito'});
}catch(error){
console.error(error.message);
   res.json({status:false,response:'Error al registrar horario',error:error.message});
}
}
//////////////////////////////////////////////////
const crearInscripcionPost = async(req,res)=>{
try{
const {nombreMateria,seccion,horario,uc,cupos,aula,periodo,estudianteId} = req.body;
await inscripcion.create({nombreMateria,seccion,horario,uc,cupos,aula,periodo,estudianteId});
res.json({status:true,response:'inscripcion creado con exito'});
}catch(error){
console.error(error.message);
   res.json({status:false,response:'Error al registrar inscripcion',error:error.message});
}
}
//////////////////////////////////////////////////
const crearNotasPost = async(req,res)=>{
try{
  const {periodo,semestre,nombreEstudiante,nota,materia,uc} = req.body;
await notas.create({periodo,semestre,nombreEstudiante,nota,materia,uc});
res.json({status:true,response:'nota creado con exito'});
}catch(error){
  console.error(error.message);
   res.json({status:false,response:'Error al registrar notas',error:error.message});
}
}
//////////////////////////////////////////////////
const crearSeccionesPost = async(req,res)=>{
try{
const {seccion,materia,codigo} = req.body;
await secciones.create({seccion,materia,codigo});
res.json({status:true,response:'seccion creada con exito'});
}catch(error){
console.error(error.message);
   res.json({status:false,response:'Error al registrar secciones',error:error.message});
}
}
//////////////////////////////////////////////////
module.exports={
crearPensumPost,crearEstudiantePost,crearHorarioPost,crearInscripcionPost,crearNotasPost,crearSeccionesPost
}




