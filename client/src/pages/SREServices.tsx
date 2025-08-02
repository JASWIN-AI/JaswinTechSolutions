import React from 'react';
import { motion } from "framer-motion";

const SREServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-24 gap-8 md:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            🚀 Elevate Your Operations with Our SRE Managed Services
          </h1>
          <p className="text-xl text-gray-600">
            Achieve unparalleled operational excellence with our cutting-edge Site Reliability Engineering solutions.
          </p>
          <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex justify-center gap-4 mt-8"
            >
                <a
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
                >
                Contact Us
                </a>
                
            </motion.div>   
        </div>
        <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Cloud infrastructure and monitoring dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          🌟 Why Choose Our SRE Managed Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Unmatched Reliability",
              desc: "Proactive monitoring and alerting systems ensure optimal availability and performance.",
              icon: "🛡️"
            },
            {
              title: "Scalable Solutions",
              desc: "Seamlessly accommodate growing traffic and user demands without performance compromise.",
              icon: "📈"
            },
            {
              title: "Cost-Effective Operations",
              desc: "Automation and optimization reduce operational costs while improving efficiency.",
              icon: "💰"
            },
            {
              title: "Faster Time to Market",
              desc: "Accelerate development cycles with streamlined deployment processes.",
              icon: "⚡"
            },
            {
              title: "Enhanced Collaboration",
              desc: "Foster teamwork between development and operations with aligned goals.",
              icon: "🤝"
            }
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          🔧 Key Features of Our SRE Managed Services
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="SRE team working on monitoring dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-800">
                  <strong className="font-semibold">Comprehensive Monitoring:</strong> 24/7 monitoring of systems, applications, and infrastructure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-800">
                  <strong className="font-semibold">Incident Response:</strong> Swift handling with root cause analysis and post-mortems
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-800">
                  <strong className="font-semibold">Capacity Planning:</strong> Resource analysis and forecasting for future needs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-800">
                  <strong className="font-semibold">Automation:</strong> Latest tools to streamline processes and reduce errors
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-800">
                  <strong className="font-semibold">Custom SLOs:</strong> Tailored Service Level Objectives with regular reporting
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12 text-center my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          🌐 Partner with Us for Success
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Our dedicated professionals will tailor SRE solutions to your unique requirements. 
          Transform your operations and drive business forward.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex justify-center gap-4 mt-8"
            >
                <a
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
                >
                Contact Us
                </a>
                {/*  <a
                href="#capabilities"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all hover:scale-105"
                >
                Explore Features
                </a> */}
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SREServices;