const router = require('express').Router();
const {findAllUsers, findOneUser, createNewUser, deleteOneUser, addFriend, deleteFriend} = require('../../controllers/usersController');
//here are the GET and POST requests within '/' endpoint, found in the usersController
router.route('/').get(findAllUsers).post(createNewUser);
//here is a GET + DELETE request for finding/deleting a specific user by ID at the '/:userId' endpoint
router.route('/:userId').get(findOneUser).delete(deleteOneUser);
//here are POST and DELETE requests for adding and deleting a friend
router.route('/:userId/friends').post(addFriend)
router.route('/:userId/friends/:friendId').delete(deleteFriend);
module.exports = router;