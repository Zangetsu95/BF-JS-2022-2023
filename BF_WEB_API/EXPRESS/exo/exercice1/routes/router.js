const router = require('express').Router()

const employersRouter = require('./employers.routes')
const comptasRouter = require('./comptas.routes')
const clientsRouter = require('./clients.routes')

router.use('/employers', employersRouter)
router.use('/comptas', comptasRouter)
router.use('/clients', clientsRouter)

module.exports = router