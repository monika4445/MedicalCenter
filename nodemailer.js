const nodemailer = require('nodemailer');
 
let mailTransporter = nodemailer.createTransport({
service: "gmail",
auth: {
   user: "monika.zaqaryan2002@gmail.com",
   pass: "qsjfffxzyzwunmgy"
},
tls: {
   rejectUnauthorized: false
}
 
});
 
let details = {
   from: "monika.zaqaryan2002@gmail.com",
   to: "monikazaqaryan55@gmail.com", //req.body.email
   subject: "You booked appointment successfully!",
   text: "Congrats! You booked appointment successfully! We will wait for you at your check-in time.",
}
 
mailTransporter.sendMail(details, (err, info) => {
if(err){
   console.log("Our program has an error. ", err);
}
else{
   console.log('Message has sent: ' + info.response);
}
 
})
 
 