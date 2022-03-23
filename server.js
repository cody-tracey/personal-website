const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require('./config');

let transport = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
};

let transporter = nodemailer.createTransport(transport)
transporter.verify((err, success) => {
    if(err) console.log(err);
    else console.log('Server is ready to take messages');
});

router.post('/send', (req,res,next) =>{
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    let content = `name: ${name}\nemail: ${email}\nmessage: ${message};`

    let mail = {
        from: name,
        to: creds.USER,
        subject: 'New Message from Contact Form',
        text: content
    };

    transporter.sendMail(mail, (err,data) => {
        if(err) res.json({status: 'fail'});
        else res.json({status: 'success'});

    });
});



const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log("Server is Running!"))