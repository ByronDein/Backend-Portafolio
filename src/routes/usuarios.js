const { Router } = require('express')
const router = Router();



const { getAll,  createNew, editAt, deleteUser, getTicketsByUser } = require('../controllers/UsuariosController');

router.route('/')
    .get(getAll)
    .post(createNew)

router.route('/:id')
    .put(editAt)
    .delete(deleteUser)

router.get('/usuarios/:id/tickets')
    .get(getTicketsByUser)

module.exports = router;