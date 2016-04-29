var http = require('http');
var randomSong = require('./randomfacts')
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-type':
	'text/plain' });

	response.write(randomSong[Math.floor(Math.random()*randomSong.length)]);
	response.end();
}).listen(8888);