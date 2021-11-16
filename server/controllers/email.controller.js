const emailService = require("../services/email.service")

class EmailController {
    async send(req, res, next){
        try{
            emailService.sendEmail(req.body.text, req.body.author)
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new EmailController()