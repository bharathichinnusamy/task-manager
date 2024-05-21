const mailgun = require('mailgun-js')
const domain = 'sandbox9e44ad3fd0ac47b4860b886122e13191.mailgun.org'

const mg = mailgun(({ apiKey: process.env.MAILGUN_API_KEY, domain: domain }))

const sendWelcomeEmail = (name, email) => {
    mg.messages().send({
        to: 'lcsbharathi@gmail.com',
        from: 'Excited User <me@samples.mailgun.org>',
        subject: 'thanks for joining in',
        text: `welcome to the app,${name}.let me know how you get along with the app`


    }), function (error, body) {
        console.log(body)

    }
}

const sendCancellationEmail = (name, email) => {
    mg.messages().send({
        to: 'lcsbharathi@gmail.com',
        from: 'Excited User <me@samples.mailgun.org>',
        subject: 'your account has been cancelled',
        text: `goodbye,${name}.is there anything that we can help to get back you on board?`

    })

}
module.exports = { sendWelcomeEmail,sendCancellationEmail }