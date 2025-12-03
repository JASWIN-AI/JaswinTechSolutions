import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Brain,
  Database,
  Workflow,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const AIDataConsulting = () => {
  const services = [
    {
      title: "AI Strategy Consulting",
      description: [
        "We develop comprehensive AI adoption roadmaps tailored to your business goals.",
        "Identify high-impact use cases where AI can drive measurable value.",
        "Assess your current data infrastructure and technical readiness.",
        "Create implementation timelines with clear milestones and ROI metrics.",
        "Establish governance frameworks for ethical and responsible AI use.",
        "Provide ongoing support for strategy refinement and execution.",
      ],
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
      alt: "AI strategy planning session",
      icon: Brain,
    },
    {
      title: "Data Infrastructure Design",
      description: [
        "Design scalable data architectures optimized for analytics and AI workloads.",
        "Implement modern data lakes and warehouses with proper governance.",
        "Configure ETL/ELT pipelines for efficient data movement and transformation.",
        "Establish data quality monitoring and validation processes.",
        "Ensure security and compliance with industry regulations.",
        "Optimize infrastructure for performance and cost-efficiency.",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      alt: "Server rack in data center",
      reverse: true,
      icon: Database,
    },
    {
      title: "Machine Learning Implementation",
      description: [
        "Develop custom ML models tailored to your specific business needs.",
        "Implement end-to-end pipelines from data prep to model deployment.",
        "Optimize model performance through rigorous testing and validation.",
        "Create monitoring systems for model drift and performance degradation.",
        "Establish MLOps practices for continuous improvement.",
        "Integrate models with existing business applications and workflows.",
      ],
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
      alt: "Machine learning code visualization",
      icon: Workflow,
    },
    {
      title: "Data Governance & Compliance",
      description: [
        "Develop policies for data quality, security, and privacy.",
        "Implement metadata management and data lineage tracking.",
        "Establish role-based access controls and audit trails.",
        "Ensure compliance with GDPR, CCPA, and industry regulations.",
        "Create data retention and disposal policies.",
        "Train staff on data handling best practices and compliance.",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      alt: "Team reviewing compliance documents",
      reverse: true,
      icon: ShieldCheck,
    },
    {
      title: "Predictive Analytics Solutions",
      description: [
        "Develop forecasting models for demand planning and inventory optimization.",
        "Create customer churn prediction and retention models.",
        "Implement predictive maintenance for equipment and assets.",
        "Build risk assessment models for financial services.",
        "Develop recommendation engines for personalized experiences.",
        "Visualize insights through interactive dashboards and reports.",
      ],
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
      alt: "Analytics dashboard on screen",
      icon: LineChart,
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* HERO – gradient + subtle shapes, full-width */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background accents */}
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
              AI • Data • Strategy • Governance
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="block text-slate-50">
                AI &amp; Data Consulting Services
              </span>
              <span className="mt-2 block bg-gradient-to-r from-[#4FC3F7] via-[#0B79D4] to-[#42A5F5] bg-clip-text text-transparent">
                From data foundation to intelligent execution.
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-200/90">
              Expert guidance to transform your organisation with artificial
              intelligence and data-driven insights — from strategy and
              architecture to implementation, governance, and analytics.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center rounded-full bg-[#0B79D4] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(11,121,212,0.55)] hover:bg-[#0a68b5] hover:-translate-y-0.5 transition-transform duration-150">
                  Schedule a consultation
                </a>
              </Link>
              <span className="text-xs text-slate-300/80">
                Strategy • Architecture • MLOps • Governance
              </span>
            </div>
          </motion.div>

          {/* Right: Highlight card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1"
          >
            <div className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_18px_40px_rgba(15,23,42,0.75)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-100">
                Typical outcomes
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-semibold">
                      Faster AI experimentation cycles
                    </div>
                    <p className="text-xs text-slate-200/80">
                      From ad-hoc pilots to a repeatable, governed AI pipeline.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                  <div>
                    <div className="font-semibold">
                      Strong data foundations for analytics
                    </div>
                    <p className="text-xs text-slate-200/80">
                      Architectures built for scale, observability and
                      compliance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                  <div>
                    <div className="font-semibold">
                      Responsible &amp; compliant AI rollouts
                    </div>
                    <p className="text-xs text-slate-200/80">
                      Governance, monitoring and controls baked in from day one.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-7"
        >
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Our AI and Data Consulting services help organizations navigate the
            complex landscape of artificial intelligence and advanced analytics.
            We combine technical expertise with business acumen to deliver
            solutions that drive real impact. Whether you're just beginning your
            AI journey or looking to scale existing initiatives, our consultants
            provide the strategic guidance and hands-on implementation support
            you need to succeed in today's data-driven economy. We focus on
            practical, measurable results while ensuring ethical and responsible
            use of these powerful technologies.
          </p>
        </motion.div>
      </section>

      {/* SERVICES – alternating rows, animated */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className={`rounded-2xl shadow-sm border border-slate-100 overflow-hidden bg-white/90 backdrop-blur ${
                isEven ? "" : "bg-slate-50/90"
              }`}
            >
              <div
                className={`flex flex-col ${
                  service.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image side */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B79D4]/20 via-transparent to-sky-200/20" />
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-52 w-full object-cover md:h-full"
                  />
                </div>

                {/* Text side */}
                <div className="md:w-3/5 p-6 sm:p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                  </div>

                  <ul className="space-y-2 text-sm sm:text-[0.95rem] text-slate-700">
                    {service.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="mt-[3px] mr-2 h-1.5 w-1.5 rounded-full bg-[#0B79D4]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B79D4] via-sky-500 to-[#0B79D4] text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Start Your AI Transformation Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            className="text-sm sm:text-base text-sky-100 mb-6"
          >
            Our consultants are ready to help you harness the power of data and
            artificial intelligence — from roadmap to rollout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href="/contact">
              <a className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0B79D4] shadow-[0_10px_26px_rgba(15,23,42,0.30)] hover:bg-slate-100 hover:-translate-y-0.5 transition-transform duration-150">
                Schedule Consultation
              </a>
            </Link>
            <Link href="/contact">
              <a className="rounded-full border border-white/75 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/15 hover:-translate-y-0.5 transition-transform duration-150">
                View Case Studies
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIDataConsulting;
