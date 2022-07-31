import Express from "express";
import cors from "cors";
import nodemailer from 'nodemailer'
const app = Express();
import 'dotenv/config'

app.use(cors())
app.use(Express.json())

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.REACT_APP_EMAIL, // generated ethereal user
      pass: process.env.REACT_APP_PASS, // generated ethereal password
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

app.post("/contact", async(req,res) => {
    const { name, email, message } = req.body

        // send mail with defined transport object
  const data = {
    from: `${name}, ${email}`, // sender address
    to: process.env.REACT_APP_EMAIL, // list of receivers
    subject: "Portfolio Message", // Subject line
    text: message, // plain text body
  };

 transporter.sendMail(data, (err) =>{
    if(err){
        res.status(400).send("Oops Something went wrong, try later")
    } else {
        res.status(200).send("Message Sent Successfully")
    }
 })

})





const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running port ${PORT}`))