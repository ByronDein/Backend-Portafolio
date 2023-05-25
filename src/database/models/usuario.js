const { DataTypes }= require ('sequelize');
const {sequelize} = require('../config/sequelize');
const Ticket = require('./ticket');

const Usuario = sequelize.define('usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
    unique: true, // Aquí se agrega la restricción única
  },
  foto: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },

  telefono : {
    type: DataTypes.NUMBER(9),
    allowNull: false,
  },

  comuna: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}
);


Usuario.hasMany(Ticket, {
  foreignKey: {
    name: 'usuario_id_usuario',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});



module.exports = Usuario;