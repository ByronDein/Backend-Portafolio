const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const Usuario = require('./usuario');
// import { UsuarioEmp } from './usuario_emp';

const Ticket = sequelize.define('ticket', {
  idTickets: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  dimensiones : {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
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
  foto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  empresa: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
usuarioIdUsuario: {
    type: DataTypes.INTEGER,
    field: 'usuario_id_usuario',
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  }

});



// Ticket.belongsTo(Usuario,  { foreignKey: 'usuario_id_usuario' });

// Ticket.belongsTo(Usuario, {
//   foreignKey: {
//     name: 'id_usuario',
//     allowNull: false,
//   },
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// }
// );


module.exports = Ticket;