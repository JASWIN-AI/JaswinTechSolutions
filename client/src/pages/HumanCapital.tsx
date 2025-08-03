import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Code, BookOpen, BarChart, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const HumanCapital = () => {
  const services = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Specialized Staffing",
      items: [
        "Executive search",
        "Staff augmentation",
        "Contract hiring",
        "7-day free trial period"
      ]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Tech Solutions",
      items: [
        "Fintech platforms",
        "eGovernance systems",
        "ISO/GDPR/SOC compliant",
        "Agile development"
      ]
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Core HR Services",
      items: [
        "HR Outsourcing (HRO)",
        "Compensation consulting",
        "Performance management",
        "Compliance & employment law"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Light Blue Gradient */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
                Human Capital: <span className="text-blue-600">Driving Business Success</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                We bridge the gap between workforce excellence and digital innovation through end-to-end talent solutions.
              </p>
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full flex items-center transition-all shadow-md w-fit"
                >
                  Get Consultation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <StatCard value="100+" label="Institution Network" />
              <StatCard value="7-Day" label="Free Trial" highlight />
              <StatCard value="24/7" label="Tech Support" />
              <StatCard value="ISO" label="Certified" />
            </div>
          </div>
        </div>
      </section>

      {/* Dual Value Proposition */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-500 pl-4">
                Talent Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                For the BFSI and tech sectors, we offer specialized staffing including executive search, staff augmentation, and contract hiring. Our unique network delivers rigorously screened professionals - both fresh and experienced - who are truly plug-and-play ready.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Client Confidence Guarantee</h3>
                <p className="text-gray-700">
                  7-day free trial to assess deployed talent risk-free with no-cost replacements if needed.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-500 pl-4">
                Digital Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We develop secure, scalable digital solutions like fintech platforms, EdTech SOlutions and eGovernance systems, following agile methodologies from concept to deployment. All solutions comply with global standards (ISO/GDPR/SOC).
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-blue-700 mb-3">Dual Advantage</h3>
                <p className="text-gray-700">
                  Get both high-performing teams and future-ready technology under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Our <span className="text-blue-600">Comprehensive</span> Offerings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ value, label, highlight = false }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white ${highlight ? 'bg-blue-50 border-blue-200' : 'bg-white'} p-6 rounded-lg shadow-sm border border-gray-200 text-center`}
  >
    <p className={`text-3xl font-bold mb-2 ${highlight ? 'text-blue-600' : 'text-gray-800'}`}>{value}</p>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, items }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
  >
    <div className="bg-blue-50 p-6 flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default HumanCapital;