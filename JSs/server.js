const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password',
    },
});

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: 'your_email@gmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email Sent');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
