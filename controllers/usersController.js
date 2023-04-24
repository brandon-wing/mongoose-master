const { User } = require('../models');

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
      }

}