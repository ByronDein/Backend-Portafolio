const { Router } = require('express')
const router = Router();



const { getAll, createNew, editAt, deleteUser, getTicketsByUserEmp, login } = require('../controllers/UsuariosEmpController');

router.route('/')
    .get(getAll)
    .post(createNew)

router.route('/:id')
    .put(editAt)
    .delete(deleteUser)
    .get(getTicketsByUserEmp)
router.route('/login')
    .post(login)


module.exports = router;