const router = require('express').Router()
const ControllerNasa = require('../controllers/ControllerNasa')

router.get('/', ControllerNasa.nasa)
router.get('/asteroid', ControllerNasa.asteroid)
router.get('/earthObservation', ControllerNasa.earthObservation)
router.get('/marsRoverPhotos', ControllerNasa.marsRoverPhotos)

module.exports = router