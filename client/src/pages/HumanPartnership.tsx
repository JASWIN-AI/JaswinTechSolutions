import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, BookOpen, BarChart, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
const HumanPartnership = () => {
  const pillars = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Acquisition",
      description: "From defining job profiles to seamless onboarding"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training & Development",
      description: "Continuous learning for competitive advantage"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Performance Management",
      description: "Goal tracking with measurable outcomes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HR Compliance",
      description: "Navigating complex employment laws"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero with Image */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your <span className="text-teal-600">People Advantage</span>
          </motion.h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Unlocking human potential through strategic talent management and digital innovation.
          </p>
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
                Start Partnership
                </Link>
                {/*  <a
                href="#capabilities"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all hover:scale-105"
                >
                Explore Features
                </a> */}
            </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e" 
                alt="Team collaboration" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Holistic Human Capital Management
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We combine workforce excellence with digital innovation through end-to-end talent solutions and product development services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <HeartHandshake className="w-4 h-4 text-teal-600" />
                  </span>
                  <span className="text-gray-700">7-day risk-free talent trial</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Shield className="w-4 h-4 text-teal-600" />
                  </span>
                  <span className="text-gray-700">ISO/GDPR/SOC compliant solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-teal-600">Core</span> Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Success Story
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a startup or enterprise, we customize solutions for your unique needs.
          </p>
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
                Free Consultation
                </Link>
                
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HumanPartnership;