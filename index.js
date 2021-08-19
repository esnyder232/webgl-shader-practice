const express = require('express');
const path = require('path');

const app = express();
const port = 7000;

//create http server
const expressServer = app.listen(port, () => {console.log('Webserver listening on port ' + port)});

//adding basic http endpoints
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "index.html"));});

//just return everything else. I don't care.
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, "/", req.baseUrl));
});