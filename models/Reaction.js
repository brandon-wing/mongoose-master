const { Schema } = require('mongoose');
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        //default value is set to a unique mongoose objectID
      },
      reactionBody: {
        type: String,
        required: true,
        //reaction must be between 1 and 280 characters
        minLength: 1,
        maxLength: 280
        },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        //getter method
        get: function (formattedDate) {
          // Format the date as a string in a way that works for your application
          return new Date(formattedDate).toString();
        }
      }
    }
);

module.exports = reactionSchema;