import { Target, Heart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  

  const values = [
    "Innovation & Excellence",
    "Client-Centric Approach",
    "Integrity & Transparency",
    "Continuous Learning",
    "Collaborative Partnership",
  ];

  const timeline = [
    {
      year: "Founding",
      label: "Vision to reality",
      description:
        "JASWIN AI Solutions was founded by BFSI and IT leaders to bridge domain depth and modern engineering.",
    },
    {
      year: "BFSI & eGovernance",
      label: "Domain expansion",
      description:
        "Engaged in complex, regulated projects across BFSI and public sector digital initiatives.",
    },
    {
      year: "AI & Cloud",
      label: "Intelligent platforms",
      description:
        "Embedded AI, data, and cloud-native patterns into products and solutions for clients.",
    },
  ];

  const clientLogos = [
    "BFSI Partners",
    "EdTech Innovators",
    "GovTech Programs",
    "FinServ Platforms",
    "Cloud-Native Teams",
    "AI & Data Labs",
  ];

  return (
    <div className="pt-16 bg-slate-50 overflow-hidden">
      {/* PAGE TRANSITION LOADER (D) */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-[3px] bg-[#0B79D4] z-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* MISSION & VALUES SECTION (original content, redesigned) */}
      <section className="relative py-20 bg-white">
        {/* Accent blobs */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#0B79D4]/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
            {/* Left: Text Contents (keep all original text) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
                <span className="py-2.5 px-0 block bg-gradient-to-r from-[#0B79D4] to-sky-400 bg-clip-text text-transparent drop-shadow">
                  Empowering Innovation,
                </span>
                <span className="block">
                  Transforming{" "}
                  <span className="text-[#0B79D4]">Futures</span>
                </span>
              </h1>

              <div className="max-w-2xl text-base md:text-lg text-gray-700 leading-relaxed space-y-5">
                <p></p>
                <p>
                  <span className="font-semibold text-[#0B79D4]">
                    JASWIN AI Solutions
                  </span>{" "}
                  is a dynamic technology and consulting startup, blending deep
                  industry expertise with cutting-edge innovation. Founded by
                  BFSI and IT seasoned professionals and fueled by a talented
                  team of technologists and strategists, we deliver agile,
                  impactful solutions for modern enterprises.
                </p>
                <p>
                  At JASWIN, we bridge the gap between vision and reality. As a
                  next-gen technology and consulting startup, we combine decades
                  of industry expertise with agile innovation to deliver
                  tailored solutions for the{" "}
                  <span className="font-medium text-[#0B79D4]">BFSI</span>,{" "}
                  <span className="font-medium text-[#0B79D4]">EdTech</span>,
                  and{" "}
                  <span className="font-medium text-[#0B79D4]">
                    eGovernance
                  </span>{" "}
                  sectors.
                </p>
                <p>
                  Backed by seasoned leaders from banking, IT, and public
                  sector digitization, and powered by a dynamic team of
                  developers, strategists, and domain specialists, we bring{" "}
                  <span className="font-semibold text-[#0B79D4]">speed</span>,{" "}
                  <span className="font-semibold text-[#0B79D4]">
                    precision
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#0B79D4]">
                    fresh thinking
                  </span>{" "}
                  to every project.
                </p>
              </div>
            </motion.div>

            {/* Right: Image (kept) */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 flex justify-center md:justify-end items-stretch py-10"
            >
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0B79D4]/30 via-sky-300/25 to-transparent blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1658086351750-1ec43149a713?q=80&w=1665&auto=format&fit=crop"
                  alt="AI Innovation"
                  className="relative rounded-2xl shadow-[0_18px_50px_rgba(15,23,42,0.35)] w-full h-[480px] object-cover border border-slate-100"
                />
              </div>
            </motion.div>
          </div>

          {/* Mission & Values cards (keep original text) */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-[#0B79D4] mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To deliver exceptional technology solutions that drive business
                growth, enhance operational efficiency, and create lasting value
                for our clients. We strive to be the trusted technology partner
                that organizations rely on for their digital transformation
                journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-[#0B79D4] mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Values
              </h3>
              <ul className="text-gray-700 space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0B79D4] mr-2" />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* TIMELINE / STORY (B) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              A focused evolution from domain expertise to AI-led digital
              platforms.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45 }}
                  className={`relative flex gap-4 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } flex-col sm:items-center`}
                >
                  <div className="shrink-0 flex items-center">
                    <div className="relative ml-4 sm:ml-0 sm:left-1/2 sm:-translate-x-1/2 h-4 w-4 rounded-full bg-white border-2 border-[#0B79D4]" />
                  </div>
                  <div className="bg-slate-50 rounded-xl border border-slate-100 shadow-sm px-4 py-3 sm:px-5 sm:py-4 flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#0B79D4]">
                      {step.year}
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      {step.label}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY EXPERTISE (original content, animated) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Technology Expertise
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From enterprise-grade microservices to cutting-edge AI models, 
              our team delivers robust, scalable, and innovative solutions 
              across diverse technology domains.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Keep all original cards & text, just animate & style */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100 transition-all"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Java &amp; Python Microservices
              </h4>
              <p className="text-gray-600 text-sm">
                Building scalable, high-performance microservices architectures using Java (Spring Boot) and Python (FastAPI, Flask), optimized for modern enterprise workloads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100 transition-all"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Data Science &amp; AI
              </h4>
              <p className="text-gray-600 text-sm">
                Delivering AI-powered insights with machine learning, NLP, and predictive analytics to drive smarter decision-making and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100 transition-all"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Mobile App Development
              </h4>
              <p className="text-gray-600 text-sm">
                Cross-platform apps using React Native, backed by robust APIs and modern DevOps pipelines for fast, secure releases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100 transition-all"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                .NET Core &amp; C#
              </h4>
              <p className="text-gray-600 text-sm">
                Enterprise-grade backend systems and APIs leveraging .NET Core, C#, and modern cloud integration patterns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100 transition-all"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Cloud Platforms
              </h4>
              <p className="text-gray-600 text-sm">
                Expert deployments and cloud-native solutions on Azure, AWS, GCP, and DigitalOcean — ensuring scalability, security, and cost efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.25 }}
              whileHover={{
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
                boxShadow: "0 20px 45px rgba(15,23,42,0.18)",
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-slate-100 transition-all"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                End-to-End Digital Solutions
              </h4>
              <p className="text-gray-600 text-sm">
                From architecture to deployment, we bring technology, strategy, and execution together for impactful digital transformations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO SLIDER (C) */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
            Trusted across domains
          </p>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-medium text-slate-700"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
