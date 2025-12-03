import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  BookOpen,
  BarChart,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

const HumanPartnership = () => {
  const pillars = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "From defining job profiles to seamless onboarding",
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "Continuous learning for competitive advantage",
    },
    {
      icon: BarChart,
      title: "Performance Management",
      description: "Goal tracking with measurable outcomes",
    },
    {
      icon: Shield,
      title: "HR Compliance",
      description: "Navigating complex employment laws",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-16 overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background image with glass / gradient */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Human capital collaboration"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/75" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0B79D4]/40 to-transparent" />
        </motion.div>

        {/* Accent blobs */}
        <motion.div
          animate={{ y: [-18, 18, -18] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="pointer-events-none absolute -left-20 top-16 h-48 w-48 rounded-full bg-[#0B79D4]/25 blur-3xl"
        />
        <motion.div
          animate={{ y: [18, -18, 18] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-sky-400/25 blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 ring-1 ring-white/20 mb-4"
          >
            Human Capital Partnership
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Your{" "}
            <span className="bg-gradient-to-r from-[#4FC3F7] via-[#0B79D4] to-[#42A5F5] bg-clip-text text-transparent">
              People Advantage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto mb-8"
          >
            Unlocking human potential through strategic talent management and digital innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="flex justify-center mt-6"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B79D4] px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_14px_35px_rgba(11,121,212,0.5)] hover:bg-[#0a68b5] transition-colors"
              >
                Start Partnership
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:w-1/2 w-full"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0B79D4]/20 via-sky-200/30 to-transparent blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
                  alt="Team collaboration"
                  className="relative rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.25)] w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="md:w-1/2 w-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Holistic Human Capital Management
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-6">
                We combine workforce excellence with digital innovation through end-to-end talent solutions and product development services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-[#0B79D4]/10 p-1 rounded-full mr-3 mt-1">
                    <HeartHandshake className="w-4 h-4 text-[#0B79D4]" />
                  </span>
                  <span className="text-slate-700">7-day risk-free talent trial</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#0B79D4]/10 p-1 rounded-full mr-3 mt-1">
                    <Shield className="w-4 h-4 text-[#0B79D4]" />
                  </span>
                  <span className="text-slate-700">ISO/GDPR/SOC compliant solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Our <span className="text-[#0B79D4]">Core</span> Expertise
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              From acquisition to compliance, we support the full lifecycle of your human capital strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
                  }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0B79D4]/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#0B79D4]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0B79D4] via-sky-500 to-[#0B79D4] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Let&apos;s Build Your Success Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="text-base sm:text-lg mb-6 opacity-95"
          >
            Whether you&apos;re a startup or enterprise, we customize solutions for your unique needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="flex justify-center mt-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-[#0B79D4] font-semibold py-3 px-8 rounded-full shadow-[0_14px_35px_rgba(15,23,42,0.4)] hover:bg-slate-100 transition-colors text-sm sm:text-base"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HumanPartnership;
