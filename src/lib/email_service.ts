import { SMTP_PASSWORD, SMTP_USERNAME } from "$env/static/private";
import nodemailer from "nodemailer";

export interface EmailConfig {
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

export async function sendEmail(config: EmailConfig): Promise<void> {
  try {
    const info = await transporter.sendMail(config);
    console.log("Email sent successfully!");
    console.log("Message ID: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}

