const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/projectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//we have to export the connection
module.exports = mongoose.connection;
