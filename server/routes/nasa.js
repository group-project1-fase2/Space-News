const { route } = require('.')

const router = require('express').Router()
const Controller = require('../controller/ControllerNasa')

router.get('/', Controller.nasa)
router.get('/asteroid', Controller.asteroid)
router.get('/earthObservation', Controller.earthObservation)
router.get('/marsRoverPhotos', Controller.marsRoverPhotos)

module.exports = router