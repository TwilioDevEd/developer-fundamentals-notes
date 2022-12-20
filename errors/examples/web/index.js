const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

console.log(`Starting server on port ${process.env.PORT}`);
app.listen(process.env.PORT);