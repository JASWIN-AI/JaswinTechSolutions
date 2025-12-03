import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Bot,
  FileText,
  SignalHigh,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const EdTechPublicServices = () => {
  const aiApplications = [
    {
      title: "Chatbots & Virtual Assistants",
      description:
        "Handle routine citizen queries, reducing wait times by up to 70% with continuous availability",
      icon: <Bot className="w-7 h-7 text-[#0B79D4]" />,
    },
    {
      title: "Intelligent Document Processing",
      description:
        "Shortens administrative cycles by automating form handling and data extraction, turning multi-week processes into hour-long tasks",
      icon: <FileText className="w-7 h-7 text-[#0B79D4]" />,
    },
    {
      title: "Predictive Resource Allocation",
      description:
        "Machine learning analyzes demographic and behavioral data to enable more efficient distribution for social programs",
      icon: <SignalHigh className="w-7 h-7 text-[#0B79D4]" />,
    },
    {
      title: "Advanced Fraud Detection",
      description:
        "Improves precision in identifying irregularities in benefit claims and procurement beyond manual capabilities",
      icon: <ShieldCheck className="w-7 h-7 text-[#0B79D4]" />,
    },
  ];

  const challenges = [
    { percentage: "68%", description: "Legacy IT infrastructure limitations" },
    {
      percentage: "57%",
      description: "Fragmented data systems between departments",
    },
    {
      percentage: "49%",
      description: "Workforce capability gaps in AI adoption",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B79D4] text-white">
        {/* background accents */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.3),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[length:110px_110px]" />
        </div>
        <motion.div
          animate={{ y: [-18, 14, -18] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0B79D4]/40 blur-3xl"
        />
        <motion.div
          animate={{ y: [18, -18, 18] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 ring-1 ring-white/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              EdTech • Public Service Delivery
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              EdTech: AI in Public Service Delivery
            </h1>
            <p className="text-sm sm:text-lg md:text-xl max-w-2xl text-slate-100/90">
              Digital transformation reshaping government services through
              artificial intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* INTRO */}
        <motion.section {...fadeUp}>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Digital transformation is reshaping the landscape of public
                service delivery, with artificial intelligence (AI) emerging as
                a powerful enabler of efficiency, accessibility, and improved
                citizen engagement. According to recent research (ResearchGate,
                2023), AI-powered solutions are effectively addressing
                persistent challenges in government operations and paving the
                way for innovative service models.
              </p>

              <p>
                AI is enhancing various aspects of public service. Chatbots and
                virtual assistants now handle routine citizen queries, reducing
                wait times by up to 70% and ensuring continuous availability.
                Intelligent document processing technologies are significantly
                shortening administrative cycles by automating form handling and
                data extraction, often turning multi-week processes into tasks
                completed within hours. Machine learning models are being
                applied to analyze demographic and behavioral data, enabling
                governments to allocate resources more efficiently for social
                programs. Additionally, advanced analytics are improving fraud
                detection in benefit claims and procurement with far greater
                precision than manual systems.
              </p>
            </div>
          </div>
        </motion.section>

        {/* AI APPLICATIONS */}
        <motion.section {...fadeUp}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              AI Applications in Public Services
            </h2>
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B79D4]">
              <span className="h-px w-10 bg-[#0B79D4]/40" />
              Use cases
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {aiApplications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="p-6 flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B79D4]/10">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5">
                      {app.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      {app.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CHALLENGES */}
        <motion.section {...fadeUp}>
          <div className="bg-gradient-to-r from-sky-50 to-slate-50 rounded-2xl border border-slate-100 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4]">
                <ShieldCheck  className="w-4 h-4" />
              </span>
              Implementation Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {challenges.map((challenge) => (
                <motion.div
                  key={challenge.description}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-[#0B79D4]">
                    {challenge.percentage}
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-700">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              Successful implementations show that gradual rollouts—supported by
              structured change management—are key to overcoming these
              challenges.
            </p>
          </div>
        </motion.section>

        {/* FUTURE OUTLOOK */}
        <motion.section {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
            Future Outlook
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Looking forward, AI in the public sector is expected to converge
                with other technologies such as blockchain for secure records
                and IoT for urban infrastructure, enabling smarter and more
                integrated services. The most promising potential lies in
                personalized service delivery, where AI can adapt services to
                individual citizen needs while upholding stringent privacy
                standards.
              </p>

              <p>
                Early adopters report substantial benefits, including 30–45%
                improvements in operational efficiency and 20–35% increases in
                citizen satisfaction. Still, the research cautions that these
                gains must be accompanied by robust ethical frameworks and human
                oversight to ensure transparency and accountability.
              </p>
            </div>
          </div>
        </motion.section>

        {/* IMPLEMENTATION STRATEGY */}
        <motion.section {...fadeUp}>
          <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* steps */}
              <div className="p-6 md:p-8 space-y-5 border-b md:border-b-0 md:border-r border-white/10">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  Implementation Strategy
                </h2>
                <div className="space-y-4">
                  <StrategyStep
                    number="1"
                    text="Start with high-impact, low-risk pilot projects"
                  />
                  <StrategyStep
                    number="2"
                    text="Scale proven solutions across departments"
                  />
                  <StrategyStep
                    number="3"
                    text="Maintain balance between innovation and governance"
                  />
                </div>
              </div>
              {/* explanation */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800">
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  To begin this journey, the study advises public sector
                  organizations to focus on high-impact, low-risk pilot
                  projects, and then scale proven solutions across departments.
                  This balanced, phased approach aligns innovation with the
                  sector&apos;s need for responsible governance and measurable
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B79D4] to-sky-500 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Transform Public Services with AI?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto text-white/90"
          >
            Implement intelligent solutions that enhance efficiency while
            maintaining transparency and accountability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B79D4] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-slate-50 transition-all text-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              Speak With Our Public Sector Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

function StrategyStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      <p className="text-sm sm:text-base text-slate-100">{text}</p>
    </div>
  );
}

export default EdTechPublicServices;
