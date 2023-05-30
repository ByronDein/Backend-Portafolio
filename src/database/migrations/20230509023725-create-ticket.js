'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
      id_tickets: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      objeto: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
        dimensiones: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      foto: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      empresa: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      usuario_id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id_usuario',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Tickets');
  }
};
