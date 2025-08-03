import React from 'react';
import { useState, useEffect } from 'react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);
  const headerHeight = '80px';
  const footerHeight = '60px';

  // Section data
  const sections = [
    { id: 'services', title: '1. Services Offered' },
    { id: 'obligations', title: '2. User Obligations' },
    { id: 'ip', title: '3. Intellectual Property' },
    { id: 'payments', title: '4. Payments & Refunds' },
    { id: 'privacy', title: '5. Data Protection' },
    { id: 'liability', title: '6. Limitation of Liability' },
    { id: 'termination', title: '7. Termination' },
    { id: 'law', title: '8. Governing Law' },
    { id: 'amendments', title: '9. Amendments' },
    { id: 'contact', title: '10. Contact' }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust for header
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="flex flex-row"
      style={{
        paddingTop: headerHeight,
        paddingBottom: footerHeight,
        minHeight: `calc(100vh - ${headerHeight} - ${footerHeight})`
      }}
    >
      {/* Table of Contents (Left Side) */}
      <div className="w-1/4 sticky top-20 h-[calc(100vh-140px)] overflow-y-auto pl-4 pr-4 border-r">
        <div className="py-4">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Easy Link</h2>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    activeSection === section.id 
                      ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content (Right Side) */}
      <div className="w-3/4 pl-8 pr-4 py-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-600">Effective Date: August 3, 2025</p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <p className="mb-4">
              Welcome to JASWIN AI Solutions ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your use of our website located at https://jasitsol.com and our AI-powered IT services (collectively, the "Service").
            </p>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, please do not use our Service.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* 1. Services */}
            <section id="services" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">1. Services Offered</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  JASWIN AI Solutions provides the following services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-powered software development and consulting</li>
                  <li>Machine learning and data analytics solutions</li>
                  <li>Custom enterprise AI applications</li>
                  <li>IT infrastructure services with AI integration</li>
                  <li>Cloud-based AI solutions and deployment</li>
                </ul>
              </div>
            </section>

            {/* 2. User Obligations */}
            <section id="obligations" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">2. User Obligations</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when registering</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Comply with all applicable laws and regulations in India</li>
                  <li>Not reverse engineer, decompile, or disassemble our software</li>
                </ul>
              </div>
            </section>

            {/* 3. Intellectual Property */}
            <section id="ip" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  All intellectual property rights in our services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proprietary algorithms and AI models</li>
                  <li>Software code and architecture</li>
                  <li>Documentation and training materials</li>
                  <li>Branding and trademarks</li>
                </ul>
                <p className="mt-4">
                  are owned by or licensed to JASWIN AI Solutions. You are granted a limited, non-exclusive license to use our services as per these Terms.
                </p>
              </div>
            </section>

            {/* 4. Payments */}
            <section id="payments" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">4. Payments and Refunds</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  For paid services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All fees are quoted in Indian Rupees (₹)</li>
                  <li>Payment is due as per the agreed schedule</li>
                  <li>We accept cards, net banking, UPI and other electronic methods</li>
                  <li>Refunds processed as per our Refund Policy</li>
                  <li>Late payments may incur 1.5% monthly interest charges</li>
                </ul>
              </div>
            </section>

            {/* 5. Data Protection */}
            <section id="privacy" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">5. Data Protection and Privacy</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p>
                  We comply with the Information Technology Act, 2000 and applicable Indian data protection regulations. Our Privacy Policy governs personal information handling.
                </p>
                <p className="mt-4">
                  For enterprise clients, we sign Data Processing Agreements (DPAs) outlining specific data protection obligations.
                </p>
              </div>
            </section>

            {/* 6. Liability */}
            <section id="liability" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  To the maximum extent permitted by Indian law:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No liability for indirect, incidental, or consequential damages</li>
                  <li>Total liability limited to fees paid in preceding 6 months</li>
                  <li>Not responsible for delays beyond our reasonable control</li>
                </ul>
              </div>
            </section>

            {/* 7. Termination */}
            <section id="termination" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  Either party may terminate service agreements:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With 30 days written notice for monthly services</li>
                  <li>Immediately for material breaches</li>
                  <li>Upon termination, all rights/licenses cease</li>
                </ul>
                <p className="mt-4">
                  Certain provisions survive termination including IP, Liability, and Governing Law.
                </p>
              </div>
            </section>

            {/* 8. Governing Law */}
            <section id="law" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law and Dispute Resolution</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-4">
                  These Terms shall be governed by Indian laws. Disputes subject to exclusive jurisdiction of courts in Pune, Maharashtra.
                </p>
                <p>
                  Parties agree to first attempt resolution through good faith negotiations. If unresolved within 30 days, either party may initiate legal proceedings.
                </p>
              </div>
            </section>

            {/* 9. Amendments */}
            <section id="amendments" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">9. Amendments to Terms</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p>
                  We may modify these Terms at any time. Material changes will be notified via website or email. Continued use after changes constitutes acceptance.
                </p>
              </div>
            </section>

            {/* 10. Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="mb-2">
                  For questions about these Terms:
                </p>
                <ul className="space-y-1">
                  <li><span className="font-medium">Registered Office:</span> Om Sai Avenue, Shop No.109, 1St Floor,River Residency Road, near Swaraj capital,MIDC, Chikhali, Pimpri-Chinchwad, Pune, Maharashtra 411026</li>
                  <li><span className="font-medium">Email:</span> support@jasitsol.com</li>
                  <li><span className="font-medium">Phone:</span> +91 8265016045</li>
                  <li><span className="font-medium">GSTIN:</span> Will be shared as per legal requirements</li>
                </ul>
                
              </div>
            </section>

            {/* Policy previaliance */}
            <section id="governing-clause" className="scroll-mt-24 mt-12">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <h3 className="font-bold text-lg text-yellow-800 mb-2">Important Note</h3>
                    <p className="text-yellow-700">
                    In the event of any discrepancy between the version displayed on this website and 
                    the most current policy as maintained by JASWIN AI Solutions, the latest official 
                    version maintained by the company shall prevail. Users are obligated to comply 
                    with the most recent version as determined by JASWIN AI Solutions, regardless of 
                    any delays in updating the website version due to technical or procedural reasons.
                    </p>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;