import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart2,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Activity,
  BookOpen,
  TrendingUp,
  Eye,
  ClipboardCheck,
  PieChart,
  Cpu
} from "lucide-react";

const AIBFSIPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen overflow-hidden">
      {/* Hero Section with Animated Gradient */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-900/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              AI-POWERED BANKING INTELLIGENCE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI-BFSI <span className="text-yellow-400">DST & Reporting</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              The cognitive command center for modern banking operations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center gap-4 mt-8"
          >
            <a
              href="#demo"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Request Demo
            </a>
            <a
              href="#capabilities"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all hover:scale-105"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </section>

      {/* Animated Value Proposition */}
      <FadeInSection>
        <div className="max-w-5xl mx-auto py-16 px-4 text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            A unified, role-agnostic dashboard suite with an AI-driven rules engine, designed to transform decision-making across India's banking ecosystem. From CXOs to frontline staff and DSAs, our platform delivers real-time KPIs, predictive risk analytics, automated compliance (RBI/SOX/CRILC), and operational insights through intelligent machine learning and NLP.
          </p>
        </div>
      </FadeInSection>

      {/* Animated Feature Grid */}
      <section id="capabilities" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
              <span className="inline-block pb-2 border-b-4 border-yellow-400">
                Key Capabilities
              </span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedFeatureCard
              icon={<Activity className="w-8 h-8" />}
              title="Smart Monitoring"
              description="Track portfolios, fraud patterns & customer sentiment"
              color="bg-blue-100 text-blue-600"
            />
            <AnimatedFeatureCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Regulatory Readiness"
              description="Auto-generated reports for RBI, BSR, ISO audits"
              color="bg-green-100 text-green-600"
            />
            <AnimatedFeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Performance Optimization"
              description="Sales commissions, SLA bottlenecks, credit heatmaps"
              color="bg-purple-100 text-purple-600"
            />
            <AnimatedFeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Partner Ecosystem"
              description="DSA productivity tracking with conversion analytics"
              color="bg-amber-100 text-amber-600"
            />
          </div>
        </div>
      </section>

      {/* Animated Data Flow Visualization */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
              <span className="inline-block pb-2 border-b-4 border-yellow-400">
                Cognitive Automation Engine
              </span>
            </h2>
          </FadeInSection>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-blue-200/30 animate-pulse"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <AnimatedProcessStep
                icon={<Cpu className="w-8 h-8" />}
                title="Data Ingestion"
                description="Aggregates 100+ data sources in real-time"
                delay={0.1}
              />
              <AnimatedProcessStep
                icon={<PieChart className="w-8 h-8" />}
                title="AI Processing"
                description="ML models analyze patterns and risks"
                delay={0.3}
              />
              <AnimatedProcessStep
                icon={<Eye className="w-8 h-8" />}
                title="Actionable Insights"
                description="Role-specific dashboards with prescriptive analytics"
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Testimonial */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto py-20 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <BarChart2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg">National Banking Executive</h4>
                <p className="text-gray-500">Top 3 Private Bank</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 italic">
              "The AI-BFSI platform reduced our compliance reporting time by 70% while improving accuracy. The predictive risk models helped us identify ₹42M in potential NPAs before they materialized."
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* CTA with Floating Elements */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-900/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Banking Operations
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Break data silos with cognitive automation and enhance profitability across your financial value chain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#demo"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all hover:scale-105"
              >
                Download Brochure
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

// Reusable Animated Components
const FadeInSection = ({ children }) => {
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

const AnimatedFeatureCard = ({ icon, title, description, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <div className={`p-6 ${color} flex items-center justify-center`}>
        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const AnimatedProcessStep = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl p-8 shadow-md text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AIBFSIPage;