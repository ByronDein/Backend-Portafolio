'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Agregar la columna de clave externa
    await queryInterface.addColumn('ticket_estados', 'usuario_emp_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    // Crear la relación de clave externa
    await queryInterface.addConstraint('ticket_estados', {
      fields: ['usuario_emp_id'],
      type: 'foreign key',
      name: 'fk_ticket_estados_usuario_emp',
      references: {
        table: 'usuario_emps',
        field: 'id_usuario_emp',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la relación de clave externa
    await queryInterface.removeConstraint('ticket_estados', 'fk_ticket_estados_usuario_emp');

    // Eliminar la columna de clave externa
    await queryInterface.removeColumn('ticket_estados', 'usuario_emp_id');
  },
};
