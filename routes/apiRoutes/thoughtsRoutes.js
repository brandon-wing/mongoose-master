const router = require('express').Router();
const {findAllThoughts, findOneThought, createNewThought, deleteOneThought, updateThoughtInfo, newReaction, deleteReaction} = require('../../controllers/thoughtsController');
//here are the GET and POST requests within '/' endpoint, found in the thoughtsController
router.route('/').get(findAllThoughts).post(createNewThought);
//here is a GET + DELETE request for finding/deleting a specific thought by ID at the '/:thoughtId' endpoint
router.route('/:thoughtId').get(findOneThought).delete(deleteOneThought).put(updateThoughtInfo);
//reaction time! much like friends list, these requests POST and DELETE reaction's associated w/ a thought
router.route('/:thoughtId/reactions').post(newReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;