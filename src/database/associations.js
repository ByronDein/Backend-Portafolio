const Usuario = require('./models/usuario');
const Ticket = require('./models/ticket');
const TicketEstado = require('./models/ticketEstado');
const UsuarioEmp = require('./models/usuarioEmp');




Usuario.hasMany(Ticket, {
    foreignKey: {
        name: 'usuario_id_usuario',
        allowNull: false,
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});


Ticket.belongsTo(Usuario, { foreignKey: 'usuario_id_usuario' });



UsuarioEmp.hasMany(TicketEstado, {
    foreignKey: {
        name: 'usuario_emp_id_usuario_emp',
        allowNull: false,
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
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