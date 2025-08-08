import React from 'react';
import { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);
  const headerHeight = '80px';
  const footerHeight = '60px';

  // Section data
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collected', title: 'Data We Collect' },
    { id: 'data-use', title: 'How We Use Data' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'user-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
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
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          </div>

          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p>
                At JASWIN AI Solutions ("we", "our", "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://jaswins.com" className="text-blue-600">https://jaswins.com</a> (the "Site") or use our services (collectively, the "Services").
              </p>
              <p className="mt-4">
                Please read this privacy policy carefully. By accessing or using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </section>

          {/* Data We Collect */}
          <section id="data-collected" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data We Collect</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">We collect several types of information from and about users:</p>
              
              <h3 className="font-medium text-lg mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Company name and job title (for business users)</li>
                <li>Payment information (for paid services)</li>
                <li>Contact preferences</li>
              </ul>

              <h3 className="font-medium text-lg mb-2">Technical Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, browser type, device information</li>
                <li>Pages visited, time spent, navigation paths</li>
                <li>Error logs and performance data</li>
              </ul>
            </div>
          </section>

          {/* How We Use Data */}
          <section id="data-use" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">We use the information we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Services</li>
                <li>To notify you about changes to our Services</li>
                <li>To provide customer support</li>
                <li>To gather analysis to improve our Services</li>
                <li>To monitor usage and detect technical issues</li>
                <li>For billing and payment processing</li>
                <li>To send marketing communications (where consented)</li>
              </ul>
              <p className="mt-4">
                We process personal data in compliance with India's Information Technology Act, 2000 and applicable data protection regulations.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section id="data-sharing" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">We may share your information in these situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With vendors who assist us in operations (payment processors, hosting providers, analytics)
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger or sale of company assets
                </li>
                <li>
                  <strong>Legal Compliance:</strong> When required by law or to respond to legal process
                </li>
              </ul>
              <p className="mt-4">
                We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section id="data-security" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit (SSL/TLS)</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
              </ul>
              <p>
                However, no Internet transmission or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section id="user-rights" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">Depending on applicable law, you may have rights including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Request transfer of data to another organization</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:support@jaswins.com" className="text-blue-600">support@jaswins.com</a>.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Authenticate users and prevent fraud</li>
                <li>Remember user preferences</li>
                <li>Analyze site traffic and usage patterns</li>
              </ul>
              <p>
                You can set your browser to refuse all or some cookies. However, some parts of our Site may not function properly without cookies.
              </p>
            </div>
          </section>

          {/* Policy Changes */}
          <section id="changes" className="scroll-mt-24 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p>
                We may update this Privacy Policy periodically. We will notify you of changes by posting the new policy on this page with an updated effective date. Your continued use of our Services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="mb-4">
                For questions about this Privacy Policy or your personal data:
              </p>
              <ul className="space-y-1">
                  <li><span className="font-medium">Registered Office:</span> Om Sai Avenue, Shop No.109, 1St Floor,River Residency Road, near Swaraj capital,MIDC, Chikhali, Pimpri-Chinchwad, Pune, Maharashtra 411026</li>
                  <li><span className="font-medium">Email:</span> support@jaswins.com</li>
                  <li><span className="font-medium">Phone:</span> +91 8265016045</li>
                </ul>
              <p className="mt-4 text-sm text-gray-600">
                This Privacy Policy was last updated on August 3, 2025.
              </p>
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
  );
};

export default PrivacyPolicy;