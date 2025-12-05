import { Link } from "wouter";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
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
    { name: "Consulting – BFSI", path: "/solutions/consulting/bfsi" },
    { name: "Consulting – EdTech", path: "/solutions/consulting/edtech" },
    { name: "Consulting – eGovernance", path: "/solutions/consulting/egovernance" },
    { name: "AI & Data Consulting", path: "/solutions/ai-data-consulting" },
  ];

  const productslinks = [
    { name: "JASWIN AI-LMS", path: "/product/lms" },
    { name: "AI-BFSI-DST & Reporting", path: "/product/ai-bfsi" },
    { name: "JASWIN Service Desk Plus", path: "/product/jas-service-desk" },
  ];

  const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M18.5 4L13.7 10.1L19 20H15.8L12.1 13.3L7.7 20H5.5L10.5 13.2L5.2 4H8.4L11.8 10L16 4H18.5Z"
      fill="currentColor"
    />
  </svg>
);


  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jaswinai-ai-71272737b/",
    },
    { name: "X", icon: XLogo, href: "https://x.com/JaswinAi" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/jaswinaillp/" },
    { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/channel/UCkjDXCGKFmYL0HVZ2K4VTiw" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[#0B79D4] text-white">
      {/* thin top strip */}
      <div className="h-1 w-full bg-white/30" />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* top grid */}
        <div className="grid gap-10 pb-8 md:grid-cols-[minmax(0,2.2fr)_repeat(3,minmax(0,1fr))] border-b border-white/20">
          {/* brand / description */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={logoJas}
                alt="JASWIN AI Solutions"
                className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.35)]"
              />
              <div className="flex flex-col hidden">
                <span className="text-base font-semibold tracking-wide uppercase text-white">
                  JASWIN AI Solutions
                </span>
                <span className="text-sm text-white/90">
                  Trusted innovation partner for digital, cloud & AI solutions.
                </span>
              </div>
            </div>

            <p className="max-w-md text-[0.92rem] leading-relaxed text-white">
              We help organisations design, build and operate intelligent
              products and platforms — from BFSI and EdTech to e-Governance —
              using secure, scalable cloud and AI capabilities.
            </p>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-white">
              Our Company
            </h4>
            <ul className="space-y-2 text-[0.92rem]">
              {ourcompanylinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center text-white/90 transition-colors duration-150 hover:text-white"
                  >
                    <span className="mr-1 h-[2px] w-0 bg-white transition-all duration-150 group-hover:w-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-[0.92rem]">
              {solutionslinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center text-white/90 transition-colors duration-150 hover:text-white"
                  >
                    <span className="mr-1 h-[2px] w-0 bg-white transition-all duration-150 group-hover:w-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & More */}
          <div className="space-y-7">
            <div>
              <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text.white">
                Products
              </h4>
              <ul className="space-y-2 text-[0.92rem]">
                {productslinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="group inline-flex items-center text-white/90 transition-colors duration-150 hover:text-white"
                    >
                      <span className="mr-1 h-[2px] w-0 bg.white transition-all duration-150 group-hover:w-3" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text.white">
                More
              </h4>
              <ul className="space-y-2 text-[0.92rem]">
                <li>
                  <Link
                    href="/consulting"
                    className="group inline-flex items-center text-white/90 transition-colors duration-150 hover:text-white"
                  >
                    <span className="mr-1 h-[2px] w-0 bg.white transition-all duration-150 group-hover:w-3" />
                    <span>Consulting</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/human-capital"
                    className="group inline-flex items-center text-white/90 transition-colors duration-150 hover:text-white"
                  >
                    <span className="mr-1 h-[2px] w-0 bg.white transition-all duration-150 group-hover:w-3" />
                    <span>Human Capital</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center text-white/90 transition-colors duration-150 hover:text-white"
                  >
                    <span className="mr-1 h-[2px] w-0 bg.white transition-all duration-150 group-hover:w-3" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 py-5 text-sm text-white/90 sm:flex-row">
          {/* social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white shadow-sm backdrop-blur-md transition-all duration-150 hover:bg-white hover:text-[#0B79D4] hover:-translate-y-0.5"
                >
                  <Icon className={social.name === "X" ? "h-3.5 w-3.5" : "h-4 w-4"} />
                </a>
              );
            })}
          </div>

          {/* copyright + legal */}
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4">
            <div className="text-[0.95rem]">
              © {year} JASWIN AI Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-3 text-[0.95rem]">
              <Link
                href="/privacy-policy"
                className="text-white/90 transition-colors duration-150 hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="h-4 w-px bg-white/40" />
              <Link
                href="/terms-of-service"
                className="text-white/90 transition-colors duration-150 hover:text.white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
