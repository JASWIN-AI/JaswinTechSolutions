import React from "react";
import {
  Cloud,
  Smartphone,
  Users,
  ShieldCheck,
  BarChart2,
  Globe,
  FileText,
  MessageSquare,
  CreditCard,
  Zap,
  Clock,
} from "lucide-react";

export default function JaswinAILMS() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="font-extrabold mb-4 text-2xl md:text-3xl">
              JASWIN AI-LMS: AI-Driven Learning Management System
            </h2>
            <p className="text-lg mb-6">
              A cloud-based SaaS platform built on MERN stack, simplifying corporate training, 
              compliance, and skill development with AI-powered tools.
            </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                Request Demo
              </a>
              {/* <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-all hover:scale-105"
              >
                Explore Features
              </a> */}
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <img 
              src="https://cdn.pixabay.com/photo/2022/05/01/06/13/training-7166839_1280.jpg" 
              alt="Learning Management System" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </section>

      {/* About Section - Fixed Layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-400 pb-2">
                About
              </h2>
            </div>
            <div className="md:w-3/4 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">AI Based Learning Management Systems</span> is a cloud-based learning management system (LMS) built on the MERN stack and delivered as a SaaS platform, designed to simplify corporate training, compliance, and employee skill development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform provides an intuitive interface with key features such as course management, automated training workflows, compliance tracking, and mobile-friendly learning. Tailored for mid-sized to large organizations, we emphasize scalability, engagement tools like gamification, and detailed reporting to ensure industry compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                While Stadium LMS offers strong integration capabilities and a seamless user experience, the company has since shifted its focus to its new Accreditation platform, temporarily pausing new LMS deployments—only existing clients continue to receive support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          AI-Powered Learning Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Cloud className="w-8 h-8 mb-3 text-blue-900" />}
            title="Cloud-Based SaaS"
            desc="White-label solutions with 72-hour deployment for institutions."
          />
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 mb-3 text-blue-900" />}
            title="Mobile-First"
            desc="iOS/Android apps with offline learning capabilities."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 mb-3 text-blue-900" />}
            title="Virtual Classes"
            desc="Zoom/Meet integration for live sessions."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-8 h-8 mb-3 text-blue-900" />}
            title="AI Proctoring"
            desc="Face/browser monitoring for secure exams."
          />
          <FeatureCard
            icon={<BarChart2 className="w-8 h-8 mb-3 text-blue-900" />}
            title="Predictive Analytics"
            desc="ML-based performance insights."
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8 mb-3 text-blue-900" />}
            title="India-Focused"
            desc="NAAC/NBA, UGC/AICTE compliance tools."
          />
        </div>
      </section>

      {/* Specialized for Indian Education */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Tailored for Indian Institutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpecializationCard
              icon={<FileText className="w-6 h-6 text-blue-900" />}
              title="Regulatory Compliance"
              items={[
                "NAAC/NBA accreditation tools",
                "UGC/AICTE norm adherence",
                "Automated audit trails",
              ]}
            />
            <SpecializationCard
              icon={<MessageSquare className="w-6 h-6 text-blue-900" />}
              title="Regional Support"
              items={[
                "12+ Indian language interfaces",
                "Localized content delivery",
                "WhatsApp/email automation",
              ]}
            />
            <SpecializationCard
              icon={<CreditCard className="w-6 h-6 text-blue-900" />}
              title="Operational Tools"
              items={[
                "Fee management + payment gateways",
                "Faculty performance tracking",
                "Geo-fenced attendance",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Key Differentiators
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Zap className="w-6 h-6 mt-1 mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">72-Hour Deployment</h4>
                <p className="text-gray-600">
                  Turnkey solutions for rapid institutional onboarding.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Clock className="w-6 h-6 mt-1 mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">AI-Driven Efficiency</h4>
                <p className="text-gray-600">
                  Automated grading, plagiarism checks, and facial recognition attendance.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <ShieldCheck className="w-6 h-6 mt-1 mr-4 text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">Enterprise-Grade Security</h4>
                <p className="text-gray-600">
                  DRM-protected content, watermarking, and role-based access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Empower Your Institution with AI-LMS
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Currently supporting existing clients with maintenance—contact us for 
            compliance-focused solutions or future deployment inquiries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Connect with Our EdTech Team
          </a>
        </div>
      </section>
    </div>
  );
}

// Improved Feature Card
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition h-full flex flex-col">
      <div className="flex flex-col items-start">
        <div className="bg-blue-100 p-3 rounded-full mb-4">
          {icon}
        </div>
        <h4 className="font-bold text-xl mb-3 text-gray-900">{title}</h4>
        <p className="text-gray-600 flex-grow">{desc}</p>
      </div>
    </div>
  );
}

// Improved Specialization Card
function SpecializationCard({ icon, title, items }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition h-full">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-2 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-yellow-500 mr-3 mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}