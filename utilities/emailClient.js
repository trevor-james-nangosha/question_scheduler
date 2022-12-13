let nodemailer = require("nodemailer")

function sendEmail(from, to, subject, text, htmlMessage=undefined){
    // test account to be used for testing
    // find a real email server to use during production
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        pool: true,
        secure: false,
        auth: {
            user: 'earnestine.mann@ethereal.email',
            pass: 'hETsVcPgHrDhWbxD1u'
        }
    });

    // sending mail with the defined transport object
    transporter.sendMail({
        from,
        to,
        subject,
        text,
        html: htmlMessage ? htmlMessage : undefined,
    }).then(info => {
        console.log(`Preview URL here: ${nodemailer.getTestMessageUrl(info)}`)
        return process.exit()
    }).catch(err => {
        console.error(`Could not send email: ${err}`)
        return process.exit(1)
    })

}

module.exports = sendEmail