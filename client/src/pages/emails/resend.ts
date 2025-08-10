  import { Resend } from "resend";
  import { ContactFormData } from "./ContactFormData";
  import { RenderContactEmail } from "./renderEmail";


  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  export const sendContactEmail = async (formData: ContactFormData) => {
    try {
      const emailHtml = RenderContactEmail(formData);

      const { error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["your-email@example.com"],
        subject: `New message from ${formData.name}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend error:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  };