const router = require('express').Router()
const RocketController = require('../controllers/rocketController');

router.get('/', RocketController.getAll);
router.post('/add', RocketController.add);

module.exports = router;