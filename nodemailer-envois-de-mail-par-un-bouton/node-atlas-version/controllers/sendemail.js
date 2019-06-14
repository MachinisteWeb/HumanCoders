/* jslint node: true */
exports.changeVariations = function (next, locals, request, response) {
	var debug = true,
		NA = this,
		nodemailer = NA.modules.nodemailer;
		transporter = nodemailer.createTransport('smtps://' + NA.webconfig._smtpLoginAuth + ':' + NA.webconfig._smtpPasswordAuth + '@' + NA.webconfig._smtpProviderAuth),
		mailOptions = {
			from: request.body.from,
			to: request.body.to,
			subject: request.body.subject,
			text: request.body.content
		};

	debug && console.log('debug', mailOptions);

	transporter.sendMail(mailOptions, function (error) {
		if (error) {

			// FAILLURE
			response.statusCode = 503;
			locals.specific = { success: false, error: error };
		} else {

			// SUCCESS
			response.statusCode = 200;
			locals.specific = { success: true };
		}

		next();
	});
};