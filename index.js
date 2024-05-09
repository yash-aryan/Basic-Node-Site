const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	const myURL = new URL(req.url, `http://${req.headers.host}`);
	const filePath = myURL.pathname === '/' ? './index.html' : `.${myURL.pathname}.html`;

	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			fs.readFile('./error.html', (e, errorPageData) => res.end(errorPageData));
			return;
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		res.end();
	});
}).listen(8080);
