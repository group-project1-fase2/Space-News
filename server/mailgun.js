require('dotenv').config();
const emailRivari = 'muchammadrvr22@gmail.com';
const emailFauza = 'umardastan2014@gmail.com';
const emailDicky = 'dickyundead@gmail.com';
const emailHaris = 'hpratama324@gmail.com';


const mailgun = require("mailgun-js");
const api_key = process.env.APIKEY;
const DOMAIN =  process.env.DOMAIN;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data =
    {
        from: 'From Space News <hpratama324@gmail.com>',
        to: emailRivari,
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };

mg.messages().send(data, function (error, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(body);
    }
});