const { DataTypes }= require ('sequelize');
const {sequelize} = require('../config/sequelize');
const Ticket = require('./ticket');

const Usuario = sequelize.define('usuario', {
  id_usuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contrasenia: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

Usuario.hasMany(Ticket, {
  foreignKey: {
    name: 'usuario_id_usuario',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = Usuario;