const nodemailer = require("nodemailer")

class EmailService {

    async sendEmail(name, company, phone, text, author, subject){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.APP_EMAIL,
                pass: process.env.APP_EMAIL_PASS,
            },
          })

        const result = await transporter.sendMail({
            from: `"Предприятие 'Фотон'" <${process.env.APP_EMAIL}>`,
            to: 'bromankoya@gmail.com',
            subject: subject,
            text: 'Это сообщение с предприятия "Фотон"',
            html: `${text}<br><br>
            Имя отправителя: ${name}<br>
            Компания: ${company}<br>
            Номер телефона: ${phone}<br>
            Адрес отправителя: ${author}`,
          })

          console.log(result)
    }

}

module.exports = new EmailService()