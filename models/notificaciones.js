const {DataTypes} = require('sequelize');
const sequelize = require('../config/conexion.js');

const Notificaciones = sequelize.define('notificaciones',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	titulo:{
	type:DataTypes.STRING(15),
	allowNull:false	
	},
	message:{
		type:DataTypes.STRING(50),
		allowNull:false
	},
	grupoUsuario:{
		type:DataTypes.STRING(20),
		allowNull:false
	},
	prioridad:{
		type:DataTypes.STRING(20),
		allowNull:false
	},
	checked:{
		type:DataTypes.BOOLEAN,
		allowNull:true,
		defaultValue:false
	},
	view:{
	type:DataTypes.BOOLEAN,
	allowNull:true,
	defaultValue:false
	}
},{timestamps:true, freezeTableName: true});
module.exports=Notificaciones;