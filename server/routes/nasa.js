const router = require('express').Router()
const ControllerNasa = require('../controllers/ControllerNasa')
const UserNasaController = require('../controllers/userNasaController');

router.get('/', ControllerNasa.nasa)
router.get('/asteroid', ControllerNasa.asteroid)
router.get('/earthObservation', ControllerNasa.earthObservation)
router.get('/marsRoverPhotos', ControllerNasa.marsRoverPhotos)
router.get('/add-comment', UserNasaController.add);

module.exports = router