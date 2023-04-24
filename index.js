//all the goodies needed for express server to function
const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//mongoose DB open = server running
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
  });
});