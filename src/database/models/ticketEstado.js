const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { Ticket } = require('./ticket');
const { UsuarioEmp } = require('./usuarioEmp');

const TicketEstado = sequelize.define('ticket_estado', {
  id_ticket_estado: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  comuna : {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  foto : {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false, 
  },

});

TicketEstado.belongsTo(Ticket, {
  foreignKey: {
    name: 'ticket_id_ticket',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

TicketEstado.belongsTo(UsuarioEmp, {
  foreignKey: {
    name: 'usuario_emp_id_usuario_emp',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});



module.exports = TicketEstado;