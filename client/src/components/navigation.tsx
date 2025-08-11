import { Link, useLocation } from "wouter";
import React, { useState } from "react";
import logoJas from "../../../assets/jaslogo.png"; // Adjust the path as necessary

const dropdownItemStyle: React.CSSProperties = {
  padding: "0.5rem 1.5rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "#1e3a8a",
  background: "white",
  border: "none",
  transition: "background 0.2s",
};

export default function Navigation() {
  const [location] = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openConsulting, setOpenConsulting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  // Handles closing mobile menu on navigation
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <nav className="nav-root">
      <div className="nav-container">
        <div className="nav-row">
          {/* Logo */}
          <Link href="/" onClick={handleNavClick}>
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

          {/* Hamburger for mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <div className={`nav-links${mobileMenuOpen ? " open" : ""}`} style={{ padding: "0 40px" }}>
            {/* Our Company */}
            <div
                className="nav-dropdown"
                onMouseEnter={() => setOpenMenu("company")}
                onMouseLeave={() => {}}
              >
                <button
                  className={`nav-btn${openMenu === "company" ? " active" : ""}`}
                  onClick={() => setOpenMenu(openMenu === "company" ? null : "company")}
                  type="button"
                >
                  Our Company
                </button>
                {openMenu === "company" && (
                  <div className="nav-dropdown-menu" onMouseEnter={() => setOpenMenu("company")} onMouseLeave={() => setOpenMenu(null)}>
                    <Link href="/about" onClick={handleNavClick}>
                      <div style={dropdownItemStyle}>About JASWIN</div>
                    </Link>
                    <Link href="/technology-partner" onClick={handleNavClick}>
                      <div style={dropdownItemStyle}>Technology/Service Partner</div>
                    </Link>
                    <Link href="/hr-partner" onClick={handleNavClick}>
                      <div style={dropdownItemStyle}>Human Resources Partner</div>
                    </Link>
                  </div>
                )}
              </div>

            {/* Solutions */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => {}}
            >
              <button
                className={`nav-btn${openMenu === "solutions" ? " active" : ""}`}
                onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
                type="button"
              >
                Solutions
              </button>
              {openMenu === "solutions" && (
                <div className="nav-dropdown-menu"
                onMouseEnter={() => setOpenMenu("solutions")}
                onMouseLeave={() => setOpenMenu(null)}>
                  <Link href="/solutions/turnkey-projects" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>Turnkey Projects</div>
                  </Link>
                  <Link href="/solutions/product-development" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>Product Development</div>
                  </Link>
                  <Link href="/solutions/sre-managed" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>SRE/Managed Services</div>
                  </Link>
                  <Link href="/solutions/cloud-services" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>Cloud Services</div>
                  </Link>
                  <Link href="/solutions/information-security" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>Information Security</div>
                  </Link>
                  {/* Consulting Submenu */}
                  <div
                    className="nav-subdropdown"
                    onMouseEnter={() => setOpenConsulting(true)}
                    onMouseLeave={() => setOpenConsulting(false)}
                  >
                    <div style={{ ...dropdownItemStyle, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      Consulting Services &raquo;
                    </div>
                    {openConsulting && (
                      <div className="nav-dropdown-menu nav-subdropdown-menu">
                        <Link href="/solutions/consulting/bfsi" onClick={handleNavClick}>
                          <div style={dropdownItemStyle}>BFSI</div>
                        </Link>
                        <Link href="/solutions/consulting/edtech" onClick={handleNavClick}>
                          <div style={dropdownItemStyle}>EdTech</div>
                        </Link>
                        <Link href="/solutions/consulting/egovernance" onClick={handleNavClick}>
                          <div style={dropdownItemStyle}>eGovernance</div>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/solutions/ai-data-consulting" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>AI and Data Consulting</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Product */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setOpenMenu("product")}
              onMouseLeave={() => {}}
            >
              <button
                className={`nav-btn${openMenu === "product" ? " active" : ""}`}
                onClick={() => setOpenMenu(openMenu === "product" ? null : "product")}
                type="button"
              >
                Product
              </button>
              {openMenu === "product" && (
                <div className="nav-dropdown-menu"
                onMouseEnter={() => setOpenMenu("product")}
                onMouseLeave={() => setOpenMenu(null)}>
                  <Link href="/product/lms" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>JASWIN AI-LMS</div>
                  </Link>
                  <Link href="/product/ai-bfsi" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>AI-BFSI-DST & Reporting</div>
                  </Link>
                  <Link href="/product/jas-service-desk" onClick={handleNavClick}>
                    <div style={dropdownItemStyle}>JASWIN Service Desk Plus</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link href="/consulting" onClick={handleNavClick}>
              <button className={`nav-btn${isActive("/consulting") ? " active" : ""}`}>Consulting</button>
            </Link>
            <Link href="/human-capital" onClick={handleNavClick}>
              <button className={`nav-btn${isActive("/human-capital") ? " active" : ""}`}>Human Capital</button>
            </Link>
            <Link href="/contact" onClick={handleNavClick}>
              <button className={`nav-btn${isActive("/contact") ? " active" : ""}`}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        .nav-root {
          position: fixed;
          top: 0;
          left:5;
          width: 100vw;
          background: #244fc7ff;
          color: white;
          z-index: 50;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .nav-container {
          width: 100vw;
          margin: 10 auto;
          padding: 10 1rem;
        }
        .nav-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
          width: 100vw;
          margin: 0;
          padding: 0 12px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .nav-logo-img {
        height: 40px;
        width: auto;
        object-fit: contain;
        margin: 0;
        padding: 0;
        display: block;
      }
        .nav-logo-text {
          font-size: 1.25rem;
          font-weight: bold;
          color: #f59e0b;
          display: block;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-btn {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          border-bottom: none;
          transition: all 0.3s ease;
        }
        .nav-btn.active, .nav-btn:hover {
          color: #f59e0b;
          border-bottom: 2px solid #f59e0b;
        }
        .nav-dropdown {
          position: relative;
        }
        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          color: #1e3a8a;
          min-width: 220px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          border-radius: 0 0 8px 8px;
          padding: 0.5rem 0;
          z-index: 100;
          margin-top: 10px;
          
        }
        .nav-subdropdown {
          position: relative;
        }
        .nav-subdropdown-menu {
          left: 100%;
          top: 0;
          min-width: 180px;
          border-radius: 0 8px 8px 8px;
        }
        @media (max-width: 900px) {
          .nav-logo-text {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .nav-row {
            flex-direction: row;
            height: 56px;
          }
          .nav-hamburger {
            display: block;
          }
          .nav-links {
            display: none;
            flex-direction: column;
            background: #1e3a8a;
            position: absolute;
            top: 56px;
            left: 0;
            width: 100%;
            padding: 1rem 0;
            gap: 1rem;
            z-index: 100;
          }
          .nav-links.open {
            display: flex;
          }
          .nav-dropdown-menu, .nav-subdropdown-menu {
            position: static;
            min-width: 100%;
            box-shadow: none;
            border-radius: 0;
            background: #f1f5f9;
            color: #1e3a8a;
          }
        }
      `}</style>
    </nav>
  );
}