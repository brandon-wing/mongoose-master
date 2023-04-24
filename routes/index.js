const router = require('express').Router();
const backend = require('./apiRoutes');

router.use('/api', backend)


module.exports = router;
