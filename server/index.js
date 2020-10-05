const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;
const publicDir = path.resolve(__dirname, '..', 'public');

app.use(morgan('dev'));
app.use('/', express.static(publicDir));

app.listen(port, () => {
  console.log(`Server listening on port ${PORT}`);
});
