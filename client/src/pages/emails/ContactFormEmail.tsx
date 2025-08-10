import {
  Html,
  Head,
  Body,
  Text,
  Section,
  Heading,
} from "@react-email/components";
import { ContactFormData } from "./ContactFormData";

// Changed to default export
const ContactFormEmail = ({
  name,
  email,
  phone,
  company,
  message,
}: ContactFormData) => (
  <Html>
    <Head />
    <Body style={body}>
      <Section style={container}>
        <Heading style={heading}>New Contact Form Submission</Heading>
        <Text style={paragraph}>
          <strong>Name:</strong> {name}
        </Text>
        <Text style={paragraph}>
          <strong>Email:</strong> {email}
        </Text>
        {phone && (
          <Text style={paragraph}>
            <strong>Phone:</strong> {phone}
          </Text>
        )}
        {company && (
          <Text style={paragraph}>
            <strong>Company:</strong> {company}
          </Text>
        )}
        <Text style={paragraph}>
          <strong>Message:</strong> {message}
        </Text>
      </Section>
    </Body>
  </Html>
);

export default ContactFormEmail; // Default export here

// Email Styling
const body = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const heading = {
  fontSize: "24px",
  color: "#333333",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  color: "#555555",
  marginBottom: "10px",
};