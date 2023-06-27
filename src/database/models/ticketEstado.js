const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { Ticket } = require('./ticket');
const { UsuarioEmp } = require('./usuarioEmp');

const TicketEstado = sequelize.define('ticket_estado', {
  id_ticket_estado: {
    type: DataTypes.STRING(100),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  comuna : {
    type: DataTypes.STRING(100),
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
  ticketIdTicket :{
    type: DataTypes.INTEGER,
    field: 'ticket_id_ticket',
    references: {
      model: Ticket,
      key: 'id_tickets'
    }
  },
  usuarioEmpId :{
    type: DataTypes.INTEGER,
    field: 'usuario_emp_id', // Corrige el nombre de campo
    references: {
      model: UsuarioEmp,
      key: 'idUsuarioEmp'
    }
  }


});





module.exports = TicketEstado;