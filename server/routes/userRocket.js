const router = require('express').Router()
const UserRocketController = require('../controllers/userRocketController');

router.get('/', UserRocketController.getAll);
router.post('/add', UserRocketController.add);

module.exports = router;