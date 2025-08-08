interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const emailJSConfig: EmailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
};

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Dynamic import of EmailJS to avoid loading it unless needed
    const { default: emailjs } = await import('@emailjs/browser');
    
    // Initialize EmailJS
    emailjs.init(emailJSConfig.publicKey);
    
    // Prepare template parameters
    const templateParams = {
      to_email: 'sales@jaswins.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      message: formData.message,
      reply_to: formData.email
    };
    
    // Send email
    const response = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      templateParams
    );
    
    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
