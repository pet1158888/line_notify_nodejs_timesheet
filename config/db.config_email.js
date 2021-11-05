const Nodemailer = require("nodemailer");

const Service = "gmail";
const Email = "erp.sirilaboratories@gmail.com";
const Password = "Siri1234";

const mail_transport = Nodemailer.createTransport({
  service: Service,
  auth: {
    user: Email,
    pass: Password,
  },
});

module.exports = mail_transport;
