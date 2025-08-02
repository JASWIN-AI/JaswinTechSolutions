import React from 'react';
import { motion } from 'framer-motion';

const InformationSecurity = () => {
  const sections = [
    {
      title: "Data Encryption",
      content: "Protects sensitive information by converting it into coded format that only authorized users can access with the correct decryption key.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Encryption visualization"
    },
    {
        title: "Access Control",
        content: "Ensures only authorized personnel access specific data through authentication methods like passwords, biometrics, and MFA.",
        image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        alt: "Padlock with heavy chain representing secure access control",
        reverse: true
    },
    {
      title: "Network Security",
      content: "Protects network integrity with firewalls, IDS/IPS systems, and secure VPNs to monitor and control network traffic.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Network infrastructure"
    },
    {
      title: "Incident Response",
      content: "Prepares organizations with clear breach response plans including threat identification and recovery procedures.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Team working",
      reverse: true
    },
    {
      title: "Security Audits",
      content: "Regular vulnerability assessments and penetration testing to maintain robust security standards.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Audit dashboard"
    },
    {
      title: "Employee Training",
      content: "Educates staff on security best practices and phishing awareness to reduce human error risks.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Training session",
      reverse: true
    },
    {
      title: "Data Backup",
      content: "Implements robust backup strategies with offsite storage to protect against data loss.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Cloud backup storage"
    },
    {
      title: "Compliance",
      content: "Adheres to GDPR, HIPAA, PCI-DSS regulations to protect data and build customer trust.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Compliance documents",
      reverse: true
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Information Security
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            Protecting your digital assets from modern cyber threats
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <p className="text-gray-700">
            In today's digital landscape, comprehensive information security is essential for organizations 
            of all sizes to protect sensitive data from unauthorized access and cyber threats.
          </p>
        </motion.div>
      </section>

      {/* Key Features Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {sections.map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} rounded-lg shadow-sm overflow-hidden`}
          >
            <div className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="md:w-2/5">
                <img 
                  src={section.image} 
                  alt={section.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 inline-block">🔒</span>
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.content}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Secure Your Digital Future</h2>
          <p className="mb-6">
            Proactive information security is a strategic investment for long-term business success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-full text-sm shadow"
            >
              Get Started
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformationSecurity;