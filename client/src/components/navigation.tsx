import { Link, useLocation } from "wouter";
import React, { useState } from "react";

// SVG Icons Components
const ProjectIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const ProductIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const CloudIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const SREIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const SecurityIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ConsultingIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const AIIcon = ({ style }: { style: React.CSSProperties }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default function Navigation() {
  const [location] = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openConsulting, setOpenConsulting] = useState(false);

  const isActive = (path: string) => location === path;

  // Styles
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
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    ":hover": {
      backgroundColor: "#f1f5f9"
    }
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

  const iconStyle: React.CSSProperties = {
    width: '16px',
    height: '16px',
    color: '#3b82f6'
  };

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
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    cursor: 'pointer',
    gap: '0.5rem'
  }}>
    {/* Replace SVG with your image */}
    <img 
      src="/assets/jaslogo.png" 
      alt="JASWIN Logo" 
      style={{ 
        width: '32px', 
        height: '32px',
        objectFit: 'contain'
      }}
    />
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
                  padding: "0.5rem 0",
                  zIndex: 50
                }}>
                  <Link href="/about">
                    <div style={dropdownItemStyle}>
                      <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      About JASWIN
                    </div>
                  </Link>
                  <Link href="/technology-partner">
                    <div style={dropdownItemStyle}>
                      <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Technology Partner
                    </div>
                  </Link>
                  <Link href="/hr-partner">
                    <div style={dropdownItemStyle}>
                      <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      HR Partner
                    </div>
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
                  fontWeight: '600',
                  color: openMenu === "solutions" ? '#3b82f6' : 'white',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: openMenu === "solutions" ? '2px solid #3b82f6' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Solutions
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {openMenu === "solutions" && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "white",
                  color: "#1e40af",
                  minWidth: "280px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  borderRadius: "8px",
                  padding: "0.75rem 0",
                  zIndex: 50,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem'
                }}>
                  {/* Left Column - Core Services */}
                  <div>
                    <h3 style={{
                      padding: '0.5rem 1.5rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#64748b'
                    }}>
                      Core Services
                    </h3>
                    <Link href="/solutions/turnkey-projects">
                      <div style={{...dropdownItemStyle, fontWeight: '600'}}>
                        <ProjectIcon style={iconStyle} />
                        Turnkey Projects
                      </div>
                    </Link>
                    <Link href="/solutions/product-development">
                      <div style={{...dropdownItemStyle, fontWeight: '600'}}>
                        <ProductIcon style={iconStyle} />
                        Product Development
                      </div>
                    </Link>
                    <Link href="/solutions/cloud-services">
                      <div style={dropdownItemStyle}>
                        <CloudIcon style={iconStyle} />
                        Cloud Services
                      </div>
                    </Link>
                  </div>

                  {/* Right Column - Specialized Services */}
                  <div>
                    <h3 style={{
                      padding: '0.5rem 1.5rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#64748b'
                    }}>
                      Expertise
                    </h3>
                    <Link href="/solutions/sre-managed">
                      <div style={dropdownItemStyle}>
                        <SREIcon style={iconStyle} />
                        SRE/Managed Services
                      </div>
                    </Link>
                    <Link href="/solutions/information-security">
                      <div style={dropdownItemStyle}>
                        <SecurityIcon style={iconStyle} />
                        Information Security
                      </div>
                    </Link>
                    
                    {/* Consulting Submenu */}
                    <div 
                      style={{ position: "relative" }}
                      onMouseEnter={() => setOpenConsulting(true)}
                      onMouseLeave={() => setOpenConsulting(false)}
                    >
                      <div style={{ 
                        ...dropdownItemStyle, 
                        display: "flex", 
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: openConsulting ? '#f1f5f9' : 'transparent'
                      }}>
                        <span>
                          <ConsultingIcon style={iconStyle} />
                          Consulting Services
                        </span>
                        <span style={{ fontSize: '0.75rem' }}>→</span>
                      </div>
                      
                      {openConsulting && (
                        <div style={{
                          position: "absolute",
                          left: "100%",
                          top: 0,
                          background: "white",
                          minWidth: "180px",
                          boxShadow: "4px 4px 16px rgba(0,0,0,0.15)",
                          borderRadius: "0 8px 8px 8px",
                          padding: "0.75rem 0",
                          zIndex: 60
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
                      <div style={dropdownItemStyle}>
                        <AIIcon style={iconStyle} />
                        AI and Data Consulting
                      </div>
                    </Link>
                  </div>
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
                Products
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
                  padding: "0.5rem 0",
                  zIndex: 50
                }}>
                  <Link href="/product/lms">
                    <div style={dropdownItemStyle}>
                      <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      JASWIN AI-LMS
                    </div>
                  </Link>
                  <Link href="/product/ai-bfsi">
                    <div style={dropdownItemStyle}>
                      <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      AI-BFSI-DST & Reporting
                    </div>
                  </Link>
                  <Link href="/product/jas-service-desk">
                    <div style={dropdownItemStyle}>
                      <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      JASWIN Service Desk Plus
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Consulting */}
            <Link href="/consulting">
              <button style={navButtonStyle(isActive("/consulting"))}>
                Consulting
              </button>
            </Link>

            {/* 5. Human Capital */}
            <Link href="/human-capital">
              <button style={navButtonStyle(isActive("/human-capital"))}>
                Human Capital
              </button>
            </Link>

            {/* 6. Contact */}
            <Link href="/contact">
              <button style={navButtonStyle(isActive("/contact"))}>
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}