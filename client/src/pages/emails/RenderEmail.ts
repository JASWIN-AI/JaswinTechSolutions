// src/pages/emails/renderEmail.ts
import { render } from "@react-email/render";
import { createElement } from "react";
import { ContactFormData } from "./ContactFormData";
import { Html, Body, Text, Section } from "@react-email/components";

export const RenderContactEmail = (formData: ContactFormData) => {
  return render(
    createElement(
      Html,
      null,
      createElement(
        Body,
        null,
        createElement(
          Section,
          null,
          createElement(Text, null, `Name: ${formData.name}`),
          createElement(Text, null, `Email: ${formData.email}`),
          formData.phone && createElement(Text, null, `Phone: ${formData.phone}`),
          formData.company && createElement(Text, null, `Company: ${formData.company}`),
          createElement(Text, null, `Message: ${formData.message}`)
        )
      )
    )
  );
};