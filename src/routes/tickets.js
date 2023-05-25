const { Router } = require('express')
const router = Router();



const {createTicket, updateTicket, deleteTicket, getTickets  } = require('../controllers/TicketsController');

router.route('/')
    .post(createTicket)
    .get(getTickets)

router.route('/:id')
    .put(updateTicket)
    .delete(deleteTicket)


module.exports = router;