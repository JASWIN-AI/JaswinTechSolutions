import React from "react";
import { Cloud, Code, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const TechnologyPartner = () => {
  const pillars = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Strategic Guidance",
      description: "Receive expert advice and strategic roadmaps to navigate the complex technological landscape and make informed decisions.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Customized Solutions",
      description: "Solutions are tailored to specific needs, ensuring they address unique requirements and deliver maximum value.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Offer continuous support and evolution of your technology infrastructure, ensuring long-term success and adaptability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero with Image */}
      <section className="relative py-20 px-6 overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8849287/pexels-photo-8849287.jpeg?_gl=1*n94mok*_ga*MTcxNTE2MjczLjE3NTM3Nzk0MjM.*_ga_8JE65Q40S6*czE3NTM5ODQwMzYkbzIkZzEkdDE3NTM5ODQ1NjMkajU5JGwwJGgw')] bg-cover bg-center opacity-20"></div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Unlocking Your Technological Potential
          </motion.h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Partner with us to harness the power of innovation and drive unprecedented growth.
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
                Start Partnership
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

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex-1">
                <div className="flex items-center mb-4">
                  {pillar.icon}
                  <h3 className="text-lg font-bold ml-4">{pillar.title}</h3>
                </div>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPartner;