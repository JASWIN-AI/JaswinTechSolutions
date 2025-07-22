import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/jaswin-tech" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/jaswintech" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jaswintech" },
    { name: "GitHub", icon: Github, href: "https://github.com/jaswintech" }
  ];

  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gold-400">JASWIN</span> Tech Solution
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses through innovative technology solutions. Your trusted partner for digital transformation and growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold-400 smooth-transition"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <button className="text-gray-300 hover:text-gold-400 smooth-transition text-left">
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>123 Technology Drive</p>
              <p>San Francisco, CA 94105</p>
              <p>+1 (555) 123-4567</p>
              <p>enquiry@jas.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-navy-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 JASWIN Tech Solution. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
