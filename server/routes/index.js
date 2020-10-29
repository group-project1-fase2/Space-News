const router = require('express').Router()
const routerNasa = require('./nasa')

router.use('/nasa', routerNasa)

module.exports = router