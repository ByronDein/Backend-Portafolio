const { Router } = require('express')
const router = Router();



const {createTicket, updateTicket, deleteTicket, getLastTicketCreated  } = require('../controllers/TicketsController');

router.route('/')
    .post(createTicket)
    .get(getLastTicketCreated)

router.route('/:id')
    .put(updateTicket)
    .delete(deleteTicket)


module.exports = router;