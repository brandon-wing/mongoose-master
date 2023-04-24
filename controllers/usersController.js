const { User, Thought } = require('../models');

module.exports = {
    //find all users will be used in the GET function in the usersRoutes for the '/' endpoint
    findAllUsers(req, res) {
        User.find()
          .then((allUsers) => res.json(allUsers))
          .catch((err) => res.status(500).json(err))
      },
      //finding one user will be used in the GET function in the usersRoutes for the '/:id' endpoint
      findOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .then((oneUser) => res.json(oneUser))
          .catch((err) => res.status(500).json(err))
      },
      //create user will be used in the POST function in usersRoutes '/' endpoint
      createNewUser(req, res) {
        User.create(req.body)
        .then((newUser) => res.json(newUser))
        .catch((err) => res.status(500).json(err))
      },
      //updating a user's info, this will be the PUT request
      updateUserInfo(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body }
        )
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))

      },
      //delete a user by its ID
      deleteOneUser(req, res) {
      //once the user is deleted, all of the thoughts with its associated userId will be too!
        User.findOneAndDelete({ _id: req.params.userId })
          .then((deletedUser) =>
              Thought.deleteMany({ _id: { $in: deletedUser.thoughts } })
              )
              .then(() => res.json({ message: 'Success! User is no longer in the database.' }))
              .catch((err) => res.status(500).json(err))

      },
      //add a friend POST request
      addFriend(req, res){
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.body } }
        )
          .then(() => res.json({message: 'Added to friends list!'}))
          .catch((err) => res.status(500).json(err))
        
      },
      deleteFriend(req, res){
      User.findOneAndUpdate(
        { _id: req.params.userId },
        //removes from the friends field the user by its specific id
        { $pull: { friends: req.params.friendId } }
        )
        .then(() => res.json({message: 'deleted from friends list!'}))
        .catch((err) => res.status(500).json(err))

    }
}