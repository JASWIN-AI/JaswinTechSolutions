import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Code, BookOpen, BarChart, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const HumanCapital = () => {
  const services = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Specialized Staffing",
      items: [
        "Executive search",
        "Staff augmentation",
        "Contract hiring",
        "7-day free trial period",
      ],
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Tech Solutions",
      items: [
        "Fintech platforms",
        "eGovernance systems",
        "ISO/GDPR/SOC compliant",
        "Agile development",
      ],
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Core HR Services",
      items: [
        "HR Outsourcing (HRO)",
        "Compensation consulting",
        "Performance management",
        "Compliance & employment law",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute -right-28 -top-20 h-72 w-72 rounded-full bg-sky-500/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-[-3rem] h-60 w-60 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.16]" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-1/2 space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/15">
                Talent • Tech • HR • Compliance
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-50">
                Human Capital:{" "}
                <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  Driving Business Success
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-100/90">
                We bridge the gap between workforce excellence and digital innovation
                through end-to-end talent solutions.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-sky-400 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.75)] hover:bg-sky-300 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Get Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>

              {/* Small credibility strip */}
              <div className="mt-4 grid gap-3 text-[0.7rem] text-slate-100/85 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="uppercase tracking-wide text-slate-300/80">
                    BFSI &amp; Tech focus
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Domain-led hiring &amp; solutions
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="uppercase tracking-wide text-slate-300/80">
                    Risk-free onboarding
                  </div>
                  <div className="text-xs font-semibold text-white">
                    7-day trial on talent
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="uppercase tracking-wide text-slate-300/80">
                    Secure by design
                  </div>
                  <div className="text-xs font-semibold text-white">
                    ISO / GDPR / SOC aligned
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Stat grid */}
            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <StatCard value="100+" label="Institution Network" />
              <StatCard value="7-Day" label="Free Trial" highlight />
              <StatCard value="24/7" label="Tech Support" />
              <StatCard value="ISO" label="Certified" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DUAL VALUE PROPOSITION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Talent Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="h-8 w-1 rounded-full bg-sky-500" />
                Talent Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                For the BFSI and tech sectors, we offer specialized staffing
                including executive search, staff augmentation, and contract
                hiring. Our unique network delivers rigorously screened
                professionals - both fresh and experienced - who are truly
                plug-and-play ready.
              </p>
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-5 py-5 shadow-sm">
                <h3 className="font-bold text-lg text-sky-800 mb-2">
                  Client Confidence Guarantee
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  7-day free trial to assess deployed talent risk-free with
                  no-cost replacements if needed.
                </p>
              </div>
            </motion.div>

            {/* Digital Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="h-8 w-1 rounded-full bg-emerald-500" />
                Digital Innovation
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                We develop secure, scalable digital solutions like fintech
                platforms, EdTech SOlutions and eGovernance systems, following
                agile methodologies from concept to deployment. All solutions
                comply with global standards (ISO/GDPR/SOC).
              </p>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 px-5 py-5 shadow-sm">
                <h3 className="font-bold text-lg text-emerald-800 mb-2">
                  Dual Advantage
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Get both high-performing teams and future-ready technology
                  under one roof.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-18 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our{" "}
              <span className="bg-gradient-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent">
                Comprehensive
              </span>{" "}
              Offerings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
              Human capital services and digital solutions designed to work
              together across your talent and technology stack.
            </p>
          </motion.div>

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

const StatCard = ({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative overflow-hidden rounded-2xl border ${
      highlight
        ? "border-sky-300 bg-sky-50/90"
        : "border-slate-200 bg-white/95"
    } px-5 py-5 shadow-sm`}
  >
    {highlight && (
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-100/80 via-transparent to-emerald-100/60" />
    )}
    <div className="relative">
      <p
        className={`text-2xl sm:text-3xl font-bold mb-1 ${
          highlight ? "text-sky-700" : "text-slate-900"
        }`}
      >
        {value}
      </p>
      <p className="text-xs sm:text-sm text-slate-600">{label}</p>
    </div>
  </motion.div>
);

const ServiceCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.45 }}
    whileHover={{ y: -8 }}
    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
  >
    <div className="bg-gradient-to-r from-sky-50 to-slate-50 px-6 py-5 flex items-center">
      <div className="bg-sky-100 p-3 rounded-xl mr-4 text-sky-700 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="mt-[2px] mr-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default HumanCapital;
