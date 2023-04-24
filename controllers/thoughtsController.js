const { User, Thought } = require('../models');

module.exports = {
    //find all Thoughts will be used in the GET function in the ThoughtsRoutes for the '/' endpoint
    findAllThoughts(req, res) {
        Thought.find()
          .then((allThoughts) => res.json(allThoughts))
          .catch((err) => res.status(500).json(err))
      },
      //finding one Thought will be used in the GET function in the ThoughtsRoutes for the '/:id' endpoint
      findOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .then((oneThought) => res.json(oneThought))
          .catch((err) => res.status(500).json(err))
      },
      //create Thought will be used in the POST function in ThoughtsRoutes '/' endpoint
      createNewThought(req, res) {
        //declaring a variable 
        Thought.create(req.body)
        //after the thought is created, it has to be added to the thoughts field of its specific user
        .then((newThought) => {
            return User.findOneAndUpdate(
              { username: req.body.username },
              { $push: { thoughts: newThought._id } }
            );
          })
      },
      //updating a Thought's info, this will be the PUT request
      updateThoughtInfo(req, res) {
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body }
        )
        .then(() => res.json({ message: 'Text has been updated.' }))
        .catch((err) => res.status(500).json(err))

      },
      //delete a Thought by its ID
      deleteOneThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
              .then(() => res.json({ message: 'Success! Thought is no longer in the database.' }))
              .catch((err) => res.status(500).json(err))

      }
}