import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "88c65d1b7a16bd",
      pass: "554e541e822d9b"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Vinicius Rodrigues <viniciusflexa@gmail.com>',
            subject,
            html: body
        })
    };
}