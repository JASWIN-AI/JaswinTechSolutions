import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  CloudCog,
  Rocket,
  Layers,
  GitBranch,
  Server,
  Database,
  Users2,
  CheckCircle2,
} from "lucide-react";

const CloudDevelopmentServices = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.5 },
  };

  const features = [
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Manage and provision cloud infrastructure using declarative code for automated, consistent deployments.",
      icon: Layers,
    },
    {
      title: "CI/CD Pipelines",
      description:
        "Automated delivery pipelines enabling deployment at speed with quality and transparency.",
      icon: GitBranch,
    },
    {
      title: "Scalable Environments",
      description:
        "On-demand environments that adapt to project growth without operational bottlenecks.",
      icon: CloudCog,
    },
    {
      title: "Collaboration Tools",
      description:
        "Integrated toolsets for version control, issue tracking, and real-time collaboration.",
      icon: Users2,
    },
    {
      title: "Managed Databases",
      description:
        "Fully managed DB solutions with backups, scaling, replication & automated resilience.",
      icon: Database,
    },
    {
      title: "Secure Cloud Deployment",
      description:
        "Bank-grade security with encryption and access controls baked into your DevOps pipeline.",
      icon: Server,
    },
  ];

  const benefitsLeft = [
    "Flexibility and Agility: Quickly adapt to changing project requirements for faster innovation.",
    "Cost Efficiency: Reduce capital expenditures with pay-as-you-go cloud resources.",
    "Enhanced Security: Robust security including encryption and advanced access control.",
  ];

  const benefitsRight = [
    "Global Reach: Deploy applications across regions for minimal latency.",
    "Expert Support: Hands-on cloud specialists guiding your transformation.",
    "Seamless Integration: Works with existing workflows and DevOps toolchains.",
  ];

  return (
    <div className="bg-white min-h-screen pt-16 overflow-hidden">
      {/* HERO – full banner CSS background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B79D4] text-white">
        {/* background accents */}
        <div className="absolute inset-0 opacity-60">
          {/* soft radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.35),transparent_55%)]" />
          {/* subtle diagonal grid */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[length:120px_120px]" />
        </div>

        {/* animated blobs */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0B79D4]/40 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl"
        />

        {/* content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 ring-1 ring-white/20 mb-4">
              <CloudCog className="w-3.5 h-3.5" />
              Cloud for development teams
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              Cloud Solutions for Development Teams
            </h1>

            <p className="text-base md:text-xl text-slate-100/90 leading-relaxed mb-8">
              Empower your organization with tailored cloud technology that enhances collaboration,
              scalability, and efficiency throughout your development process.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B79D4] shadow-[0_15px_38px_rgba(15,23,42,0.55)] hover:bg-slate-50 transition-all"
                >
                  Contact Us
                  <Rocket className="w-4 h-4" />
                </motion.button>
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-2.5 text-sm font-semibold text-sky-50 hover:bg-white/10 transition-all"
              >
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20 md:py-24"
      >
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Features Built for Modern Development
          </h2>
          <p className="text-lg text-slate-600 mt-3 max-w-3xl mx-auto">
            Scalable, secure and high-performance cloud engineering tailored for agile teams and
            fast-moving products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all"
              >
                <div className="mb-4 inline-flex items-center justify-center h-14 w-14 bg-[#0B79D4]/10 rounded-xl text-[#0B79D4]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-14"
          >
            Why Development Teams Choose Our Cloud Services
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[benefitsLeft, benefitsRight].map((col, idx) => (
              <div key={idx} className="space-y-7">
                {col.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#0B79D4] mt-1" />
                    <p className="text-lg text-slate-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B79D4] to-sky-600 py-20 md:py-24 text-center">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Transform Your Development Process?
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/90 max-w-3xl mx-auto mb-10"
        >
          Whether you're building your first application or modernizing
          enterprise platforms, we have the cloud solutions to support your
          engineering teams end to end.
        </motion.p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#0B79D4] font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Connect with Us
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default CloudDevelopmentServices;
