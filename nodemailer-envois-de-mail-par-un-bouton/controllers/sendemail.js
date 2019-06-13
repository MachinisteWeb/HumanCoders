/* jslint node: true */
exports.changeVariations = function (next, locals, request, response) {
	var NA = this,
		nodemailer = NA.modules.nodemailer;
		/* transporter = nodemailer.createTransport('<smtps://>')*/;

	// Send mail with defined transport object.
	/*transporter.sendMail('<mailOption>', function (error) {
		if (error) {

			// FAILLURE
			locals.specific = { error: 'Unknown Error' };
		} else {

			// SUCCESS
			locals.specific = { success: 'OK' };
		}

		next();
	});*/

	// This is a send email mockup
	setTimeout(function () {
		if (true) {
			locals.specific = { success: 'OK' };
		} else {
			locals.specific = { error: 'Unknown Error' };
		}

		next();
	}, 1000);

};