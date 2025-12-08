import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

import logoJas from "../../../assets/jaslogo.png";

type MenuKey = "company" | "solutions" | "product" | null;

export default function Navigation() {
  const [location] = useLocation();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null); // desktop
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sheet
  const [mobileSection, setMobileSection] = useState<MenuKey>(null); // mobile accordion

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (path: string) => location === path;

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  const handleNavClick = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const handleHoverOpen = (menu: MenuKey) => {
    clearCloseTimeout();
    setOpenMenu(menu);
  };

  const handleHoverClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 160);
  };

  const toggleMobileSection = (section: MenuKey) => {
    setMobileSection((prev) => (prev === section ? null : section));
  };

  // --- styles ---
  const baseNavLink =
    "group relative inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors duration-200";

  const underlineSlide =
    "after:pointer-events-none after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 group-hover:after:scale-x-100";

  const activeUnderline = "after:scale-x-100";

  const dropdownPanelBase =
    "absolute left-0 top-full mt-3 rounded-2xl border border-white/60 bg-white/90 backdrop-blur-xl p-3 shadow-xl shadow-slate-900/20 transform origin-top transition-transform duration-150 ease-out";

  const dropdownItem =
    "group relative flex w-full items-center justify-between rounded-md pl-4 pr-3 py-2 text-sm font-medium text-slate-800 hover:text-[#0B79D4] hover:bg-[#0B79D4]/6 transition-all duration-150";

  const dropdownAccent =
    "absolute left-0 top-1/2 h-3/4 w-[3px] -translate-y-1/2 rounded-r-full bg-[#0B79D4] opacity-0 group-hover:opacity-100 transition-opacity duration-150";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Outer navbar background (blue strip) */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B79D4]" />

      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={handleNavClick} className="flex items-center">
            <img
              src={logoJas}
              alt="JASWIN logo"
              className="h-9 w-auto object-contain transition-transform duration-150 hover:-translate-y-0.5 drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]"
            />
          </Link>
        </div>

        {/* mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#0B79D4] text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </div>
        </button>

        {/* desktop nav */}
        <div className="hidden items-center gap-6 rounded-full bg-white/95 px-5 py-2 shadow-[0_6px_18px_rgba(15,23,42,0.30)] border border-white md:flex">
          {/* Our Company */}
          <div
            className="relative"
            onMouseEnter={() => handleHoverOpen("company")}
            onMouseLeave={handleHoverClose}
          >
            <button
              type="button"
              className={`${baseNavLink} ${underlineSlide} ${
                openMenu === "company" ? activeUnderline : ""
              }`}
              onClick={() =>
                setOpenMenu((prev) => (prev === "company" ? null : "company"))
              }
            >
              <span className="text-slate-900">Our Company</span>
              <span className="ml-1 text-[0.65rem] text-slate-500">▾</span>
            </button>
            {openMenu === "company" && (
              <div className={`${dropdownPanelBase} w-60`}>
                <Link href="/about" onClick={handleNavClick} className="block">
                  <span className={dropdownItem}>
                    <span className={dropdownAccent} />
                    <span>JASWIN Overview</span>
                  </span>
                </Link>
                <Link
                  href="/technology-partner"
                  onClick={handleNavClick}
                  className="block"
                >
                  <span className={dropdownItem}>
                    <span className={dropdownAccent} />
                    <span>Technology / Service Partner</span>
                  </span>
                </Link>
                <Link
                  href="/hr-partner"
                  onClick={handleNavClick}
                  className="block"
                >
                  <span className={dropdownItem}>
                    <span className={dropdownAccent} />
                    <span>Human Resources Partner</span>
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => handleHoverOpen("solutions")}
            onMouseLeave={handleHoverClose}
          >
            <button
              type="button"
              className={`${baseNavLink} ${underlineSlide} ${
                openMenu === "solutions" ? activeUnderline : ""
              }`}
              onClick={() =>
                setOpenMenu((prev) =>
                  prev === "solutions" ? null : "solutions"
                )
              }
            >
              <span className="text-slate-900">Solutions</span>
              <span className="ml-1 text-[0.65rem] text-slate-500">▾</span>
            </button>
            {openMenu === "solutions" && (
              <div className={`${dropdownPanelBase} min-w-[260px]`}>
                <div className="space-y-1">
                  <Link
                    href="/solutions/turnkey-projects"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <span className={dropdownItem}>
                      <span className={dropdownAccent} />
                      <span>Enterprise AI Solutionss</span>
                    </span>
                  </Link>
                  <Link
                    href="/solutions/product-development"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <span className={dropdownItem}>
                      <span className={dropdownAccent} />
                      <span>Product Development</span>
                    </span>
                  </Link>
                  <Link
                    href="/solutions/sre-managed"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <span className={dropdownItem}>
                      <span className={dropdownAccent} />
                      <span>SRE / Managed Services</span>
                    </span>
                  </Link>
                  <Link
                    href="/solutions/cloud-services"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <span className={dropdownItem}>
                      <span className={dropdownAccent} />
                      <span>Cloud Services</span>
                    </span>
                  </Link>
                  <Link
                    href="/solutions/information-security"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <span className={dropdownItem}>
                      <span className={dropdownAccent} />
                      <span>Information Security</span>
                    </span>
                  </Link>
                  <Link
                    href="/solutions/ai-data-consulting"
                    onClick={handleNavClick}
                    className="block"
                  >
                    <span className={dropdownItem}>
                      <span className={dropdownAccent} />
                      <span>AI &amp; Data Consulting</span>
                    </span>
                  </Link>

                   <Link
                      href="/solutions/consulting/bfsi"
                      onClick={handleNavClick}
                      className="block"
                    >
                      <span className={dropdownItem}>
                        <span className={dropdownAccent} />
                        <span>Industry Specific AI Solutions</span>
                      </span>
                    </Link>
                </div>

              
              </div>
            )}
          </div>

          {/* Product */}
          <div
            className="relative"
            onMouseEnter={() => handleHoverOpen("product")}
            onMouseLeave={handleHoverClose}
          >
            <button
              type="button"
              className={`${baseNavLink} ${underlineSlide} ${
                openMenu === "product" ? activeUnderline : ""
              }`}
              onClick={() =>
                setOpenMenu((prev) => (prev === "product" ? null : "product"))
              }
            >
              <span className="text-slate-900">Product</span>
              <span className="ml-1 text-[0.65rem] text-slate-500">▾</span>
            </button>
            {openMenu === "product" && (
              <div className={`${dropdownPanelBase} w-64`}>
                <Link
                  href="/product/lms"
                  onClick={handleNavClick}
                  className="block"
                >
                  <span className={dropdownItem}>
                    <span className={dropdownAccent} />
                    <span>JASWIN AI-LMS</span>
                  </span>
                </Link>
                <Link
                  href="/product/ai-bfsi"
                  onClick={handleNavClick}
                  className="block"
                >
                  <span className={dropdownItem}>
                    <span className={dropdownAccent} />
                    <span>AI-BFSI-DST &amp; Reporting</span>
                  </span>
                </Link>
                <Link
                  href="/product/jas-service-desk"
                  onClick={handleNavClick}
                  className="block"
                >
                  <span className={dropdownItem}>
                    <span className={dropdownAccent} />
                    <span>JASWIN Service Desk Plus</span>
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Simple links */}
          <Link
            href="/consulting"
            onClick={handleNavClick}
            className={`${baseNavLink} ${underlineSlide} ${
              isActive("/consulting") ? activeUnderline : ""
            }`}
          >
            <span className="text-slate-900">Consulting</span>
          </Link>

          <Link
            href="/human-capital"
            onClick={handleNavClick}
            className={`${baseNavLink} ${underlineSlide} ${
              isActive("/human-capital") ? activeUnderline : ""
            }`}
          >
            <span className="text-slate-900">Human Capital</span>
          </Link>

          <Link href="/contact" onClick={handleNavClick}>
            <span
              className={`inline-flex items-center rounded-full bg-[#0B79D4] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(11,121,212,0.45)] hover:bg-[#0a68b5] transition-transform duration-150 hover:-translate-y-0.5 ${
                isActive("/contact")
                  ? "ring-2 ring-[#0B79D4]/40 ring-offset-2 ring-offset-white"
                  : ""
              }`}
            >
              Contact
            </span>
          </Link>
        </div>
      </nav>

      {/* MOBILE MENU – full screen, #0B79D4, animated accordion */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#0B79D4] text-white md:hidden">
          <div className="h-full overflow-y-auto px-6 py-6 space-y-6">
            {/* Our Company */}
            <section>
              <button
                type="button"
                onClick={() => toggleMobileSection("company")}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold"
              >
                <span>Our Company</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    mobileSection === "company" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  mobileSection === "company"
                    ? "max-h-96 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                <div className="mt-2 space-y-1">
                  <Link
                    href="/about"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    About JASWIN
                  </Link>
                  <Link
                    href="/technology-partner"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    Technology / Service Partner
                  </Link>
                  <Link
                    href="/hr-partner"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    Human Resources Partner
                  </Link>
                </div>
              </div>
            </section>

            {/* Solutions */}
            <section>
              <button
                type="button"
                onClick={() => toggleMobileSection("solutions")}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold"
              >
                <span>Solutions</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    mobileSection === "solutions" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  mobileSection === "solutions"
                    ? "max-h-[520px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                <div className="mt-2 space-y-1">
                  <Link
                    href="/solutions/turnkey-projects"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    Enterprise AI Solutionss
                  </Link>
                  <Link
                    href="/solutions/product-development"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    Product Development
                  </Link>
                  <Link
                    href="/solutions/sre-managed"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    SRE / Managed Services
                  </Link>
                  <Link
                    href="/solutions/cloud-services"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    Cloud Services
                  </Link>
                  <Link
                    href="/solutions/information-security"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    Information Security
                  </Link>
                  <Link
                    href="/solutions/ai-data-consulting"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    AI &amp; Data Consulting
                  </Link>
                </div>

                {/* Consulting Services sub-section (mobile) */}
                <div className="mt-3 border-t border-white/25 pt-2 space-y-1">
                  <Link
                    href="/solutions/consulting/bfsi"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >Industry Specific AI Solutions
                  </Link>
                  
                </div>
              </div>
            </section>

            {/* Product */}
            <section>
              <button
                type="button"
                onClick={() => toggleMobileSection("product")}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold"
              >
                <span>Product</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    mobileSection === "product" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  mobileSection === "product"
                    ? "max-h-64 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                <div className="mt-2 space-y-1">
                  <Link
                    href="/product/lms"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    JASWIN AI-LMS
                  </Link>
                  <Link
                    href="/product/ai-bfsi"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    AI-BFSI-DST &amp; Reporting
                  </Link>
                  <Link
                    href="/product/jas-service-desk"
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/12"
                  >
                    JASWIN Service Desk Plus
                  </Link>
                </div>
              </div>
            </section>

            {/* Divider + simple links */}
            <div className="h-px bg-white/30" />

            <Link
              href="/consulting"
              onClick={handleNavClick}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/12"
            >
              Consulting
            </Link>

            <Link
              href="/human-capital"
              onClick={handleNavClick}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/12"
            >
              Human Capital
            </Link>

            <Link
              href="/contact"
              onClick={handleNavClick}
              className="block rounded-full bg-white px-4 py-2 text-center text-base font-semibold text-[#0B79D4] shadow-md hover:bg-slate-100"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
