const express = require('express');
const routes = require('./routes');

const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.static(__dirname + '/public'));

routes(app);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
