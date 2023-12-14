'use server';
const sgMail = require('@sendgrid/mail');

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
      console.log('sgMail finished', res);
      return {success: res[0]}
    } catch (err) {
      console.log(err);
      return { error: err.message };
    } 
}

 async function addContactToDB(formData) {
    // Assuming 'ContactForms' is the name of your table
    const { data, error } = await supabase
      .from('ContactForms')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Map other fields accordingly
        },
      ])
      .select()

    if (error) {
      console.error('Error inserting data:', error);
      // add error handling for client-side for not saving to DB
      return { error: err.message };
    } else {
      try {
        console.log('Data inserted successfully:', data[0]);
        await sendEmail(data[0]);
        return {success: data[0].id}
      } catch (err) {
        console.log("SendGrid err is: ", err.message)
        // handle error for SendGrid failure
        return { error: err.message };
      }
    }
}