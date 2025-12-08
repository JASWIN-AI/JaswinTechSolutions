import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  LineChart,
  ShieldCheck,
  Building2,
  Bot,
  Sparkles,
  CheckCircle2,
  Globe2,
} from "lucide-react";

const DigitalTransformationServices = () => {
  const bfsiServices = [
    {
      title: "AI Maturity Assessment",
      description:
        "Evaluate your current IT infrastructure, data readiness, and identify high-value AI opportunities, developing a clear implementation roadmap with measurable ROI targets.",
    },
    {
      title: "Enterprise AI Architecture",
      description:
        "Build secure, scalable solutions for fraud detection, customer analytics, regulatory compliance, and algorithmic trading.",
    },
    {
      title: "Technology Strategy",
      description:
        "Recommend optimal platforms combining leading cloud providers (AWS, Azure, GCP), machine learning frameworks (TensorFlow, PyTorch), and data processing tools (Spark, Databricks).",
    },
    {
      title: "Responsible AI Implementation",
      description:
        "Deploy robust governance policies, bias detection systems, and regulatory compliance measures including GDPR and PSD2 adherence.",
    },
  ];

  const publicSectorApps = [
    {
      title: "Automated Citizen Services",
      description:
        "Chatbots and virtual assistants handle routine inquiries, reducing wait times by up to 70% while maintaining 24/7 availability (ResearchGate, 2023).",
    },
    {
      title: "Intelligent Document Processing",
      description:
        "AI-driven systems automate form processing and data extraction, cutting administrative processing times from weeks to hours.",
    },
    {
      title: "Predictive Service Allocation",
      description:
        "Machine learning models analyze demographic and usage patterns to optimize resource distribution for social programs.",
    },
    {
      title: "Fraud Detection",
      description:
        "Advanced analytics identify irregularities in benefit claims and procurement processes with greater accuracy than manual reviews.",
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
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[length:120px_120px]" />
        </div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0B79D4]/40 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 ring-1 ring-white/25 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Digital Transformation
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Digital Transformation Services
            </h1>
            <p className="text-base md:text-xl max-w-4xl mx-auto text-slate-100/90">
              Empowering industries through secure, scalable digital solutions
              that drive innovation while ensuring compliance
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.15em] text-sky-100/80">
              <span className="rounded-full border border-white/25 px-3 py-1">
              Industry Specific AI Solutions
              </span>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* BFSI SECTION */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Intro */}
        <motion.div {...fadeUp} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-[#0B79D4]/10 flex items-center justify-center text-[#0B79D4]">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              BFSI Sector Transformation
            </h2>
          </div>
          <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              The financial services industry is undergoing a fundamental
              transformation through secure, scalable digital solutions that
              ensure regulatory compliance while driving innovation—from
              modernizing legacy banking systems to implementing AI-powered risk
              analytics platforms.
            </p>
            <p>
              This evolution demands specialized artificial intelligence
              integration expertise spanning technological implementation,
              governance frameworks, and operational restructuring. Our
              end-to-end AI consulting services enable financial institutions to
              fully capitalize on AI&apos;s capabilities while systematically
              addressing implementation risks and compliance requirements.
            </p>
            <p>
              We provide comprehensive support throughout the AI adoption
              journey, helping organizations navigate complex technological &
              regulatory landscapes to achieve measurable business outcomes.
            </p>
          </div>
        </motion.div>

        {/* AI Transformation services text */}
        <motion.div {...fadeUp} className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            AI Transformation Services for Financial Institutions
          </h3>
          <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Our comprehensive AI consulting framework enables financial
              organizations to successfully adopt and scale artificial
              intelligence solutions while addressing critical operational and
              regulatory requirements.
            </p>
            <p>
              We begin with an AI Maturity Assessment to evaluate your current
              IT infrastructure, data readiness, and identify high-value AI
              opportunities, developing a clear implementation roadmap with
              measurable ROI targets. This foundation informs our Enterprise AI
              Architecture design, where we build secure, scalable solutions for
              fraud detection, customer analytics, regulatory compliance, and
              algorithmic trading.
            </p>
            <p>
              Our Technology Strategy service recommends optimal platforms,
              combining leading cloud providers (AWS, Azure, GCP), machine
              learning frameworks (TensorFlow, PyTorch), and data processing
              tools (Spark, Databricks), with specialized solutions for
              sensitive workloads. We implement Responsible AI through robust
              governance policies, bias detection systems, and regulatory
              compliance measures including GDPR and PSD2 adherence.
            </p>
            <p>
              The AI Development Lifecycle covers end-to-end model creation,
              secure integration with banking systems, and rigorous performance
              testing. We ensure organizational readiness through Change
              Management programs, customized training, and establishing Centers
              of Excellence. Our Managed Services provide ongoing model
              monitoring, optimization, and compliance updates to maintain peak
              performance.
            </p>
          </div>
        </motion.div>

        {/* Cards using bfsiServices */}
        <motion.div
          {...fadeUp}
          className="grid md:grid-cols-2 gap-7 mb-16"
        >
          {bfsiServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="h-9 w-9 rounded-full bg-[#0B79D4]/10 flex items-center justify-center text-[#0B79D4]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-slate-900">
                  {service.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why + Outcomes */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Why choose */}
          <motion.div {...fadeUp}>
            <h4 className="text-xl font-bold text-gray-900 mb-5">
              Why Choose Our Services?
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Accelerated AI implementation timelines",
                "Innovation balanced with regulatory compliance",
                "Sustainable competitive differentiation",
                "Future-ready operational resilience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Outcomes */}
          <motion.div {...fadeUp}>
            <h4 className="text-xl font-bold text-gray-900 mb-5">
              Measurable Outcomes Include:
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-700">30-50%</p>
                <p className="text-sm text-gray-700">
                  gains in operational efficiency
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-700">60-80%</p>
                <p className="text-sm text-gray-700">
                  improvement in fraud detection
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-700">20-40%</p>
                <p className="text-sm text-gray-700">
                  increase in customer satisfaction
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-700">2-3x</p>
                <p className="text-sm text-gray-700">
                  faster product development cycles
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BFSI bottom note */}
        <motion.div
          {...fadeUp}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-7"
        >
          <p className="text-sm sm:text-base text-gray-700">
            For financial institutions pursuing AI transformation, we deliver
            strategic guidance and technical execution that drives tangible
            business results while effectively managing risk.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 my-10 max-w-7xl mx-auto" />

      {/* PUBLIC SECTOR / EGOVERNANCE */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-[#0B79D4]/10 flex items-center justify-center text-[#0B79D4]">
              <Globe2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              eGovernance &amp; Public Sector Digitization
            </h2>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mb-10 space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            Transforming citizen services through seamless, transparent, and
            inclusive digital governance platforms powered by secure
            infrastructure and smart technologies.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
            AI-Driven Transformation in Public Service Delivery
          </h3>

          <p>
            Digital transformation is reshaping how governments serve citizens,
            with artificial intelligence (AI) playing a pivotal role in
            enhancing efficiency, accessibility, and satisfaction. Recent
            findings from ResearchGate (2023) show that AI solutions are not
            only solving long-standing operational challenges but are also
            opening doors to new models of service innovation.
          </p>

          <p>
            AI is streamlining public services in several impactful ways.
            Chatbots and virtual assistants now handle a large share of citizen
            interactions, cutting response times by up to 70% and ensuring
            around-the-clock availability. Intelligent document processing
            systems automate form handling and data extraction, reducing
            administrative delays from weeks to mere hours. Machine learning
            enables predictive service allocation by analyzing demographic and
            behavioral data to guide resource distribution in social programs.
            Similarly, advanced analytics tools are being used to detect fraud
            in claims and procurement more accurately than traditional methods.
          </p>

          <p>
            However, adoption is not without obstacles. The study identifies key
            implementation challenges including legacy system integration (68%),
            data silos (57%), and skill gaps in the workforce (49%). These
            barriers require a phased, well-managed approach to digital
            transformation, supported by change management and capacity
            building.
          </p>

          <p>
            Looking ahead, AI is expected to be integrated with complementary
            technologies such as blockchain for secure records and IoT for smart
            urban services. The most promising advancements are in personalized
            service delivery—where AI can tailor solutions to individual needs
            while safeguarding privacy.
          </p>

          <p>
            Governments implementing AI report up to 45% gains in operational
            efficiency and 35% improvements in citizen satisfaction. Yet, the
            research stresses the need for human oversight, ethical guidelines,
            and governance frameworks to ensure responsible use. Public agencies
            are advised to begin with high-impact, low-risk pilot projects,
            refining models before scaling across departments—balancing
            innovation with public accountability.
          </p>
        </motion.div>

        {/* Public sector app cards */}
        <motion.div {...fadeUp} className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Key AI Applications in Public Services:
          </h3>
          <div className="grid md:grid-cols-2 gap-7">
            {publicSectorApps.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-[#0B79D4]/10 flex items-center justify-center text-[#0B79D4]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">
                    {app.title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Public sector bottom note */}
        <motion.div
          {...fadeUp}
          className="bg-blue-50 border border-blue-100 p-7 rounded-2xl"
        >
          <p className="text-sm sm:text-base text-gray-700">
            Our public sector solutions combine cutting-edge technology with
            deep understanding of government operations to deliver transformative
            results while maintaining strict compliance and security standards.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B79D4] to-sky-500 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Transform Your Organization?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto text-white/90"
          >
            Whether in financial services or public sector, our digital
            transformation solutions deliver measurable results while addressing
            your unique challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#0B79D4] font-semibold py-3 px-9 rounded-full hover:bg-slate-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationServices;
