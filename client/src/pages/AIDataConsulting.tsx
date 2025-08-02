import React from 'react';
import { motion } from 'framer-motion';

const AIDataConsulting = () => {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: [
        "We develop comprehensive AI adoption roadmaps tailored to your business goals.",
        "Identify high-impact use cases where AI can drive measurable value.",
        "Assess your current data infrastructure and technical readiness.",
        "Create implementation timelines with clear milestones and ROI metrics.",
        "Establish governance frameworks for ethical and responsible AI use.",
        "Provide ongoing support for strategy refinement and execution."
      ],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "AI strategy planning session"
    },
    {
      title: "Data Infrastructure Design",
      description: [
        "Design scalable data architectures optimized for analytics and AI workloads.",
        "Implement modern data lakes and warehouses with proper governance.",
        "Configure ETL/ELT pipelines for efficient data movement and transformation.",
        "Establish data quality monitoring and validation processes.",
        "Ensure security and compliance with industry regulations.",
        "Optimize infrastructure for performance and cost-efficiency."
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Server rack in data center",
      reverse: true
    },
    {
      title: "Machine Learning Implementation",
      description: [
        "Develop custom ML models tailored to your specific business needs.",
        "Implement end-to-end pipelines from data prep to model deployment.",
        "Optimize model performance through rigorous testing and validation.",
        "Create monitoring systems for model drift and performance degradation.",
        "Establish MLOps practices for continuous improvement.",
        "Integrate models with existing business applications and workflows."
      ],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Machine learning code visualization"
    },
    {
      title: "Data Governance & Compliance",
      description: [
        "Develop policies for data quality, security, and privacy.",
        "Implement metadata management and data lineage tracking.",
        "Establish role-based access controls and audit trails.",
        "Ensure compliance with GDPR, CCPA, and industry regulations.",
        "Create data retention and disposal policies.",
        "Train staff on data handling best practices and compliance."
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Team reviewing compliance documents",
      reverse: true
    },
    {
      title: "Predictive Analytics Solutions",
      description: [
        "Develop forecasting models for demand planning and inventory optimization.",
        "Create customer churn prediction and retention models.",
        "Implement predictive maintenance for equipment and assets.",
        "Build risk assessment models for financial services.",
        "Develop recommendation engines for personalized experiences.",
        "Visualize insights through interactive dashboards and reports."
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Analytics dashboard on screen"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Compact Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            AI & Data Consulting Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
          >
            Expert guidance to transform your business with artificial intelligence and data-driven insights
          </motion.p>
        </div>
      </section>

      {/* Compact Introduction */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-700">
            Our AI and Data Consulting services help organizations navigate the complex landscape of 
            artificial intelligence and advanced analytics. We combine technical expertise with business 
            acumen to deliver solutions that drive real impact. Whether you're just beginning your AI 
            journey or looking to scale existing initiatives, our consultants provide the strategic 
            guidance and hands-on implementation support you need to succeed in today's data-driven 
            economy. We focus on practical, measurable results while ensuring ethical and responsible 
            use of these powerful technologies.
          </p>
        </div>
      </section>

      {/* Compact Services Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} rounded-lg shadow-sm overflow-hidden`}
          >
            <div className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="md:w-2/5">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2 inline-block">▣</span>
                  {service.title}
                </h2>
                <ul className="space-y-2 text-gray-600">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compact CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your AI Transformation Today</h2>
          <p className="mb-6">
            Our consultants are ready to help you harness the power of data and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-full text-sm shadow"
            >
              Schedule Consultation
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/services"
              className="border border-white hover:bg-white/10 font-medium py-2 px-6 rounded-full text-sm"
            >
              View Case Studies
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataConsulting;