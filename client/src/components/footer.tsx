import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import logoJas from "../../../assets/jaslogo.png"; // Adjust the path as necessary

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About JASWIN", path: "/about" },
    { name: "Solutions", path: "/solutions/turnkey-projects" },
    { name: "Consulting", path: "/consulting" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/jaswin-tech" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/jaswintech" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jaswintech" },
    { name: "GitHub", icon: Github, href: "https://github.com/jaswintech" }
  ];

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <Link href="/" className="footer-logo-link">
            <div className="nav-logo">
              <img src={logoJas} alt="JASWIN Logo" className="nav-logo-img" 
               style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
              margin: 0,
              padding: 0,
              display: "block"
            }}
              />
              
            </div>
          </Link>
            <p className="footer-desc">
              Empowering businesses through innovative technology solutions. Your trusted partner for digital transformation and growth.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  <social.icon style={{ width: '20px', height: '20px' }} />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <button className="footer-link-btn">{link.name}</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <p><b>JASWIN AI Solutions</b></p>
              <p>Om Sai Avenue, Shop No.109, 1St Floor,</p>
              <p>River Residency Road, near Swaraj capital,</p>
              <p>MIDC, Chikhali, Pimpri-Chinchwad, Pune, Maharashtra 411026</p>
              <p>+91 8265016045</p>
              <p>sales@jasitsol.com</p>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer-copyright">
          <p>
              &copy; 2025 JASWIN AI Solutions. All rights reserved. |{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>
            </p>
        </div>
      </div>
      <style>{`
        .footer-root {
          background: #1e3a8a;
          color: white;
          padding: 2.5rem 0 0 0;
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section {
          min-width: 0;
        }
        .footer-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .footer-desc {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        .footer-social-link {
          color: #d1d5db;
          transition: color 0.3s;
        }
        .footer-social-link:hover {
          color: #f59e0b;
        }
        .footer-heading {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f59e0b;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-link-btn {
          color: #d1d5db;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 0;
          font-size: 1rem;
          transition: color 0.3s;
        }
        .footer-link-btn:hover {
          color: #f59e0b;
        }
        .footer-contact p {
          margin: 0.25rem 0;
          color: #d1d5db;
          font-size: 0.95rem;
        }
        .footer-copyright {
          border-top: 1px solid #374151;
          padding: 1.5rem 0 1rem 0;
          text-align: center;
          color: #d1d5db;
          font-size: 0.95rem;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .footer-section {
            margin-bottom: 1.5rem;
          }
          .footer-social {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}