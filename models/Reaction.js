const { Schema } = require('mongoose');
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        //default value is set to a unique mongoose objectID
      },
      //required string in order to create it at the POST request
      reactionBody: {
        type: String,
        required: true,
        //reaction must be between 1 and 280 characters
        minLength: 1,
        maxLength: 280
        },
        //required string in order to create it at the POST request
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        //getter method
        get: function (formattedDate) {
// Format the date as a string in a way that works for your application. I am using insomnia so toString should work.
//not all applications will format the data in the same way, and some could require other methods. 
          return new Date(formattedDate).toString();
        }
      }
    }
);

module.exports = reactionSchema;