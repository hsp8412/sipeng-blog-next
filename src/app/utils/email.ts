export const sendMessage = async (
  firstName: string,
  lastName: string,
  message: string,
  replyTo: string
) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  message = message.replace(/\n/g, "<br>");
  const msg = {
    to: process.env.SENDGRID_EMAIL_ADDRESS,
    from: process.env.SENDGRID_EMAIL_ADDRESS,
    subject: "New message from Sipeng's Blog contact form.",
    html: `<div>New Message From ${firstName} ${lastName}: <br><div>${message}</div></div>`,
    replyTo: replyTo,
  };
  try {
    await sgMail.send(msg);
  } catch (e) {
    throw e;
  }
};
