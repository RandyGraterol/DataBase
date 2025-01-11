const {DataTypes} = require('sequelize');
const sequelize = require('../config/conexion.js');

const Horarios = sequelize.define('horarios',{
id:{
	type:DataTypes.INTEGER,
	autoIncrement:true,
	primaryKey:true
},
 codigo:{
 	type:DataTypes.INTEGER,
 	allowNull:false
 },
 nombreMateria:{
 	type:DataTypes.STRING(15),
 	allowNull:false
 },
 seccion:{
 	type:DataTypes.INTEGER(2),
 	allowNull:false
 },
 clase:{
 	type:DataTypes.STRING(50),
 	allowNull:false
 },
 aula:{
 	type:DataTypes.STRING(20),
    allowNull:false
 }
},{timestamps:true, freezeTableName: true});
module.exports= Horarios;