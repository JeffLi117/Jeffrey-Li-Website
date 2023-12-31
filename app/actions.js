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
    try{
      const res = await sgMail.send(msg);
      return {success: res[0].statusCode}
    } catch (err) {
      return { error: err.message };
    } 
}

export async function verifyReCAPTCHA(captchaValue) {
  const SITE_SECRET = process.env.SITE_SECRET;
  try{
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`
    );
    return {success: data}
  } catch (err) {
    return { error: err.message };
  } 
}