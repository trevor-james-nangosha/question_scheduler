const sendEmail = require('../utilities/emailClient')
const messages = require("../utilities/messages")
const { argv } = require('process')

const SENDER_EMAIL = "Nangosha nangosha@example.com"

// Apparently, the Ethereal API only sends out a single e-mail for each process 
// even when you call it for elements in an array using the `forEach()` method.
// A workaround is to start a new shell process for each of the elements in the array 
// and call the `sendMail()` API on them. May not scale well for many elements due 
// to resource usage, but it makes for an interesting simple solution.

sendEmail(SENDER_EMAIL, argv[2], messages.welcome.subject, messages.welcome.content)