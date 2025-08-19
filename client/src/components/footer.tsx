import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, Instagram, Youtube, TwitterIcon } from "lucide-react";
import logoJas from "../../../assets/jaslogo.png";

export default function Footer() {
  const ourcompanylinks = [
    { name: "Home", path: "/" },
    { name: "About JASWIN", path: "/about" },
    { name: "Technology/Service Partner", path: "/technology-partner" },
    { name: "Human Resources Partner", path: "/hr-partner" },
  ];

  const solutionslinks = [
    { name: "Turnkey Projects", path: "/solutions/turnkey-projects" },
    { name: "Product Development", path: "/solutions/product-development" },
    { name: "SRE/Managed Services", path: "/solutions/sre-managed" },
    { name: "Cloud Services", path: "/solutions/cloud-services" },
    { name: "Information Security", path: "/solutions/information-security" },
  ];

  const productslinks = [
    { name: "JASWIN AI-LMS", path: "/product/lms" },
    { name: "AI-BFSI-DST & Reporting", path: "/product/ai-bfsi" },
    { name: "JASWIN Service Desk Plus", path: "/product/jas-service-desk" },
  ];

  const contactLinks = [
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jaswinai-ai-71272737b/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/JaswinAi" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/jaswinaillp/" },
    { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/channel/UCkjDXCGKFmYL0HVZ2K4VTiw" }
  ];

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Company</h4>
            <ul className="footer-links">
              {ourcompanylinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              {solutionslinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              {productslinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div className="footer-section">
            <h4 className="footer-heading">More</h4>
            <ul className="footer-links">
              <li>
                <Link href="/consulting" className="footer-link">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/human-capital" className="footer-link">
                  Human Capital
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <social.icon className="social-icon" />
              </a>
            ))}
          </div>
          
          <div className="footer-bottom-content">
            <div className="copyright">
              &copy; {new Date().getFullYear()} JASWIN AI Solutions. All rights reserved.
            </div>
            <div className="legal-links">
              <Link href="/privacy-policy" className="legal-link">
                Privacy Policy
              </Link>
              <span className="divider">|</span>
              <Link href="/terms-of-service" className="legal-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: linear-gradient(135deg, #1a3a8f 0%, #244fc7 100%);
          color: white;
          padding: 3rem 0 0;
          font-family: 'Inter', sans-serif;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section {
          display: flex;
          flex-direction: column;
        }
        
        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem; /* Reduced from 0.8rem */
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          display: inline-block;
        }
        
        .footer-link:hover {
          color: #f59e0b;
          transform: translateX(3px);
        }
        
        /* Bottom Section Styles */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1.25rem;
        }
        
        .social-link {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #f59e0b;
          transform: translateY(-2px);
        }
        
        .social-icon {
          width: 20px;
          height: 20px;
        }
        
        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        
        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }
        
        .legal-links {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-size: 0.85rem;
        }
        
        .legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .legal-link:hover {
          color: white;
        }
        
        .divider {
          color: rgba(255, 255, 255, 0.3);
        }
        
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .footer-bottom-content {
            flex-direction: row;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          
          .footer-section {
            align-items: flex-start;
          }
          
          .footer-heading::after {
            left: 0;
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}