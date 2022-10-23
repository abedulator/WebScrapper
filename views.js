const http = require('http');
const https = require('https');

const port = 3000;
let data = '';
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve,ms));
}

async function pagina(res){
while(true){
https.get('https://www.youtube.com/watch?v=BxV14h0kFs0', (resp) => {
	
	resp.on('data', (chunk) => {
		data += chunk;
	});
	resp.on('end', () => {
		console.log("Joe");
		
	});
	}).on("error", (err) => {
		console.log("Error: " + err.message);
	});
	
	

	pos = data.search("interactionCount");
	console.log(pos);

		if(pos == -1){
		res.write("<h1>Cargando....</h1>");
		}
		else{
		res.end("<h1> Este video tiene " + data.substring(pos+27,(pos+35)) + " Visitas </h1>");
		}
		console.log("Iteracion");
		
		await sleep(10000);
		pos = data.search("interactionCount");
		console.log(data.substring(pos+27,(pos+35)));
		}
	
}
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	pagina(res);
	
});
server.listen(port, () => {console.log(`Server running at port ${port}`);});
