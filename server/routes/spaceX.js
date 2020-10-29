const express = require('express');
const router = express.Router()
const Controller = require('../controllers/SpaceXController');

router.get("/launches/upcoming", Controller.launchesUpcoming )
router.get("/rockets/:id", Controller.rockets )
router.get("/launchpads/:id", Controller.launchpads )
router.get("/payloads/:id", Controller.payloads )

module.exports = router
