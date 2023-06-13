'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_emps', {
      id_usuario_emp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      correo: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      contrasenia: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
      },
      comuna: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      transporte: {
        type: Sequelize.BOOLEAN(1),
        allowNull: false,
      },
      obj_reciclaje: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING(100),
        allowNull: true,
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
    await queryInterface.dropTable('usuario_emps');
  },
};