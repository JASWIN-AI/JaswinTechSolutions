import React from "react";
import { motion } from "framer-motion";
import {
  LifeBuoy,
  Shield,
  Sliders,
  Ticket,
  Bell,
  LayoutDashboard,
  Bot,
  BarChart,
  BookText,
  FileText,
  Users,
  Globe,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

const ServiceDeskPlus = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Admin Control Module",
      description: "Role and access management, configuration settings, DSA onboarding",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Ticket Management",
      description: "End-to-end lifecycle management for incidents and requests",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SLA Management",
      description: "Real-time breach monitoring and escalation matrix",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alerts & Notifications",
      description: "Multi-channel alerts via email/SMS/push",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Dynamic Dashboards",
      description: "Role-based analytics for all levels",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Chatbots",
      description: "Guided issue classification and resolution",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const standards = [
    { name: "ITIL V4", icon: <LifeBuoy className="w-8 h-8" /> },
    { name: "ISO 20000", icon: <Shield className="w-8 h-8" /> },
    { name: "ISO 27001", icon: <Shield className="w-8 h-8" /> },
    { name: "SRE Principles", icon: <Sliders className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4"
            >
              AI-POWERED SERVICE MANAGEMENT
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              JASWIN <span className="text-cyan-400">Service Desk Plus</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90"
            >
              Next-generation ITIL V4 service desk for banking and enterprise operations
            </motion.p>
          </motion.div>

          <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex justify-center gap-4 mt-8"
            >
              <Link
                  href="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                Request Demo
              </Link>
                
            </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            JASWIN Service Desk Plus is a next-generation, AI-powered Service Desk Management platform built specifically for the operational and compliance demands of Indian banking and IT enterprises. Designed as a web and mobile application, it delivers a secure, scalable, and customizable ticketing ecosystem aligned with SRE principles, ITIL V4 framework, and ISO/IEC 20000 & 27001 standards.
          </motion.p>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
          >
            <span className="inline-block pb-2 border-b-4 border-cyan-400">
              Enterprise-Grade Features
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full border border-gray-100"
              >
                <div className={`p-6 ${feature.color} flex items-center justify-center`}>
                  <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
          >
            <span className="inline-block pb-2 border-b-4 border-cyan-400">
              Standards & Frameworks
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  {standard.icon}
                </div>
                <h3 className="font-bold text-lg text-blue-900">{standard.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">CIO</h4>
                <p className="text-gray-500">Leading Private Bank</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 italic">
              "Service Desk Plus reduced our MTTR by 45% while improving compliance audit scores. The AI auto-categorization alone saved 1,200+ man-hours annually in our IT operations."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Transform Your Service Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Empower your teams with AI-driven ticketing and compliance automation.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                    href="/contact"
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
                >
                Schedule Consultation
              </Link>
                {/* <a
                  href="#contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all hover:scale-105"
                >
                  Download Brochure
                </a> */}
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDeskPlus;