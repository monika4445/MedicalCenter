const cron = require("node-cron");
const nodemailer = require("nodemailer");
const { getAll } = require("./models/users")//retrieve users email from user model

const {SENDER_EMAIL} = process.env;
const {SENDER_PASS} = process.env;

const users = getAll();

class Nodemailer{
 
    sendEmail(user){
      transporter.sendMail(mailOptions, (error, info) => {
          
         mailOptions.to = user;

         if (error) {
              throw error;
          } else {
              console.log(`
              Email successfully sent at ${new Date()}
              Info: ${info.response}
              `);
          }
      })
   }

   
   callbackSchedule(){
       console.log("-- RUNNING THE SCHEDULED CRON JOB --" + new Date());
       users.map(async(user)=>{
         try{
            await sendEmail(user.email);
            console.log(`Email sent successfully to ${user}`);
         }
         catch(err){
            console.log(`Email was not sent to ${user}`);
            console.log(err);
        }
       })
   }
   


}

let transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
       user: SENDER_EMAIL,
       pass: SENDER_PASS
   }
})

let mailOptions = {
   from: SENDER_EMAIL,
   to: "useremail@gmail.com",
   subject: "Booked Appointment",
   html: `<h1>Welcome</h1>
          <p>It is a reminder</p>
          <p>You booked an appointment</p>`
}

cron.schedule("*/1 * * * *", () => {
   Nodemailer.callbackSchedule();
})

