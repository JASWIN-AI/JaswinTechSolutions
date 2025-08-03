import React from "react";
import {
  BarChart2,
  Layers,
  Settings,
  Users,
  BookOpen,
  Lightbulb,
  Globe,
  Clock,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

export default function Consulting() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Strategy & Consulting: Bridge the Gap Between Vision and Results
          </h2>
          <p className="text-lg mb-6">
            Expert guidance in digital transformation, tech modernization, and policy 
            implementation—backed by hands-on BFSI and eGovernance experience.
          </p>
          <Link
              href="/contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Let’s Innovate Together &rarr;
          </Link>
        </div>
      </section>

      {/* Consulting Overview */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Our Consulting Approach
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto">
            We combine strategic vision with practical execution to deliver 
            measurable outcomes: <span className="font-semibold">30-50% operational efficiency gains</span>, 
            <span className="font-semibold">20-40% cost reduction</span> in legacy modernization, 
            and accelerated compliance with evolving regulations.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BarChart2 className="w-8 h-8 mb-3 text-blue-900" />}
            title="Digital Transformation"
            desc="Align technology with business goals—from cloud migration to smart city infrastructure,digitize citizen services with secure, scalable platforms"
          />
          <FeatureCard
            icon={<Layers className="w-8 h-8 mb-3 text-blue-900" />}
            title="Tech Modernization"
            desc="Legacy system upgrades, CBDC implementation, and scalable architectures ensuring sustainable digital growth."
          />
          <FeatureCard
            icon={<Settings className="w-8 h-8 mb-3 text-blue-900" />}
            title="Policy & Compliance"
            desc="GDPR, PSD2, and local regulatory frameworks integrated into solutions."
          />
        </div>
      </section>

      {/* Key Sectors */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-blue-900">
          Key Sectors
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectorCard
            icon={<Globe className="w-8 h-8 mb-3 text-blue-900" />}
            title="BFSI"
            desc="Future-proofing financial ecosystems with secure, scalable, and regulatory-compliant digital solutions—from core banking modernization to AI-driven risk analytics."
          />
          <SectorCard
            icon={<Users className="w-8 h-8 mb-3 text-blue-900" />}
            title="eGovernance"
            desc="Transforming citizen services through seamless, transparent, and inclusive digital governance platforms powered by secure infrastructure and smart technologies."
          />
          <SectorCard
            icon={<BookOpen className="w-8 h-8 mb-3 text-blue-900" />}
            title="EdTech"
            desc="Scalable learning platforms, LMS integrations, and AI-powered personalized education tools."
          />
          <SectorCard
            icon={<Zap className="w-8 h-8 mb-3 text-blue-900" />}
            title="Startups & SMEs"
            desc="Empowering agile businesses with cost-effective, scalable tech solutions-automation, cloud, and AI-to accelerate growth and outmaneuver competition."
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-blue-900">
          Why Choose Our Consulting?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Clock className="w-8 h-8 mb-3 mx-auto text-blue-900" />
            <h4 className="font-bold text-lg mb-2">Decades of Leadership</h4>
            <p className="text-gray-600">
              Founders with proven BFSI and IT expertise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Zap className="w-8 h-8 mb-3 mx-auto text-blue-900" />
            <h4 className="font-bold text-lg mb-2">Young & Agile</h4>
            <p className="text-gray-600">
              Fast, cost-effective solutions without bureaucracy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Lightbulb className="w-8 h-8 mb-3 mx-auto text-blue-900" />
            <h4 className="font-bold text-lg mb-2">Fresh Yet Experienced</h4>
            <p className="text-gray-600">
              New brand, built on years of real-world execution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Have a Vision or Project Idea?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let’s turn it into reality—efficiently and impactfully.
        </p>
        <Link
              href="/contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
          Book a Strategy Session
        </Link>
      </section>
    </div>
  );
}

// Reusable Sector Card Component
function SectorCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-gray-50 hover:bg-white transition-all p-6 rounded-lg border border-gray-200">
      {icon}
      <h4 className="font-bold text-lg mb-2 text-blue-900">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

// Reusable Feature Card (same as ProductDevelopment component)
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
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
      {icon}
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}