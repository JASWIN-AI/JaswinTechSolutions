import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  BotMessageSquare,
  FileCog,
  LineChart,
  ShieldCheck,
  TrendingUp,
  Smile,
} from "lucide-react";

const PublicSectorDigitization = () => {
  const keyApplications = [
    {
      title: "Automated Citizen Services",
      description:
        "Chatbots and virtual assistants now handle routine inquiries, reducing wait times by up to 70% while maintaining 24/7 availability (ResearchGate, 2023).",
      icon: <BotMessageSquare className="w-10 h-10 text-[#0B79D4]" />,
    },
    {
      title: "Intelligent Document Processing",
      description:
        "AI-driven systems automate form processing and data extraction, cutting administrative processing times from weeks to hours.",
      icon: <FileCog className="w-10 h-10 text-[#0B79D4]" />,
    },
    {
      title: "Predictive Service Allocation",
      description:
        "Machine learning models analyze demographic and usage patterns to optimize resource distribution for social programs.",
      icon: <LineChart className="w-10 h-10 text-[#0B79D4]" />,
    },
    {
      title: "Fraud Detection",
      description:
        "Advanced analytics identify irregularities in benefit claims and procurement processes with greater accuracy than manual reviews.",
      icon: <ShieldCheck className="w-10 h-10 text-[#0B79D4]" />,
    },
  ];

  const challenges = [
    { percentage: "68%", description: "Legacy system integration challenges" },
    { percentage: "57%", description: "Data silos between departments" },
    { percentage: "49%", description: "Skill gaps in the workforce" },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO BANNER */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=1700&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B79D4]/90 to-[#003865]/80 backdrop-blur-md" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            eGovernance &amp; Public Sector Digitization
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto opacity-90">
            Transforming citizen services through seamless, transparent, and
            inclusive digital governance platforms
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* INTRO */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-[#0B79D4] pl-4"
          >
            AI-Driven Transformation in Public Service Delivery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose-lg text-gray-700 space-y-6"
          >
            <p>
              Digital transformation is reshaping how governments serve
              citizens, with artificial intelligence (AI) playing a pivotal role
              in enhancing efficiency, accessibility, and satisfaction. Recent
              findings from ResearchGate (2023) show that AI solutions are not
              only solving long-standing operational challenges but are also
              opening doors to new models of service innovation.
            </p>

            <p>
              AI is streamlining public services in several impactful ways.
              Chatbots and virtual assistants now handle a large share of
              citizen interactions, cutting response times by up to 70% and
              ensuring around-the-clock availability. Intelligent document
              processing systems automate form handling and data extraction,
              reducing administrative delays from weeks to mere hours. Machine
              learning enables predictive service allocation by analyzing
              demographic and behavioral data to guide resource distribution in
              social programs. Similarly, advanced analytics tools are being
              used to detect fraud in claims and procurement more accurately
              than traditional methods.
            </p>
          </motion.div>
        </section>

        {/* CHALLENGES */}
        <section className="mb-16 bg-[#E8F3FF] rounded-xl p-10 shadow-inner">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Implementation Challenges
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <span className="text-5xl font-extrabold text-[#0B79D4]">
                  {item.percentage}
                </span>
                <p className="text-gray-700 mt-3">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            These barriers require a phased, well-managed approach to digital
            transformation, supported by change management and capacity
            building.
          </p>
        </section>

        {/* FUTURE OUTLOOK */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Future Outlook
          </h3>
          <div className="prose-lg text-gray-700 space-y-6">
            <p>
              Looking ahead, AI is expected to be integrated with complementary
              technologies such as blockchain for secure records and IoT for
              smart urban services. The most promising advancements are in
              personalized service delivery—where AI can tailor solutions to
              individual needs while safeguarding privacy.
            </p>

            <p>
              Governments implementing AI report up to 45% gains in operational
              efficiency and 35% improvements in citizen satisfaction. Yet, the
              research stresses the need for human oversight, ethical
              guidelines, and governance frameworks to ensure responsible use.
              Public agencies are advised to begin with high-impact, low-risk
              pilot projects, refining models before scaling across
              departments—balancing innovation with public accountability.
            </p>
          </div>
        </section>

        {/* KEY APPLICATIONS */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Key AI Applications in Public Services
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {keyApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="flex items-start">
                  <div className="mr-5">{app.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-gray-700">{app.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ NEW MEASURABLE OUTCOMES SECTION */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Measurable Outcomes
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Governments implementing AI report tangible, quantifiable benefits
            across operations and citizen experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#0B79D4]/10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F3FF] px-3 py-1 text-xs font-semibold text-[#0B79D4] mb-4">
                  <TrendingUp className="h-4 w-4" />
                  Operational Efficiency
                </div>
                <div className="text-4xl font-extrabold text-[#0B79D4] mb-2">
                  45%
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Gains in operational efficiency for agencies adopting AI-driven
                  workflows and automation.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-[#0B79D4]/5" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F3FF] px-3 py-1 text-xs font-semibold text-[#0B79D4] mb-4">
                  <Smile className="h-4 w-4" />
                  Citizen Experience
                </div>
                <div className="text-4xl font-extrabold text-[#0B79D4] mb-2">
                  35%
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Improvements in citizen satisfaction through faster response
                  times and more personalised services.
                </p>
              </div>
            </motion.div>

            {/* Card 3 – narrative impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[#F5FBFF] border border-[#D5E7FF] p-6 shadow-sm flex flex-col justify-between"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Strategic Impact
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Our public sector solutions combine cutting-edge AI technologies
                with robust governance frameworks to deliver transformative
                results while maintaining strict compliance and security
                standards.
              </p>
              <p className="text-sm font-semibold text-gray-800">
                Begin your digital transformation journey with high-impact,
                low-risk pilot projects designed for measurable success.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-[#0B79D4] text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Transform Public Services?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Implement AI solutions that enhance efficiency while maintaining
          transparency and accountability.
        </p>

        <Link
          href="/contact"
          className="bg-white text-[#0B79D4] font-bold py-3 px-10 rounded-full shadow-xl hover:scale-105 transition-transform"
        >
          Contact Our Governance Experts
        </Link>
      </section>
    </div>
  );
};

export default PublicSectorDigitization;
