'use strict';

const express = require('express');

//Define constants

const PORT = 8080;
const HOST = '0.0.0.0';

//Define App

const app = express();

app.get('/',(req,res) => {
	res.send("Hello World. Welcome to our beloved application.")
});

app.listen(PORT,HOST);

console.log(`Application Running on http://${HOST}:${PORT}`);