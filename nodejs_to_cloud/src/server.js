const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('<<< Hello World sent to Browser at: ' + new Date());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info('<<< server is using Node.js version: ' + process.version);
  console.info('<<< server listening on port ' + port);
});
