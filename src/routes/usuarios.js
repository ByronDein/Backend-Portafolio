const { Router } = require('express')
const router = Router();



const { getAll, getUsername, createNew, editAt, deleteUser } = require('../controllers/UsuariosController');

router.route('/')
    .get(getAll)
    // .get(getUsername)
    .post(createNew)

router.route('/:id')
    .put(editAt)
    .delete(deleteUser)

module.exports = router;