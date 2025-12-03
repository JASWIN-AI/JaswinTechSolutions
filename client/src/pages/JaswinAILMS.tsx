import React from "react";
import {
  Cloud,
  Smartphone,
  Users,
  ShieldCheck,
  BarChart2,
  Globe,
  FileText,
  MessageSquare,
  CreditCard,
  Zap,
  Clock,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function JaswinAILMS() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Gradient & glow accents */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B79D4]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-[-3rem] h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/15">
              AI • SaaS • MERN • Compliance
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="block text-slate-50">
                JASWIN AI-LMS: AI-Driven
              </span>
              <span className="mt-1 block bg-gradient-to-r from-[#4FC3F7] via-[#0B79D4] to-[#42A5F5] bg-clip-text text-transparent">
                Learning Management System
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-200/90">
              A cloud-based SaaS platform built on MERN stack, simplifying
              corporate training, compliance, and skill development with
              AI-powered tools.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#0B79D4] shadow-[0_10px_30px_rgba(15,23,42,0.55)] hover:bg-slate-100 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Request Demo
              </Link>
            </div>

            {/* Tiny stat strip */}
            <div className="mt-4 grid gap-3 text-[0.7rem] text-slate-200/80 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Built for
                </div>
                <div className="text-xs font-semibold text-white">
                  Indian institutions &amp; enterprises
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Focus
                </div>
                <div className="text-xs font-semibold text-white">
                  Compliance &amp; scalability
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Experience
                </div>
                <div className="text-xs font-semibold text-white">
                  Modern, mobile-first learning
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1"
          >
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-[0_18px_40px_rgba(15,23,42,0.8)]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.pixabay.com/photo/2022/05/01/06/13/training-7166839_1280.jpg"
                  alt="Learning Management System"
                  className="h-56 w-full object-cover sm:h-64"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-[0.7rem] text-slate-100">
                <span className="rounded-full bg-black/30 px-3 py-1">
                  AI-powered learning journeys
                </span>
                <span className="rounded-full bg-black/20 px-3 py-1">
                  MERN • SaaS • Cloud-native
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#0B79D4]">
                About the platform
                <span className="h-px w-10 bg-[#0B79D4]/40" />
              </h2>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                AI-based Learning Management System
              </h3>
            </div>
            <div className="md:w-2/3 space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">
                  AI Based Learning Management Systems
                </span>{" "}
                is a cloud-based learning management system (LMS) built on the
                MERN stack and delivered as a SaaS platform, designed to
                simplify corporate training, compliance, and employee skill
                development.
              </p>
              <p>
                Our platform provides an intuitive interface with key features
                such as course management, automated training workflows,
                compliance tracking, and mobile-friendly learning. Tailored for
                mid-sized to large organizations, we emphasize scalability,
                engagement tools like gamification, and detailed reporting to
                ensure industry compliance.
              </p>
              <p>
                While Stadium LMS offers strong integration capabilities and a
                seamless user experience, the company has since shifted its
                focus to its new Accreditation platform, temporarily pausing new
                LMS deployments—only existing clients continue to receive
                support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="max-w-6xl mx-auto py-16 px-4 bg-slate-50">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-bold text-center mb-4 text-slate-900"
        >
          AI-Powered Learning Platform
        </motion.h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-slate-600">
          Built for modern, distributed learning — with AI, analytics and
          compliance at the core.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-blue-900" />}
              title="Cloud-Based SaaS"
              desc="White-label solutions with 72-hour deployment for institutions."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          >
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-blue-900" />}
              title="Mobile-First"
              desc="iOS/Android apps with offline learning capabilities."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          >
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-900" />}
              title="Virtual Classes"
              desc="Zoom/Meet integration for live sessions."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
          >
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-blue-900" />}
              title="AI Proctoring"
              desc="Face/browser monitoring for secure exams."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
          >
            <FeatureCard
              icon={<BarChart2 className="w-8 h-8 text-blue-900" />}
              title="Predictive Analytics"
              desc="ML-based performance insights."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.25 }}
          >
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-900" />}
              title="India-Focused"
              desc="NAAC/NBA, UGC/AICTE compliance tools."
            />
          </motion.div>
        </div>
      </section>

      {/* TAILORED FOR INDIAN INSTITUTIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold text-center mb-4 text-slate-900"
          >
            Tailored for Indian Institutions
          </motion.h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-slate-600">
            Designed with accreditation, regional diversity and operational
            realities of Indian education in mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <SpecializationCard
                icon={<FileText className="w-6 h-6 text-blue-900" />}
                title="Regulatory Compliance"
                items={[
                  "NAAC/NBA accreditation tools",
                  "UGC/AICTE norm adherence",
                  "Automated audit trails",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            >
              <SpecializationCard
                icon={<MessageSquare className="w-6 h-6 text-blue-900" />}
                title="Regional Support"
                items={[
                  "12+ Indian language interfaces",
                  "Localized content delivery",
                  "WhatsApp/email automation",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            >
              <SpecializationCard
                icon={<CreditCard className="w-6 h-6 text-blue-900" />}
                title="Operational Tools"
                items={[
                  "Fee management + payment gateways",
                  "Faculty performance tracking",
                  "Geo-fenced attendance",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold text-center mb-10 text-slate-900"
          >
            Key Differentiators
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                  <Zap className="w-5 h-5 text-[#0B79D4]" />
                </div>
                <h4 className="font-bold text-base text-gray-900">
                  72-Hour Deployment
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                Turnkey solutions for rapid institutional onboarding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                  <Clock className="w-5 h-5 text-[#0B79D4]" />
                </div>
                <h4 className="font-bold text-base text-gray-900">
                  AI-Driven Efficiency
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                Automated grading, plagiarism checks, and facial recognition
                attendance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                  <ShieldCheck className="w-5 h-5 text-[#0B79D4]" />
                </div>
                <h4 className="font-bold text-base text-gray-900">
                  Enterprise-Grade Security
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                DRM-protected content, watermarking, and role-based access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0B79D4] via-sky-500 to-[#0B79D4] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Empower Your Institution with AI-LMS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            className="text-sm sm:text-base mb-8 max-w-2xl mx-auto text-sky-100"
          >
            Currently supporting existing clients with maintenance—contact us
            for compliance-focused solutions or future deployment inquiries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B79D4] shadow-[0_10px_30px_rgba(15,23,42,0.45)] hover:bg-slate-100 hover:-translate-y-0.5 transition-transform duration-150"
            >
              Connect with Our EdTech Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col border border-slate-100 hover:border-[#0B79D4]/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B79D4]/10 mb-4">
        {icon}
      </div>
      <h4 className="font-bold text-base mb-2 text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600 flex-grow">{desc}</p>
    </div>
  );
}

// Specialization Card
function SpecializationCard({ icon, title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full border border-slate-100 hover:border-[#0B79D4]/30 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-full mr-3">{icon}</div>
        <h3 className="font-bold text-base text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mt-[5px] mr-2 h-1.5 w-1.5 rounded-full bg-[#0B79D4]" />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
