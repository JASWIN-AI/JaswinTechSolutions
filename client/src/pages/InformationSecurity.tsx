import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Network,
  AlertTriangle,
  FileSearch,
  Users,
  CloudUpload,
  BadgeCheck,
} from "lucide-react";

const InformationSecurity = () => {
  const sections = [
    {
      title: "Data Encryption",
      content:
        "Protects sensitive information by converting it into coded format that only authorized users can access with the correct decryption key.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Encryption visualization",
    },
    {
      title: "Access Control",
      content:
        "Ensures only authorized personnel access specific data through authentication methods like passwords, biometrics, and MFA.",
      image:
        "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Padlock with heavy chain representing secure access control",
    },
    {
      title: "Network Security",
      content:
        "Protects network integrity with firewalls, IDS/IPS systems, and secure VPNs to monitor and control network traffic.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Network infrastructure",
    },
    {
      title: "Incident Response",
      content:
        "Prepares organizations with clear breach response plans including threat identification and recovery procedures.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Team working",
    },
    {
      title: "Security Audits",
      content:
        "Regular vulnerability assessments and penetration testing to maintain robust security standards.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Audit dashboard",
    },
    {
      title: "Employee Training",
      content:
        "Educates staff on security best practices and phishing awareness to reduce human error risks.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Training session",
    },
    {
      title: "Data Backup",
      content:
        "Implements robust backup strategies with offsite storage to protect against data loss.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Cloud backup storage",
    },
    {
      title: "Compliance",
      content:
        "Adheres to GDPR, HIPAA, PCI-DSS regulations to protect data and build customer trust.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Compliance documents",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const getIconForTitle = (title: string) => {
    switch (title) {
      case "Data Encryption":
        return Lock;
      case "Access Control":
        return KeyRound;
      case "Network Security":
        return Network;
      case "Incident Response":
        return AlertTriangle;
      case "Security Audits":
        return FileSearch;
      case "Employee Training":
        return Users;
      case "Data Backup":
        return CloudUpload;
      case "Compliance":
        return BadgeCheck;
      default:
        return ShieldCheck;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-16 overflow-hidden">
      {/* HERO – full-width CSS banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B79D4] text-white">
        {/* background textures */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.3),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[length:120px_120px]" />
        </div>
        {/* animated blobs */}
        <motion.div
          animate={{ y: [-18, 18, -18] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#0B79D4]/35 blur-3xl"
        />
        <motion.div
          animate={{ y: [18, -18, 18] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 ring-1 ring-white/20 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Information Security
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Information Security
            </h1>
            <p className="text-base md:text-lg text-slate-100/90">
              Protecting your digital assets from modern cyber threats
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.15em] text-sky-100/80">
              <span className="rounded-full border border-white/20 px-3 py-1">
                Data Protection
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1">
                Network Defense
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1">
                Compliance &amp; Governance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO CARD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <motion.div
          {...fadeUp}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-7"
        >
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            In today's digital landscape, comprehensive information security is
            essential for organizations of all sizes to protect sensitive data
            from unauthorized access and cyber threats.
          </p>
        </motion.div>
      </section>

      {/* GRID OF SECURITY DOMAINS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          {...fadeUp}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Security Domains We Cover
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            A layered approach combining technology, process and people to
            safeguard every part of your organisation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {sections.map((section, index) => {
            const Icon = getIconForTitle(section.title);
            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 22px 45px rgba(15,23,42,0.15)",
                }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all"
              >
                {/* image header */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-900/10 to-transparent" />
                  <div className="absolute left-4 bottom-3 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-slate-50">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{section.title}</span>
                  </div>
                </div>

                {/* body */}
                <div className="p-5 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA / CONCLUSION */}
      <section className="bg-gradient-to-r from-[#0B79D4] to-sky-600 text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Secure Your Digital Future
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="mb-6 text-sm sm:text-base text-white/90"
          >
            Proactive information security is a strategic investment for
            long-term business success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
          >
            <Link
              href="/contact"
              className="bg-white text-[#0B79D4] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InformationSecurity;
