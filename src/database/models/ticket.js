import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';
import { Usuario } from './usuario';
import { UsuarioEmp } from './usuario_emp';

const Ticket = sequelize.define('ticket', {
  objeto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dimensiones: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

Ticket.belongsTo(Usuario, {
  foreignKey: {
    name: 'usuario_id_usuario',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});