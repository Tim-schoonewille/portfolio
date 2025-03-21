import { sendEmail, type EmailConfig } from "$lib/email_service.js";

export const actions = {
  sendMail: async ({ request }) => {
    const formData = await request.formData();

    const emailConfig: EmailConfig = {
      from: formData.get("name")?.toString() || "tiema.jwz@gmail.com",
      to: "tim.schoonewille@gmail.com",
      subject: `New message from your portfolio website!: ${formData.get(
        "subject"
      )}`,
      html: `<h2>New message from: ${formData.get("name")}</h2>
      <p>Email: ${formData.get("email")}</p>
      <p>${formData.get("message")}</p>`,
      text: `Afzender: ${formData.get("name")}\n
      Email: ${formData.get("email")}\n
      Bericht:\n${formData.get("message")}`,
    };
    await sendEmail(emailConfig);
  },
};
