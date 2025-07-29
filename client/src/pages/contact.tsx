import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/emailjs";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendContactEmail(formData);
      
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

        // Hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or contact us directly at enquiry@jas.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "JASWIN AI Solutions",
      content: ["Om Sai Avenue,Shop No.109,1St Floor,",
                "River Residency Road, near Swaraj capital,",
                "MIDC, Chikhali, Pimpri-Chinchwad,",
                "Pune-411062, Maharashtra", 
                "India"
              ]
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: ["+91 87880 58772"]
    },
    {
      icon: Mail,
      title: "Email Address",
      content: ["enquiry@jas.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday & Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-navy-800 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with innovative technology solutions? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-gold-500 mt-1">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800">{info.title}</h4>
                      <div className="text-gray-600">
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Send Us a Message</h3>
              
              {showThankYou ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <h4 className="font-semibold text-green-800">Thank You!</h4>
                      <p className="text-green-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
