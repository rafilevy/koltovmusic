const express = require("express");
const nodemailer = require("nodemailer");

const emailClient = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});


const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res)=> {
    res.sendFile("index.html");
});
app.post("/contact", (req, res)=> {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let date = new Date();

    if (name && email && message) {
        let body = `Message from: ${name} <${email}>\nSent at ${date.toUTCString()}\n\n${message}`;
        const mailOptions = {
            from: email,
            to: "hello@koltovmusic.com",
            subject: "Message from koltovmusi.com contact form",
            text: body
        }
        emailClient.sendMail(mailOptions);
        res.sendStatus(200);
    } else {
        res.status(400).send("Invalid params.");
    }
});
app.listen(80);