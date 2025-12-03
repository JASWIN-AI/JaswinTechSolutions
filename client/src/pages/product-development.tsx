import React from "react";
import {
  Cloud,
  ShieldCheck,
  Rocket,
  Infinity,
  Search,
  Code,
  CloudUpload
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ProductDevelopment() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-16 overflow-hidden">
      {/* HERO BANNER */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden bg-slate-900">
        {/* Accent background glows */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[#0B79D4]/30 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute right-10 bottom-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
        />

        {/* Headline */}
        <motion.h1
          {...fadeUp}
          className="max-w-4xl mx-auto text-3xl md:text-5xl font-extrabold leading-tight"
        >
          From Vision to Reality — Scalable, Secure Digital Solutions Built With You
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="rounded-full bg-[#0B79D4] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(11,121,212,0.55)] hover:bg-[#0a68b5] hover:-translate-y-1 transition-all"
          >
            Let’s Build Together →
          </Link>
        </motion.div>
      </section>

      {/* PRODUCT DEVELOPMENT SECTION */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <motion.div {...fadeUp} className="space-y-5">
          <h3 className="text-3xl font-bold text-slate-900">
            Product Development
          </h3>
          <ul className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <li>
              <span className="font-semibold text-[#0B79D4]">End-to-End Expertise:</span>{" "}
              We co-create scalable and secure digital solutions—fintech apps,
              eGovernance platforms, and intelligent automation tools.
            </li>
            <li>
              <span className="font-semibold text-[#0B79D4]">Agile & Cutting-Edge:</span>{" "}
              From UX/UI to agile development, we use modern tech stacks and best practices for user-centric products.
            </li>
            <li>
              <span className="font-semibold text-[#0B79D4]">Post-Launch Support:</span>{" "}
              We ensure compliance (ISO, GDPR, SOC), continuous improvement, and innovation beyond delivery.
            </li>
          </ul>
        </motion.div>

        {/* Feature Cards */}
        <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: <Cloud className="w-8 h-8" />, title: "Tailored for Scale", desc: "Cloud-native, microservices architecture." },
            { icon: <ShieldCheck className="w-8 h-8" />, title: "Bank-Grade Security", desc: "GDPR, SOC2, ISO compliance built-in." },
            { icon: <Rocket className="w-8 h-8" />, title: "Agile & Future-Ready", desc: "CI/CD, automation, rapid iteration." },
            { icon: <Infinity className="w-8 h-8" />, title: "End-to-End Ownership", desc: "Concept → Deployment → Optimization." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="bg-[#0B79D4]/10 text-[#0B79D4] w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-3">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg text-slate-900">{item.title}</h4>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-white py-20 px-4">
        <motion.h2
          {...fadeUp}
          className="text-3xl font-bold text-center text-slate-900 mb-14"
        >
          Our Co-Creation Process
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center max-w-5xl mx-auto">
          {[
            { title: "Discover", icon: <Search className="w-14 h-14" />, desc: "UX/UI workshops, rapid prototyping, and requirements mapping." },
            { title: "Build", icon: <Code className="w-14 h-14" />, desc: "Agile development, transparent sprints, and continuous feedback." },
            { title: "Secure", icon: <ShieldCheck className="w-14 h-14" />, desc: "Pen-testing, compliance audits, and robust security reviews." },
            { title: "Deploy & Optimize", icon: <CloudUpload className="w-14 h-14" />, desc: "Scalable cloud hosting, analytics, and ongoing optimization." },
          ].map((step, index) => (
            <motion.div
              key={index}
              {...fadeUp}
              whileHover={{ y: -6 }}
              className="text-center max-w-xs mx-auto"
            >
              <div className="bg-[#0B79D4]/10 text-[#0B79D4] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm mb-4">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0B79D4] via-sky-500 to-[#0B79D4] text-white text-center shadow-inner">
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold"
        >
          Ready to Co-Create a Standout Digital Product?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B79D4] hover:bg-slate-100 hover:-translate-y-1 transition-all shadow-lg"
          >
            Book a Free Consultation
          </Link>
          <a
            href="/tech"
            className="rounded-full bg-white/20 px-8 py-3 text-sm font-semibold text-white border border-white/40 hover:bg-white/30 hover:-translate-y-1 transition-all"
          >
            Explore Our Tech Stack
          </a>
        </motion.div>
      </section>
    </div>
  );
}
