'use server';
const sgMail = require('@sendgrid/mail');
const axios = require("axios");
require("dotenv").config();

export async function sendEmail(data) {
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);
    const msg = {
        to: process.env.OWNER_EMAIL,
        from: process.env.SENDGRID_VERIFIED_EMAIL,
        subject: 'Portfolio contact form submission',
        html:  `<div>
        <h1>You have a new contact request!</h1>
        <ul>
          <li>Sender Name: ${data.name}</li>
          <li>Sender Email: ${data.email}</li>
          <li>Sender Message: ${data.message}</li>
        </ul>
        </div>
      `,
    };
    console.log(msg);
    try{
      console.log('sgMail started');
      const res = await sgMail.send(msg);
      console.log('sgMail finished');
      console.log('res[0].statusCode ', res[0].statusCode);
      return {success: res[0].statusCode}
    } catch (err) {
      console.log(err);
      return { error: err.message };
    } 
}

export async function verifyReCAPTCHA(captchaValue) {
  const SITE_SECRET = process.env.SITE_SECRET;
  try{
    console.log('verifyReCAPTCHA started');
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`
    );
    console.log('verifyReCAPTCHA finished');
    console.log('data ', data);
    return {success: data}
  } catch (err) {
    console.log(err);
    return { error: err.message };
  } 
  
}