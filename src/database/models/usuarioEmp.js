import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';
import { TicketEstado } from './ticket_estado';

const UsuarioEmp = sequelize.define('usuario_emp', {
  id_usuario_emp: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  nombre_emp: {
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
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  transporte: {
    type: DataTypes.BOOLEAN(1),
    allowNull: false,
  },
  obj_reciclaje: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

UsuarioEmp.hasMany(TicketEstado, {
  foreignKey: {
    name: 'usuario_emp_id_usuario_emp',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
