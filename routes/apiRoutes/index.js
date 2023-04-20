const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
//these endpoints will use the functions from their individual routes files
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);