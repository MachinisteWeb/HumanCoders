/* jslint node: true */
exports.main = function (next, request, response) {
	var debug = true,
		nodemailer = require('nodemailer'),
		smtpLoginAuth = "",
		smtpPasswordAuth = "",
		smtpProviderAuth = "",
		transporter = nodemailer.createTransport('smtps://' + smtpLoginAuth + ':' + smtpPasswordAuth + '@' + smtpProviderAuth);
		body = [];

	request.on('data', function (chunk) {
		body.push(chunk);
	}).on('end', function () {
		var mailOptions;

		body = JSON.parse(Buffer.concat(body).toString());	
		mailOptions = {
			from: body.from,
			to: body.to,
			subject: body.subject,
			text: body.content
		};

		debug && console.log('debug', mailOptions);

		transporter.sendMail(mailOptions, function (error) {
			if (error) {

				// FAILLURE
				response.writeHead(503, {
					"Content-Type": "application/json; charset=utf-8"
				});
				next({ success: false, error: error });
			} else {

				// SUCCESS
				response.writeHead(200, {
					"Content-Type": "application/json; charset=utf-8"
				});
				response.statusCode = 200;
				next({ success: true });
			}
		});
	});
};