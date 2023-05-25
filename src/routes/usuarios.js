const { Router } = require('express')
const router = Router();



const { getAll,  createNew, editAt, deleteUser, getTicketsByUser, login } = require('../controllers/UsuariosController');

router.route('/')
    .get(getAll)
    .post(createNew)

router.route('/:id')
    .put(editAt)
    .delete(deleteUser)
    .get(getTicketsByUser)
router.route('/login')  
    .post(login)

    
module.exports = router;