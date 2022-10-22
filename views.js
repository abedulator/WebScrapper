const http = require('http');
const https = require('https');

const port = 3000;
const server = http.createServer((req, res) => {
	https.get('https://www.youtube.com/watch?v=BxV14h0kFs0', (resp) => {
	let data = '';
	resp.on('data', (chunk) => {
		data += chunk;
	});
	resp.on('end', () => {
		console.log(data);
		
	});
	}).on("error", (err) => {
		console.log("Error: " + err.message);
	});
	
	
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end("<h1>Holiiiiiiiiiiiii</h1>");
});
server.listen(port, () => {console.log(`Server running at port ${port}`);});
