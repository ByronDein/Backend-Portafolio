const { Router } = require('express')
const router = Router();



const {createTicket, updateTicket, deleteTicket  } = require('../controllers/TicketsController');

router.route('/')
    .post(createTicket)

router.route('/:id')
    .put(updateTicket)
    .delete(deleteTicket)


module.exports = router;