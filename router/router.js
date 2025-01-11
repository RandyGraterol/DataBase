const express = require('express');
const router = express.Router();

const {crearPensumPost,crearEstudiantePost,crearHorarioPost,crearInscripcionPost,crearNotasPost,crearSeccionesPost} = require('../controllers/registrar.js');

const {obtenerPensumGet,obtenerEstudiantesGet,obtenerHorarioGet,obtenerInscripcionGet,obtenerNotasGet,obtenerSeccionesGet} = require('../controllers/obtener.js');

const {crearNoticacionPost,getNotificacion,updateNotificacion,destroyNotificacion} = require('../controllers/notificaciones.js');

//ruta principal

router.get('/',(req,res)=>{
res.status(200).send('API DATABASE PRUEBAS DEV (SERVIDOR CLIENTE DESACOPLADO BACKEND)');
});


//RUTAS GET
router.get('/getPensum',obtenerPensumGet);
router.get('/getEstudiantes',obtenerEstudiantesGet);
router.get('/getHorario',obtenerHorarioGet);
router.get('/getInscripcion',obtenerInscripcionGet);
router.get('/getNotas',obtenerNotasGet);
router.get('/getSecciones',obtenerSeccionesGet);


//RUTAS POST
router.post('/registerPensum',crearPensumPost);
router.post('/registerEstudiante',crearEstudiantePost);
router.post('/registerHorario',crearHorarioPost);
router.post('/registerInscripcion',crearInscripcionPost);
router.post('/registerNotas',crearNotasPost);
router.post('/registerSecciones',crearSeccionesPost);

//NOTIFICACIONES

router.get('/getNotificaciones',getNotificacion);
router.post('/registerNotificacion',crearNoticacionPost);
router.put('/updateNotificacion',updateNotificacion);
router.delete('/destroyNotificacion',destroyNotificacion);




module.exports=router;