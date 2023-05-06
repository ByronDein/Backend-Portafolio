const { Router } = require('express')
const router = Router();

const { getSesiones, createSesion, getSesion, updateSesion, deleteSesion, getAlumnosBySesionNumber, updateAsistenciaByReservaId } = require('../controllers/SesionesController');

router.route('/')
    .get(getSesiones)
    .post(createSesion);

router.route('/:id')
    .get(getSesion)
    .put(updateSesion)
    .delete(deleteSesion)

router.route('/:numeroSesion/alumnos')
    .get(getAlumnosBySesionNumber)

router.route('/reserva/:id/asistencia')
    .put(updateAsistenciaByReservaId)

module.exports = router;