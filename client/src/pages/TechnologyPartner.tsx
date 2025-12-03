import React from "react";
import { Cloud, Code, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const TechnologyPartner = () => {
  const pillars = [
    {
      icon: Cloud,
      title: "Strategic Guidance",
      description:
        "Receive expert advice and strategic roadmaps to navigate the complex technological landscape and make informed decisions.",
    },
    {
      icon: Code,
      title: "Customized Solutions",
      description:
        "Solutions are tailored to specific needs, ensuring they address unique requirements and deliver maximum value.",
    },
    {
      icon: ShieldCheck,
      title: "Ongoing Support",
      description:
        "Offer continuous support and evolution of your technology infrastructure, ensuring long-term success and adaptability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-16">
      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.pexels.com/photos/8849287/pexels-photo-8849287.jpeg"
            alt="Technology Partnership Background"
            className="h-full w-full object-cover object-center"
          />
          {/* Glass fade overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/70" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0B79D4]/35 to-transparent" />
        </motion.div>

        {/* Accent blobs */}
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#0B79D4]/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="pointer-events-none absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl"
        />

        {/* Text Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
          >
            Unlocking Your Technological Potential
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8"
          >
            Partner with us to harness the power of innovation and drive unprecedented growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B79D4] px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_14px_35px_rgba(11,121,212,0.45)] hover:bg-[#0a68b5] transition-colors"
              >
                Start Partnership
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* VALUE PROPOSITION / PILLARS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0B79D4]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B79D4]">
              Technology / Service Partner
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              As your long-term technology partner, we align strategy, engineering and support around your goals.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0 18px 40px rgba(15,23,42,0.16)",
                  }}
                  className="group rounded-2xl border border-slate-100 bg-slate-50/40 p-6 text-left shadow-sm transition-all duration-200"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4] group-hover:bg-[#0B79D4] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPartner;
