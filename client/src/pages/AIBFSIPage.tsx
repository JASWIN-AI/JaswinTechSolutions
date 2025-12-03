import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";

import {
  BarChart2,
  ShieldCheck,
  Users,
  Activity,
  TrendingUp,
  Eye,
  PieChart,
  Cpu,
} from "lucide-react";

const AIBFSIPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background + blobs */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B79D4]/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-[-4rem] h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-100 ring-1 ring-white/20">
              AI-powered banking intelligence
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              AI-BFSI{" "}
              <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFCA28] bg-clip-text text-transparent">
                DST &amp; Reporting
              </span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-slate-100/90">
              The cognitive command center for modern banking operations.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#0B79D4] shadow-[0_10px_30px_rgba(15,23,42,0.65)] hover:bg-slate-100 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Request Demo
              </Link>
            </div>

            {/* Mini highlights */}
            <div className="mt-6 grid gap-3 text-[0.7rem] text-slate-100/85 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Coverage
                </div>
                <div className="text-xs font-semibold text-white">
                  CXOs to frontline &amp; DSAs
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Intelligence
                </div>
                <div className="text-xs font-semibold text-white">
                  KPIs, risk, compliance &amp; ops
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="uppercase tracking-wide text-slate-300/80">
                  Engine
                </div>
                <div className="text-xs font-semibold text-white">
                  AI rules, ML &amp; NLP at core
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Accent stats card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1"
          >
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_24px_60px_rgba(15,23,42,0.85)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0B79D4]/20">
                  <BarChart2 className="h-5 w-5 text-sky-200" />
                </div>
                <div>
                  <p className="text-[0.75rem] uppercase tracking-wide text-slate-200/80">
                    Unified DST &amp; reporting
                  </p>
                  <p className="text-xs text-slate-300">
                    Real-time command center for Indian BFSI
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-[0.7rem] text-slate-100">
                <div className="rounded-xl bg-black/30 px-2 py-3">
                  <div className="text-xs font-semibold text-sky-200">
                    Real-time
                  </div>
                  <div className="mt-1 text-[0.7rem] text-slate-200">
                    Portfolio &amp; risk KPIs
                  </div>
                </div>
                <div className="rounded-xl bg-black/30 px-2 py-3">
                  <div className="text-xs font-semibold text-sky-200">
                    Compliance
                  </div>
                  <div className="mt-1 text-[0.7rem] text-slate-200">
                    RBI / SOX / CRILC
                  </div>
                </div>
                <div className="rounded-xl bg-black/30 px-2 py-3">
                  <div className="text-xs font-semibold text-sky-200">
                    Insights
                  </div>
                  <div className="mt-1 text-[0.7rem] text-slate-200">
                    ML &amp; NLP driven
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto py-16 px-4">
          <div className="rounded-3xl bg-white shadow-sm border border-slate-100 px-6 py-8 md:px-10 md:py-10">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed text-center">
              A unified, role-agnostic dashboard suite with an AI-driven rules
              engine, designed to transform decision-making across India&apos;s
              banking ecosystem. From CXOs to frontline staff and DSAs, our
              platform delivers real-time KPIs, predictive risk analytics,
              automated compliance (RBI/SOX/CRILC), and operational insights
              through intelligent machine learning and NLP.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* KEY CAPABILITIES */}
      <section id="capabilities" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                From monitoring to{" "}
                <span className="bg-gradient-to-r from-[#0B79D4] to-sky-400 bg-clip-text text-transparent">
                  actionable intelligence
                </span>
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
                Core capability pillars designed specifically for Indian BFSI
                operations and regulatory realities.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <AnimatedFeatureCard
              icon={<Activity className="w-5 h-5" />}
              title="Smart Monitoring"
              description="Track portfolios, fraud patterns & customer sentiment."
              color="bg-sky-100 text-sky-600"
            />
            <AnimatedFeatureCard
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Regulatory Readiness"
              description="Auto-generated reports for RBI, BSR, ISO audits."
              color="bg-emerald-100 text-emerald-600"
            />
            <AnimatedFeatureCard
              icon={<TrendingUp className="w-5 h-5" />}
              title="Performance Optimization"
              description="Sales commissions, SLA bottlenecks, credit heatmaps."
              color="bg-violet-100 text-violet-600"
            />
            <AnimatedFeatureCard
              icon={<Users className="w-5 h-5" />}
              title="Partner Ecosystem"
              description="DSA productivity tracking with conversion analytics."
              color="bg-amber-100 text-amber-600"
            />
          </div>
        </div>
      </section>

      {/* COGNITIVE AUTOMATION ENGINE */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Cognitive{" "}
                <span className="bg-gradient-to-r from-[#0B79D4] to-sky-400 bg-clip-text text-transparent">
                  Automation Engine
                </span>
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
                From raw data streams to role-specific decision intelligence in
                three tightly integrated stages.
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Soft center glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
              <AnimatedProcessStep
                icon={<Cpu className="w-7 h-7 text-[#0B79D4]" />}
                title="Data Ingestion"
                description="Aggregates 100+ data sources in real-time."
                delay={0.1}
              />
              <AnimatedProcessStep
                icon={<PieChart className="w-7 h-7 text-[#0B79D4]" />}
                title="AI Processing"
                description="ML models analyze patterns and risks."
                delay={0.25}
              />
              <AnimatedProcessStep
                icon={<Eye className="w-7 h-7 text-[#0B79D4]" />}
                title="Actionable Insights"
                description="Role-specific dashboards with prescriptive analytics."
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <FadeInSection>
        <section className="max-w-4xl mx-auto py-20 px-4">
          <div className="rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] border border-slate-100 p-8 md:p-10 transform hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.22)] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B79D4]/10 mr-4">
                <BarChart2 className="w-6 h-6 text-[#0B79D4]" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  National Banking Executive
                </h4>
                <p className="text-xs text-slate-500">Top 3 Private Bank</p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 italic leading-relaxed">
              “The AI-BFSI platform reduced our compliance reporting time by
              70% while improving accuracy. The predictive risk models helped us
              identify ₹42M in potential NPAs before they materialized.”
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B79D4] via-sky-500 to-[#0B79D4] text-white py-16 px-4">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.18]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Transform Your Banking Operations
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-sky-100 max-w-2xl mx-auto">
              Break data silos with cognitive automation and enhance
              profitability across your financial value chain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B79D4] shadow-[0_10px_30px_rgba(15,23,42,0.45)] hover:bg-slate-100 hover:-translate-y-0.5 transition-transform duration-150"
              >
                Schedule Consultation
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

/* REUSABLE ANIMATED COMPONENTS */

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedFeatureCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-base text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
    </motion.div>
  );
};

const AnimatedProcessStep = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-center"
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
        {icon}
      </div>
      <h3 className="font-semibold text-base text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </motion.div>
  );
};

export default AIBFSIPage;
