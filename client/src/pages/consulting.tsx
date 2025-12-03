import React from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Layers,
  Settings,
  Users,
  BookOpen,
  Lightbulb,
  Globe,
  Clock,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

export default function Consulting() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-[-4rem] h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.16]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/15">
              Strategy • BFSI • eGovernance • EdTech
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Strategy &amp Consulting:{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Bridge the Gap Between Vision and Results
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-slate-100/90">
              Expert guidance in digital transformation, tech modernization, and
              policy implementation—backed by hands-on BFSI and eGovernance
              experience.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_32px_rgba(8,145,178,0.75)] hover:bg-cyan-300 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Let’s Innovate Together &rarr;
              </Link>
            </div>

            {/* Mini stats strip */}
            <div className="mt-6 grid gap-3 text-[0.7rem] text-slate-100/85 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Operational efficiency
                </div>
                <div className="text-xs font-semibold text-white">
                  30–50% gains possible
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Legacy modernization
                </div>
                <div className="text-xs font-semibold text-white">
                  20–40% cost reduction
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Compliance
                </div>
                <div className="text-xs font-semibold text-white">
                  Accelerated with evolving regulations
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONSULTING OVERVIEW */}
      <section className="max-w-6xl mx-auto py-14 px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 p-7 md:p-9"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Our Consulting Approach
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
              We combine strategic vision with practical execution to deliver
              measurable outcomes:{" "}
              <span className="font-semibold">
                30-50% operational efficiency gains
              </span>
              , <span className="font-semibold">20-40% cost reduction</span> in
              legacy modernization, and accelerated compliance with evolving
              regulations.
            </p>
          </div>

          {/* Value Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <FeatureCard
              icon={<BarChart2 className="w-6 h-6" />}
              title="Digital Transformation"
              desc="Align technology with business goals—from cloud migration to smart city infrastructure, digitize citizen services with secure, scalable platforms."
              tag="Vision to execution"
            />
            <FeatureCard
              icon={<Layers className="w-6 h-6" />}
              title="Tech Modernization"
              desc="Legacy system upgrades, CBDC implementation, and scalable architectures ensuring sustainable digital growth."
              tag="Future-ready stacks"
            />
            <FeatureCard
              icon={<Settings className="w-6 h-6" />}
              title="Policy & Compliance"
              desc="GDPR, PSD2, and local regulatory frameworks integrated into solutions."
              tag="Regulation by design"
            />
          </div>
        </motion.div>
      </section>

      {/* KEY SECTORS */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
              Key{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                sectors
              </span>
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
              Deep domain consulting across regulated and fast-moving industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            <SectorCard
              icon={<Globe className="w-6 h-6" />}
              title="BFSI"
              desc="Future-proofing financial ecosystems with secure, scalable, and regulatory-compliant digital solutions—from core banking modernization to AI-driven risk analytics."
            />
            <SectorCard
              icon={<Users className="w-6 h-6" />}
              title="eGovernance"
              desc="Transforming citizen services through seamless, transparent, and inclusive digital governance platforms powered by secure infrastructure and smart technologies."
            />
            <SectorCard
              icon={<BookOpen className="w-6 h-6" />}
              title="EdTech"
              desc="Scalable learning platforms, LMS integrations, and AI-powered personalized education tools."
            />
            <SectorCard
              icon={<Zap className="w-6 h-6" />}
              title="Startups & SMEs"
              desc="Empowering agile businesses with cost-effective, scalable tech solutions—automation, cloud, and AI—to accelerate growth and outmaneuver competition."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Why choose{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              our consulting?
            </span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            A blend of seasoned leadership and fresh, agile execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
              <Clock className="w-5 h-5 text-blue-900" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900">
              Decades of Leadership
            </h4>
            <p className="text-gray-600 text-sm">
              Founders with proven BFSI and IT expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
              <Zap className="w-5 h-5 text-blue-900" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900">
              Young &amp; Agile
            </h4>
            <p className="text-gray-600 text-sm">
              Fast, cost-effective solutions without bureaucracy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
              <Lightbulb className="w-5 h-5 text-blue-900" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-900">
              Fresh Yet Experienced
            </h4>
            <p className="text-gray-600 text-sm">
              New brand, built on years of real-world execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-18 px-4 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.16]" />
        <div className="pointer-events-none absolute -right-28 top-0 h-60 w-60 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-sky-500/25 blur-3xl" />

        <div className="relative max-w-4xl mx-auto py-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Have a Vision or Project Idea?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90"
          >
            Let’s turn it into reality—efficiently and impactfully.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_32px_rgba(8,145,178,0.75)] hover:bg-cyan-300 hover:-translate-y-0.5 transition-transform duration-150"
            >
              Book a Strategy Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Sector Card */
function SectorCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="bg-slate-50 hover:bg-white transition-all p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg flex flex-col"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
        {icon}
      </div>
      <h4 className="font-semibold text-lg mb-2 text-blue-900">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
    </motion.div>
  );
}

/* Reusable Feature Card */
function FeatureCard({
  icon,
  title,
  desc,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
          {icon}
        </div>
        <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-600 bg-white rounded-full px-2 py-1">
          {tag}
        </span>
      </div>
      <h4 className="font-semibold text-lg mb-2 text-slate-900">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
    </motion.div>
  );
}
