import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';
import { Ticket } from './ticket';

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
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
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

export { TicketEstado };