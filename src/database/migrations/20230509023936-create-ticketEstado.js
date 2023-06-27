'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ticket_estados', {
      id_ticket_estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      estado: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      comuna: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ticket_id_ticket: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'id_tickets',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      usuario_emp_id_usuario_emp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario_emps',
          key: 'id_usuario_emp',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ticket_estados');
  },
};
