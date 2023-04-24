const router = require('express').Router();
const usersRoutes = require('./usersRoutes.js');
const thoughtsRoutes = require('./thoughtsRoutes.js');

//these endpoints will use the functions from their individual routes files
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;