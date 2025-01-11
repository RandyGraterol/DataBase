const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexion.js');

const Pensum = sequelize.define('pensum', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  semestre:{
    type:DataTypes.STRING(15),
    allowNull:false
  },
  asignatura: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true
  },
  horasTeoricas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  horasPracticas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  horasSemanales: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  uc: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prelaciones: {
    type: DataTypes.STRING, // Cambiado a STRING si es una lista de asignaturas
    allowNull: true // Permitir que sea nulo si no hay prelaciones
  }
}, {
  timestamps: true // Para incluir columnas de `createdAt` y `updatedAt`
});

module.exports = Pensum;