/* jslint node: true */
var http = require("http"),
	fs = require("fs"),
	httpPort = 7749,
	httpServer;

httpServer = http.createServer(function (request, response) {
	var router = {
		"/": {
			view: "index.htm",
			controller: false
		},
		"/send-email/": {
			view: false,
			controller: "sendemail.js"
		}
	},
	view = router[request.url].view,
	controller = router[request.url].controller,
	statusCode = (router[request.url].view) ? 200 : 404;

	if (view) {	
		fs.readFile('./views/' + view, "utf-8", function (err, content) {
			if (err) { 
				console.log("We cannot open " + view + " view file.");
			}

			response.writeHead(statusCode, {
				"Content-Type": "text/html; charset=utf-8"
			});

			response.end(content || 'Error 404');
		});
	}

	if (controller) {
		require('./controllers/' + controller).main(function (content) {
			response.end(JSON.stringify(content, null, '    '));
		}, request, response);
	}
});

httpServer.listen(httpPort, function () {
  console.log("Server listening on: http://localhost:%s", httpPort);
});