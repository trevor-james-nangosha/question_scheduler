let nodemailer = require("nodemailer")

async function sendEmail(subject, text, htmlMessage=undefined){
    // test account to be used for testing
    // find a real email server to use during production
    let testAccount = nodemailer.createTestAccount()
        .then(account => {
            let transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.host,
                secure: account.smtp.secure,
                pool: true,
                auth: {
                    user: account.user,
                    pass: account.pass,
                }, 
            })

            // sending mail with the defined transport object
            let info = transporter.sendMail({
                from: 'Nangosha nangosha@example.com',
                to: 'trevornangosha16@gmail.com',
                subject,
                text,
                html: htmlMessage ? htmlMessage : undefined,
            }).then(info => {
                console.log(`Preview URL here: ${nodemailer.getTestMessageUrl(info)}`)
                return process.exit()
            })
              .catch(err => {
                console.error(`Could not send email: ${err}`)
                return process.exit(1)
              })
        })
        .catch(err => {
            console.error(`Could not create test account: ${err}`)
            return process.exit(1)
        })
}

module.exports = sendEmail