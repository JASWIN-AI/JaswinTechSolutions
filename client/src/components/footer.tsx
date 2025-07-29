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
    <footer style={{
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '3rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              <span style={{ color: '#f59e0b' }}>JASWIN</span> AI Solutions
            </div>
            <p style={{
              color: '#d1d5db',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              Empowering businesses through innovative technology solutions. Your trusted partner for digital transformation and growth.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#d1d5db',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = '#f59e0b';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = '#d1d5db';
                  }}
                  aria-label={social.name}
                >
                  <social.icon style={{ width: '20px', height: '20px' }} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#f59e0b'
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.path} style={{ marginBottom: '0.5rem' }}>
                  <Link href={link.path}>
                    <button style={{
                      color: '#d1d5db',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.color = '#f59e0b';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.color = '#d1d5db';
                    }}>
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 style={{
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#f59e0b'
            }}>Contact Info</h4>
            <div style={{
              fontSize: '0.875rem',
              color: '#d1d5db',
              lineHeight: '1.5'
            }}>
              <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>JASWIN AI Solutions</p>
              <p style={{ margin: '0.25rem 0' }}>Om Sai Avenue,Shop No.109,1St Floor,</p>
              <p style={{ margin: '0.25rem 0' }}>River Residency Road, near Swaraj capital,</p>
              <p style={{ margin: '0.25rem 0' }}>MIDC, Chikhali, Pimpri-Chinchwad, Pune, Maharashtra 411062</p>
              <p style={{ margin: '0.25rem 0' }}>+91 87880 58772</p>
              <p style={{ margin: '0.25rem 0' }}>enquiry@jas.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#d1d5db'
        }}>
          <p style={{ margin: 0 }}>&copy; 2024 JASWIN Tech Solution. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
