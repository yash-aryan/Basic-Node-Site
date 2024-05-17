const express = require('express');
const app = express();
const port = 8080;
const options = { root: __dirname };

app.use((req, res, next) => {
	console.log(`Incoming request: ${req.path}`);
	next();
});

app.get('/', (req, res) => {
	res.sendFile('index.html', options);
});

app.get('/about', (req, res) => {
	res.sendFile('about.html', options);
});

app.get('/contact-me', (req, res) => {
	res.sendFile('contact-me.html', options);
});

app.get('*', (req, res) => {
	res.sendFile('error.html', options);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
