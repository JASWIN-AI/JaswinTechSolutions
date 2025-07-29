import React from "react";
import {
  Cloud,
  Smartphone,
  Users,
  BookOpen,
  ShieldCheck,
  BarChart2,
  Clock,
  Zap,
  FileText,
  Globe,
  MessageSquare,
  CreditCard,
} from "lucide-react";

export default function JaswinAILMS() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            JASWIN AI-LMS: AI-Driven Learning Management System
          </h1>
          <p className="text-xl mb-6">
            A cloud-based SaaS platform built on MERN stack, simplifying corporate training, 
            compliance, and skill development with AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-full shadow transition"
            >
              Request Demo
            </a>
            <a
              href="/compliance"
              className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-6 rounded-full shadow transition"
            >
              Compliance Features
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-blue-900">
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
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-blue-900">
            Tailored for Indian Institutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
          Key Differentiators
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <Zap className="w-5 h-5 mt-1 mr-3 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg">72-Hour Deployment</h4>
              <p className="text-gray-600">
                Turnkey solutions for rapid institutional onboarding.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="w-5 h-5 mt-1 mr-3 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg">AI-Driven Efficiency</h4>
              <p className="text-gray-600">
                Automated grading, plagiarism checks, and facial recognition attendance.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ShieldCheck className="w-5 h-5 mt-1 mr-3 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg">Enterprise-Grade Security</h4>
              <p className="text-gray-600">
                DRM-protected content, watermarking, and role-based access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empower Your Institution with AI-LMS
          </h2>
          <p className="mb-8">
            Currently supporting existing clients with maintenance—contact us for 
            compliance-focused solutions or future deployment inquiries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow transition"
          >
            Connect with Our EdTech Team
          </a>
        </div>
      </section>
    </div>
  );
}

// Reusable Feature Card (matches your design system)
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

// Specialization Card for Indian Education
function SpecializationCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="font-bold text-lg ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-900 mr-2">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}