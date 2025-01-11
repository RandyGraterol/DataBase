const {DataTypes} = require('sequelize');
const sequelize = require('../config/conexion.js');

const Notificaciones = sequelize.define('notificaciones',{
	id:{
		type:DataTypes.INTEGER,
		autoIncrement:true,
		primaryKey:true
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
	}
},{timestamps:true, freezeTableName: true});
module.exports=Notificaciones;