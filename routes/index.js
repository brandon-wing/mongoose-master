const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
//every endpoint that begins with /api/ will use apiRoutes
router.use('/api', apiRoutes);
module.exports = router;