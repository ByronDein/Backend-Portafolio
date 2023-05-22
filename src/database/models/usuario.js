const { DataTypes }= require ('sequelize');
const {sequelize} = require('../config/sequelize');
const Ticket = require('./ticket');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
    unique: true, // Aquí se agrega la restricción única
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
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(100),
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

module.exports = Usuario;


Usuario.hasMany(Ticket, {
  foreignKey: {
    name: 'usuario_id_usuario',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Ticket.belongsTo(Usuario, {
    foreignKey: {
      name: 'id_usuario',
      allowNull: false,
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  }
  );

module.exports = Usuario;