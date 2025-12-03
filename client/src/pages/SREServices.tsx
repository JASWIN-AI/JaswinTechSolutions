import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ServerCog,
  Activity,
  BarChart3,
  PiggyBank,
  Zap,
  Users2,
  CheckCircle2,
} from "lucide-react";

const SREServices = () => {
  const benefits = [
    {
      title: "Unmatched Reliability",
      desc: "Proactive monitoring and alerting systems ensure optimal availability and performance.",
      icon: Activity,
    },
    {
      title: "Scalable Solutions",
      desc: "Seamlessly accommodate growing traffic and user demands without performance compromise.",
      icon: BarChart3,
    },
    {
      title: "Cost-Effective Operations",
      desc: "Automation and optimization reduce operational costs while improving efficiency.",
      icon: PiggyBank,
    },
    {
      title: "Faster Time to Market",
      desc: "Accelerate development cycles with streamlined deployment processes.",
      icon: Zap,
    },
    {
      title: "Enhanced Collaboration",
      desc: "Foster teamwork between development and operations with aligned goals.",
      icon: Users2,
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 md:py-24 gap-10">
          {/* Accent blobs */}
          <motion.div
            animate={{ y: [-18, 18, -18] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-[#0B79D4]/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [18, -18, 18] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-sky-400/25 blur-3xl"
          />

          {/* Text */}
          <motion.div
            {...fadeUp}
            className="relative lg:w-1/2 space-y-6 z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B79D4]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B79D4]">
              <ServerCog className="w-3.5 h-3.5" />
              SRE / Managed Services
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Elevate Your Operations with Our SRE Managed Services
            </h1>
            <p className="text-lg text-slate-700">
              Achieve unparalleled operational excellence with our cutting-edge
              Site Reliability Engineering solutions.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="pt-2"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-[#0B79D4] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(11,121,212,0.55)] hover:bg-[#0a68b5] transition-all"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            {...fadeUp}
            className="relative lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.25)]"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0B79D4]/25 via-sky-300/25 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Cloud infrastructure and monitoring dashboard"
              className="relative w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 md:py-20">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Why Choose Our SRE Managed Services?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              We embed reliability, scalability and cost efficiency into the heart of your platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
                  }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#0B79D4]/40 shadow-sm transition-all"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B79D4] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16 md:py-20">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12"
          >
            Key Features of Our SRE Managed Services
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image */}
            <motion.div
              {...fadeUp}
              className="lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.25)]"
            >
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0B79D4]/20 via-sky-200/25 to-transparent blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="SRE team working on monitoring dashboard"
                className="relative w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>

            {/* Bullet list */}
            <motion.div
              {...fadeUp}
              className="lg:w-1/2 space-y-4 text-sm sm:text-base text-slate-800"
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#0B79D4]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span>
                    <strong className="font-semibold">
                      Comprehensive Monitoring:
                    </strong>{" "}
                    24/7 monitoring of systems, applications, and infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#0B79D4]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span>
                    <strong className="font-semibold">Incident Response:</strong>{" "}
                    Swift handling with root cause analysis and post-mortems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#0B79D4]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span>
                    <strong className="font-semibold">Capacity Planning:</strong>{" "}
                    Resource analysis and forecasting for future needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#0B79D4]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span>
                    <strong className="font-semibold">Automation:</strong>{" "}
                    Latest tools to streamline processes and reduce errors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#0B79D4]">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span>
                    <strong className="font-semibold">Custom SLOs:</strong>{" "}
                    Tailored Service Level Objectives with regular reporting
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 rounded-3xl bg-gradient-to-r from-[#0B79D4]/10 via-sky-100 to-[#0B79D4]/10 p-10 sm:p-12 text-center border border-[#0B79D4]/15 shadow-sm">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Partner with Us for Success
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto mb-6"
          >
            Our dedicated professionals will tailor SRE solutions to your unique
            requirements. Transform your operations and drive business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full bg-[#0B79D4] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(11,121,212,0.55)] hover:bg-[#0a68b5] transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default SREServices;
