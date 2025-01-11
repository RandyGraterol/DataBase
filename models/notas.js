const {DataTypes} = require('sequelize');
const sequelize = require('../config/conexion.js');

const Notas = sequelize.define('Notas',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	periodo:{
		type:DataTypes.STRING(10),
		allowNull:false
	},
	semestre:{
		type:DataTypes.STRING(10),
		allowNull:false
	},
	nombreEstudiante:{
		type:DataTypes.STRING(10),
		allowNull:false
	},
	nota:{
		type:DataTypes.INTEGER,
		allowNull:false
	},
	materia:{
		type:DataTypes.STRING(15),
		allowNull:false
	},
	uc:{
		type:DataTypes.INTEGER,
		allowNull:false
	}
},{timestamps:true, freezeTableName: true});

module.exports = Notas;