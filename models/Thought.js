const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = new Schema(
  {
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
          // Format the date as a string in a way that works for your application
          return new Date(formattedDate).toString();
        }
      },
    username: {
        type: String,
        required: true
    },
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