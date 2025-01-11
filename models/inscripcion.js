const {DataTypes} = require('sequelize');
const sequelize = require('../config/conexion.js');

const Inscripciones = sequelize.define('inscripciones',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	nombreMateria:{
     type:DataTypes.STRING(15),
     allowNull:false
	},
	seccion:{
    type:DataTypes.STRING(15),
    allowNull:false
	},
	horario:{
    type:DataTypes.STRING(15),
    allowNull:false
	},
	uc:{
    type:DataTypes.INTEGER,
    allowNull:false
	},
	cupos:{
    type:DataTypes.INTEGER,
    allowNull:true,
    defaultValue:50
	},
	aula:{
    type:DataTypes.STRING(15),
    allowNull:false
	},
	periodo:{
    type:DataTypes.STRING(15),
    allowNull:false
	},
	estudianteId:{
	type:DataTypes.INTEGER,
	allowNull:false
	}
},{timestamps:true});

module.exports=Inscripciones;