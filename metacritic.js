const https = require('https');

https.get('https://www.metacritic.com/music/' + process.argv[2], (resp) => {
	let data = '';
	resp.on('data', (chunk) => {
		data += chunk;
	});
	resp.on('end', () => {
		console.log(data);
		console.log(process.argv[2]);
	});
}).on("error", (err) => {
	console.log("Error: " + err.message);
});

