const http = require('http');
const https = require('https');
require('dotenv').config()

const port = 3000;
let data = '';
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve,ms));
}

async function pagina(res){
while(true){
https.get('https://www.youtube.com/watch?v=BxV14h0kFs0', (resp) => {
	data = '';
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
		
		}
		else{
		res.write(process.env.HTML_PAGE);
		res.end("<h2> Este video tiene <u>" + data.substring(pos+27,(pos+35)) + "</u> visitas </h2></div>");
		break;
		}
		console.log("Iteracion");
		
		await sleep(5000);
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
