const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from basic server')
})

app.listen(port);

module.exports = app;





