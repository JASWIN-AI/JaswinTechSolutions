import { Link, useLocation } from "wouter";
import React, { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (path: string) => location === path;
  // Add this state at the top of your component:
  const [openConsulting, setOpenConsulting] = useState(false);
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#1e3a8a',
      color: 'white',
      zIndex: 50,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          {/* Logo */}
          <Link href="/">
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                <span style={{ color: '#f59e0b' }}>JASWIN</span> AI Solutions
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* 1. Our Company */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenMenu("company")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: openMenu === "company" ? '#f59e0b' : 'white',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: openMenu === "company" ? '2px solid #f59e0b' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Our Company
              </button>
              {/* Dropdown */}
              {openMenu === "company" && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  color: "#1e3a8a",
                  minWidth: "220px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  borderRadius: "0 0 8px 8px",
                  padding: "0.5rem 0"
                }}>
                  <Link href="/about">
                    <div style={dropdownItemStyle}>About JASWIN</div>
                  </Link>
                  <Link href="/technology-partner">
                    <div style={dropdownItemStyle}>Technology/Service Partner</div>
                  </Link>
                  <Link href="/hr-partner">
                    <div style={dropdownItemStyle}>Human Resources Partner</div>
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Solutions */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: openMenu === "solutions" ? '#f59e0b' : 'white',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: openMenu === "solutions" ? '2px solid #f59e0b' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Solutions
              </button>
              {/* Dropdown */}
              {openMenu === "solutions" && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  color: "#1e3a8a",
                  minWidth: "260px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  borderRadius: "0 0 8px 8px",
                  padding: "0.5rem 0"
                }}>
                  <Link href="/solutions/turnkey-projects">
                    <div style={dropdownItemStyle}>Turnkey Projects</div>
                  </Link>
                  <Link href="/solutions/product-development">
                    <div style={dropdownItemStyle}>Product Development</div>
                  </Link>
                  <Link href="/solutions/sre-managed">
                    <div style={dropdownItemStyle}>SRE/Managed Services</div>
                  </Link>
                  <Link href="/solutions/cloud-services">
                    <div style={dropdownItemStyle}>Cloud Services</div>
                  </Link>
                  <Link href="/solutions/information-security">
                    <div style={dropdownItemStyle}>Information Security</div>
                  </Link>
                  {/* Consulting Services with sub-menu 
                  ...inside the Solutions dropdown...*/}
                   
                  <div style={{ position: "relative" }}
                    onMouseEnter={() => setOpenConsulting(true)}
                    onMouseLeave={() => setOpenConsulting(false)}
                  >
                    <div style={{ ...dropdownItemStyle, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      Consulting Services &raquo;
                    </div>
                    {openConsulting && (
                      <div style={{
                        position: "absolute",
                        left: "100%",
                        top: 0,
                        background: "white",
                        color: "#1e3a8a",
                        minWidth: "180px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        borderRadius: "0 8px 8px 8px",
                        padding: "0.5rem 0"
                      }}>
                        <Link href="/solutions/consulting/bfsi">
                          <div style={dropdownItemStyle}>BFSI</div>
                        </Link>
                        <Link href="/solutions/consulting/edtech">
                          <div style={dropdownItemStyle}>EdTech</div>
                        </Link>
                        <Link href="/solutions/consulting/egovernance">
                          <div style={dropdownItemStyle}>eGovernance</div>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/solutions/ai-data-consulting">
                    <div style={dropdownItemStyle}>AI and Data Consulting</div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Product with dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenMenu("product")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: openMenu === "product" ? '#f59e0b' : 'white',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: openMenu === "product" ? '2px solid #f59e0b' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Product
              </button>
              {openMenu === "product" && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  color: "#1e3a8a",
                  minWidth: "240px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  borderRadius: "0 0 8px 8px",
                  padding: "0.5rem 0"
                }}>
                  <Link href="/product/lms">
                    <div style={dropdownItemStyle}>JASWIN AI-LMS</div>
                  </Link>
                  <Link href="/product/ai-bfsi">
                    <div style={dropdownItemStyle}>AI-BFSI - DST & Reporting</div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Consulting */}
            <Link href="/consulting">
              <button style={navButtonStyle(isActive("/consulting"))}>Consulting </button>
            </Link>

            {/* 5. Human Capital */}
            <Link href="/human-capital">
              <button style={navButtonStyle(isActive("/human-capital"))}>Human Capital</button>
            </Link>

            {/* 6. Contact */}
            <Link href="/contact">
              <button style={navButtonStyle(isActive("/contact"))}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Styles for dropdown items and nav buttons
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

const navButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: active ? '#f59e0b' : 'white',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  borderBottom: active ? '2px solid #f59e0b' : 'none',
  transition: 'all 0.3s ease'
});