//schema + model uses mongoose
const { Schema, model } = require('mongoose');
//create the user schema in order to create a model!!!
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //email regex!! used this in the last assignment
        match: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/
      },
    thoughts:[ {
        type: Schema.Types.ObjectId,
        //references Thought model
        ref: 'Thought'
    } ],
    friends:[ {
        type: Schema.Types.ObjectId,
        //references User model
        ref: 'User'
    }]
  },
  {
    ///Mongoose will include virtual props w/ this
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual('friendCount').get(function () {
  //virtual to show how many friends a user has by checking the length of the array
    return this.friends.length;
  })

const User = model('User', userSchema);

module.exports = User