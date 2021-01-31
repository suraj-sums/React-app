const nodemailer = require('nodemailer');
const { SMTP_PORT, SMTP_HOST, SMTP_USER, SMTP_PASS, FROM_NAME, FROM_EMAIL, TO_EMAIL } = process.env;

const from = `"${FROM_NAME}" <${FROM_EMAIL}>`;
let mailConfig;
if (process.env.NODE_ENV === 'production') {
  // all emails are delivered to destination
  mailConfig = {
    port: SMTP_PORT,
    secure: false,
    host: SMTP_HOST,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  };
} else {
  // all emails are catched by ethereal.email
  mailConfig = {
    port: 587,
    host: 'smtp.ethereal.email',
    auth: { user: 'frederik7@ethereal.email', pass: 'x6RQreZEgWNHaWNjTg' },
  };
}

const transporter = nodemailer.createTransport(mailConfig);

const sendEmail = async (params) => {
  const { subject, body } = params;
  return await transporter.sendMail({ to: TO_EMAIL, from, subject, html: body });
};

module.exports.sendEmail = sendEmail;
