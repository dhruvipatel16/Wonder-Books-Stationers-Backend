
var email = require("emailjs/email");
var mail = {

   sendMail: function (mail, callback) {
      console.log(mail)
      var server = email.server.connect({
         user: 'wonderbooksnstationers@gmail.com',
         password: 'wonderbooks',
         host: "smtp.gmail.com",
         ssl: true,
         port: 465
      });

    
      server.send({
         
         text: mail.message,
         from: 'wonderbooksnstationers@gmail.com',
         to: mail.name,
         subject: mail.subject
      }, callback);
   }
}
module.exports = mail;
