const express = require('express');
const path = require('path');

const app = express();
const port = 7000;

//create http server
const expressServer = app.listen(port, () => {console.log('Webserver listening on port ' + port)});

//adding basic http endpoints
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "index.html"));});
app.get('/index.html', (req, res) => {res.sendFile(path.join(__dirname, "index.html"));});
app.get('/styles.css', (req, res) => {res.sendFile(path.join(__dirname, "styles.css"));});

//static files
app.use('/assets', express.static(path.join(__dirname, "assets")));