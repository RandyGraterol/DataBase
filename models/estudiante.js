const {DataTypes} = require('sequelize');
const sequelize = require('../config/conexion.js');

const Estudiantes = sequelize.define('estudiantes',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	cedula:{
		type:DataTypes.INTEGER,
		allowNull:false
	},
	primerapellido:{
		type:DataTypes.STRING(15),
		allowNull:false	
	},
	segundoapellido:{
		type:DataTypes.STRING(15),
		allowNull:false		
	},
	primernombre:{
		type:DataTypes.STRING(15),
		allowNull:false	
	},
	segundonombre:{
		type:DataTypes.STRING(15),
		allowNull:false		
	},
	correo:{
		type:DataTypes.STRING(15),
		allowNull:false	
	},
	fechaNacimiento:{
		type:DataTypes.DATE,
		allowNull:false		
	},
	sexo:{
		type:DataTypes.STRING(15),
		allowNull:false		
	},
	discapacidad:{
		type:DataTypes.STRING(15),
		allowNull:false		
	},
	etnia:{
		type:DataTypes.STRING(15),
		allowNull:false		
	},
	telefonoL:{
		type:DataTypes.INTEGER(15),
		allowNull:false		
	},
	status:{
		type:DataTypes.BOOLEAN,
		allowNull:false			
	},
	telefonoM:{
		type:DataTypes.INTEGER(15),
		allowNull:false		
	},
	gu:{
		type:DataTypes.STRING(15),
		allowNull:false		
	},
	img:{
		type:DataTypes.STRING(15),
		allowNull:false
	}
},{timestamps:true});

module.exports = Estudiantes;