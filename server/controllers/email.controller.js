const emailService = require("../services/email.service")

class EmailController {
    async send(req, res, next){
        try{
            emailService.sendEmail(req.body.name, req.body.company, req.body.phone, req.body.text, req.body.author, req.body.subject)
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new EmailController()