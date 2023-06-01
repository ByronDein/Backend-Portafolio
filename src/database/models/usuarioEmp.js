const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { TicketEstado } = require('./ticketEstado');
const UsuarioEmp = sequelize.define('usuario_emp', {
  idUsuarioEmp: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contrasenia: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  telefono: { 
    type: DataTypes.NUMBER(9),
    allowNull: false,
  },
  comuna : {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  transporte: {
    type: DataTypes.BOOLEAN(1),
    allowNull: false,
  },
  objReciclaje: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  foto: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});





module.exports = UsuarioEmp;