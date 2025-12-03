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
  Users,
  Globe,
  BarChart,
  FileText,
} from "lucide-react";
import { Link } from "wouter";

const ServiceDeskPlus = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Admin Control Module",
      description:
        "Role and access management, configuration settings, DSA onboarding",
      color: "from-indigo-500/15 to-indigo-400/5",
      badge: "Control & Governance",
    },
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Ticket Management",
      description: "End-to-end lifecycle management for incidents and requests",
      color: "from-sky-500/15 to-sky-400/5",
      badge: "Core ITSM",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SLA Management",
      description: "Real-time breach monitoring and escalation matrix",
      color: "from-emerald-500/15 to-emerald-400/5",
      badge: "Reliability",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alerts & Notifications",
      description: "Multi-channel alerts via email/SMS/push",
      color: "from-amber-500/15 to-amber-400/5",
      badge: "Awareness",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Dynamic Dashboards",
      description: "Role-based analytics for all levels",
      color: "from-violet-500/15 to-violet-400/5",
      badge: "Visibility",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Chatbots",
      description: "Guided issue classification and resolution",
      color: "from-pink-500/15 to-pink-400/5",
      badge: "AI-Assisted",
    },
  ];

  const standards = [
    { name: "ITIL V4", icon: <LifeBuoy className="w-8 h-8" /> },
    { name: "ISO 20000", icon: <Shield className="w-8 h-8" /> },
    { name: "ISO 27001", icon: <Shield className="w-8 h-8" /> },
    { name: "SRE Principles", icon: <Sliders className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-[-4rem] h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.16]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:items-center">
          {/* Left: Main text */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/15">
              AI-powered service management
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              JASWIN{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Service Desk Plus
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-slate-100/90">
              Next-generation ITIL V4 service desk for banking and enterprise
              operations.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-400 px-8 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_32px_rgba(8,145,178,0.75)] hover:bg-cyan-300 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Request Demo
              </Link>
            </div>

            {/* Mini highlight strip */}
            <div className="mt-6 grid gap-3 text-[0.7rem] text-slate-100/85 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Industry focus
                </div>
                <div className="text-xs font-semibold text-white">
                  Indian banking &amp; IT enterprises
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Framework aligned
                </div>
                <div className="text-xs font-semibold text-white">
                  ITIL V4 • SRE • ISO/IEC
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  AI-first
                </div>
                <div className="text-xs font-semibold text-white">
                  Auto-categorization &amp; chatbots
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Hero metric card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex-1"
          >
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/20">
                  <LifeBuoy className="h-5 w-5 text-cyan-200" />
                </div>
                <div>
                  <p className="text-[0.75rem] uppercase tracking-wide text-slate-200/80">
                    ITIL V4 service desk
                  </p>
                  <p className="text-xs text-slate-300">
                    AI-powered ticketing &amp; SRE-aligned operations
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-[0.75rem] text-slate-100">
                <div className="rounded-2xl bg-black/30 px-3 py-3 flex flex-col items-center">
                  <BarChart className="h-4 w-4 text-cyan-200 mb-1" />
                  <div className="text-[0.7rem] text-slate-200">
                    MTTR reduced by
                  </div>
                  <div className="text-xs font-semibold text-cyan-200">
                    45%
                  </div>
                </div>
                <div className="rounded-2xl bg-black/30 px-3 py-3 flex flex-col items-center">
                  <FileText className="h-4 w-4 text-cyan-200 mb-1" />
                  <div className="text-[0.7rem] text-slate-200">
                    Audit scores
                  </div>
                  <div className="text-xs font-semibold text-cyan-200">
                    Improved
                  </div>
                </div>
                <div className="rounded-2xl bg-black/30 px-3 py-3 flex flex-col items-center">
                  <Bot className="h-4 w-4 text-cyan-200 mb-1" />
                  <div className="text-[0.7rem] text-slate-200">
                    Hours saved
                  </div>
                  <div className="text-xs font-semibold text-cyan-200">
                    1200+/yr
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[0.7rem] text-slate-200/85">
                Designed as a web and mobile application, it delivers a secure,
                scalable, and customizable ticketing ecosystem aligned with SRE
                principles, ITIL V4 framework, and ISO/IEC 20000 &amp; 27001
                standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROP (keeps your paragraph) */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 p-7 md:p-8"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              JASWIN Service Desk Plus is a next-generation, AI-powered Service
              Desk Management platform built specifically for the operational
              and compliance demands of Indian banking and IT enterprises.
              Designed as a web and mobile application, it delivers a secure,
              scalable, and customizable ticketing ecosystem aligned with SRE
              principles, ITIL V4 framework, and ISO/IEC 20000 &amp; 27001
              standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Enterprise-grade{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                features
              </span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              From admin controls to AI chatbots, one platform for incident,
              request and operations management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-200 h-full flex flex-col"
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} px-6 py-5 flex items-center justify-between`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/90 flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-700 bg-white/70 rounded-full px-2 py-1">
                    {feature.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Standards &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                frameworks
              </span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
              Built from day one to align with global ITSM and security
              benchmarks.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all flex flex-col items-center border border-slate-100"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-cyan-50 flex items-center justify-center">
                  {standard.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-blue-900">
                  {standard.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.16)] p-8 md:p-12 transform hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.22)] transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-slate-900">
                  CIO
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Leading Private Bank
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 italic leading-relaxed">
              &quot;Service Desk Plus reduced our MTTR by 45% while improving
              compliance audit scores. The AI auto-categorization alone saved
              1,200+ man-hours annually in our IT operations.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.16]" />
        <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-sky-500/25 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Transform Your Service Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Empower your teams with AI-driven ticketing and compliance
            automation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_32px_rgba(8,145,178,0.75)] hover:bg-cyan-300 hover:-translate-y-0.5 transition-transform duration-150"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDeskPlus;
