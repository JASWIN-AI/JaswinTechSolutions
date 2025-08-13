import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
// Add these imports at the top with your other icon imports
import { Linkedin, Twitter, Facebook, Github } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  // Add this to your existing socialLinks array
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/jaswin-tech" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/jaswintech" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jaswintech" },
    { name: "GitHub", icon: Github, href: "https://github.com/jaswintech" }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://resend-backend.netlify.app/.netlify/functions/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();
      const success = response.ok && result.success;

      if (success) {
        setShowThankYou(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });

        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours."
        });

        setTimeout(() => setShowThankYou(false), 5000);
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or contact us directly at sales@jaswins.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Contact Us</h1>
          <p className="text-blue-800 max-w-md mx-auto">
            We're excited to hear what's on your mind - drop us a line!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100">
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Send us a message</h2>
              
              {showThankYou ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 mb-1">Thank You!</h3>
                  <p className="text-sm text-green-700">We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", label: "Full Name", type: "text", required: true },
                    { id: "email", label: "Email", type: "email", required: true },
                    { id: "phone", label: "Phone", type: "tel", required: false },
                    { id: "company", label: "Company", type: "text", required: false }
                  ].map((field) => (
                    <div key={field.id} className="relative">
                      <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={formData[field.id as keyof ContactFormData]}
                        onChange={handleInputChange}
                        required={field.required}
                        className="peer h-10 w-full border-b-2 border-gray-300 text-sm placeholder-transparent focus:outline-none focus:border-blue-500"
                        placeholder=" "
                      />
                      <Label
                        htmlFor={field.id}
                        className="absolute left-0 -top-3 text-gray-600 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                      >
                        {field.label}{field.required && " *"}
                      </Label>
                    </div>
                  ))}

                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="peer w-full border-b-2 border-gray-300 text-sm placeholder-transparent focus:outline-none focus:border-blue-500 pt-3"
                      placeholder=" "
                    />
                    <Label
                      htmlFor="message"
                      className="absolute left-0 -top-5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0.5 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
                    >
                      Your Message *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Contact info</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Location</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    GALA NO. 06/A, GOYAL INDUSTRIAL PREMISES,<br />
                    J-514, MIDC, BHOSARI, PUNE-411039
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/vUgzqtmhfsvfZp45A?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs text-blue-600 hover:underline"
                  >
                    View on Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Phone</h3>
                  <a href="tel:8265016045" className="text-xs text-gray-600 hover:text-blue-600 mt-1 block">
                    +91 82650 16045
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Email</h3>
                  <a href="mailto:info@jaswins.com" className="text-xs text-gray-600 hover:text-blue-600 mt-1 block">
                    info@jaswins.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Hours</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Mon-Fri: 9AM-6PM<br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center mt-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Connect With Us</h3>
                <div className="flex gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}