const router = require('express').Router();
const {findAllUsers, findOneUser, createNewUser} = require('../../controllers/usersController');
//here are the GET and POST requests within '/' endpoint, found in the usersController
router.route('/').get(findAllUsers).post(createNewUser);
//here is a GET request for finding a specific user by ID at the '/:userId' endpoint
router.route('/:userId').get(findOneUser);

module.exports = router;