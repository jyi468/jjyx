// Try to replace this with phoenix instead of using expressjs node.js framework for server

const express = require('express');
const bodyParser = require('body-parser');
// Have to use process.env.PORT so that Heroku can set it here
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static('${__dirname}/../react-client/dist'));

// Route HTTP GET requests to * by sending the path to index.html
app.get('localhost:8080', (req, res) => {
    res.sendFile(path.resolve('${__dirname}/../react-client/dist/index.html'));
});

// Get main page json
app.get('/react-client/resources/all-currencies.json', (req, res) => {
    res.sendFile(path.resolve('${__dirname}/../react-client/resources/all-currencies.json'));
});

// Start application on port
app.listen(PORT, () => {
    console.log('listening on port ${PORT}!');
});