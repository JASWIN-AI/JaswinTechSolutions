import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI-LMS Platform",
      description:
        "A cloud-based SaaS platform built on MERN stack, simplifying corporate training, compliance, and skill development with AI-powered tools.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Learning Management System",
    },
    {
      title: "AI-BFSI DST & Reporting",
      description:
        "A unified, role-agnostic dashboard suite with an AI-driven rules engine, designed to transform decision-making across India's banking ecosystem.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Banking and Data Analytics",
    },
    {
      title: "JASWIN Service Desk Plus",
      description:
        "JASWIN Service Desk Plus is a next-generation, AI-powered Service Desk Management platform built specifically for the operational and compliance demands of Indian banking and IT enterprises.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Enterprise Software",
    },
    {
      title: "Cloud Migration",
      description:
        "Seamless migration of enterprise applications to AWS cloud infrastructure with improved scalability.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Cloud Solutions",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile application with real-time features and intuitive user experience design.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Mobile Development",
    },
    {
      title: "Security Infrastructure",
      description:
        "Advanced cybersecurity solution with threat detection and automated response capabilities.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Cybersecurity",
    },
  ];

  return (
    <div className="pt-16 bg-slate-50 overflow-hidden">
      {/* HERO / INTRO */}
      <section className="relative py-16 sm:py-20 bg-white">
        {/* Accent blobs */}
        <motion.div
          animate={{ y: [-18, 18, -18] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-[#0B79D4]/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [18, -18, 18] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute -right-24 bottom-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex-1 text-center md:text-left"
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-[#0B79D4]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B79D4] mb-3">
                AI software engineering
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Enterprise AI Solutions Development
              </h1>

              <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                <p>
                  We provide{" "}
                  <span className="font-semibold text-slate-900">
                    end-to-end software development services
                  </span>
                  , delivering fully integrated digital solutions from initial
                  concept to deployment and beyond.
                </p>

                <div>
                  <p className="font-medium text-slate-900 mb-1">
                    Our turnkey approach covers:
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-sm sm:text-base space-y-1">
                    <li>Requirement analysis &amp; system architecture</li>
                    <li>Agile development &amp; rigorous testing</li>
                    <li>Seamless implementation &amp; ongoing support</li>
                  </ul>
                </div>

                <p>
                  By combining cutting-edge technologies with industry best
                  practices, we build scalable, secure, and high-performance
                  software tailored to your business objectives.
                </p>
                <p>
                  <span className="font-medium text-slate-900">
                    From innovation to efficiency
                  </span>
                  , we manage the entire project lifecycle—reducing risks,
                  optimizing costs, and accelerating time-to-market.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="flex-1 hidden md:block"
            >
              <div className="relative w-full h-72">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0B79D4]/20 via-sky-200/30 to-transparent blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Enterprise AI Solutions Development"
                  className="relative rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.25)] object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between gap-4 mb-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Recent Projects & Platforms
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                A snapshot of turnkey solutions across learning, BFSI, cloud,
                mobility and cybersecurity.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
                }}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all"
              >
                <div className="relative h-44">
                  <img
                    src={project.image}
                    alt={`${project.title} Project`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0B79D4] shadow-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-[#0B79D4]">
                      {project.category}
                    </span>
                    <div className="inline-flex items-center gap-1 text-[#0B79D4] text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
