const { Router } = require('express')
const router = Router();



const {createTicketEstado,deleteTicket, getTickets, updateTicket } = require('../controllers/TicketEstadoController');

router.route('/')
    .post(createTicketEstado)
    .get(getTickets)

router.route('/:id')
    .put(updateTicket)
    .delete(deleteTicket)


module.exports = router;