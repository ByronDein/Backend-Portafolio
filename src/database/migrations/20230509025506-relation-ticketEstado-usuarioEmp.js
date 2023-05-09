'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   

    // Agregar la relación en la tabla ticket_estados
    await queryInterface.addForeignKey('ticket_estados', {
      field: 'usuario_emp_id',
      type: Sequelize.INTEGER,
      references: {
        model: 'usuario_emps',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la relación en la tabla ticket_estados
    await queryInterface.removeForeignKey('ticket_estados', 'ticket_estados_usuario_emp_id_fkey');
  },
};
