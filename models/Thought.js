const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = new Schema(
  {
          //required string in order to create it at the POST request
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
createdAt: {
        type: Date,
        default: Date.now(),
        get: function (formattedDate) {
          // Format the date as a string in a way that works for your application. I am using insomnia so toString should work.
          //not all applications will format the data in the same way, and some coudl require other methods
          return new Date(formattedDate).toString();
        }
      },
      //required string in order to create it at the POST request
    username: {
        type: String,
        required: true
    },
    //an array of the contents of the instances of reactionSchema are stored in the reactions field
    reactions: [reactionSchema]
  },
  {
    ///Mongoose will include virtual props w/ this
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);
thoughtSchema.virtual('reactionCount').get(function () {
  //virtual to show how many friends a user has by checking the length of the array
    return this.reactions.length;
  })
const Thought = model('Thought', thoughtSchema);

module.exports = Thought