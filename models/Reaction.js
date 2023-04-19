const { Schema } = require('mongoose');
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        //default value is set to a unique mongoose objectID
        default: new mongoose.Types.ObjectId()
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
        default: Date.now()
      }
    }
);

module.exports = reactionSchema;