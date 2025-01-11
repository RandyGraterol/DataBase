const {DataTypes}= require('sequelize');
const sequelize = require('../config/conexion.js');

const Secciones =  sequelize.define('secciones',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	seccion:{
		type:DataTypes.INTEGER(2),
		allowNull:false
	},
	materia:{
		type:DataTypes.STRING(15),
		allowNull:false
	},
	codigo:{
		type:DataTypes.STRING(20),
		allowNull:false
	}
},{timestamps:true});

module.exports= Secciones