import React from "react";
import {
  Cloud,
  ShieldCheck,
  Rocket,
  Infinity,
  Search,
  Code,
  CloudUpload
} from "lucide-react";

export default function ProductDevelopment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            From Vision to Reality: Scalable, Secure Digital Solutions, Built with You
          </h2>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow transition"
          >
            Let’s Build Together &rarr;
          </a>
        </div>
      </section>

        {/* Product Development with 2-column grid */}
        <section className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Product Development</h3>
            <ul className="space-y-3 text-[16px] leading-relaxed text-gray-700">
              <li>
                <span className="font-semibold">End-to-End Expertise:</span> We co-create scalable and secure digital solutions—fintech apps, eGovernance platforms, and intelligent automation tools.
              </li>
              <li>
                <span className="font-semibold">Agile & Cutting-Edge:</span> From UX/UI to agile development, we use modern tech stacks and best practices for user-centric products.
              </li>
              <li>
                <span className="font-semibold">Post-Launch Support:</span> We ensure compliance (ISO, GDPR, SOC), continuous improvement, and innovation beyond delivery.
              </li>
            </ul>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center">
              <Cloud className="w-8 h-8 mb-2 text-blue-900" />
              <h4 className="font-semibold text-md mb-1">Tailored for Scale</h4>
              <p className="text-gray-600 text-sm">Cloud-native, microservices architecture.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 mb-2 text-blue-900" />
              <h4 className="font-semibold text-md mb-1">Bank-Grade Security</h4>
              <p className="text-gray-600 text-sm">GDPR, SOC2, ISO compliance built-in.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center">
              <Rocket className="w-8 h-8 mb-2 text-blue-900" />
              <h4 className="font-semibold text-md mb-1">Agile & Future-Ready</h4>
              <p className="text-gray-600 text-sm">CI/CD, automation, rapid iteration.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center">
              <Infinity className="w-8 h-8 mb-2 text-blue-900" />
              <h4 className="font-semibold text-md mb-1">End-to-End Ownership</h4>
              <p className="text-gray-600 text-sm">Concept → Deployment → Optimization.</p>
            </div>
          </div>
        </section>

      {/* Process Timeline */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">Our Co-Creation Process</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 max-w-5xl mx-auto">
          <ProcessStep
            title="Discover"
            icon={<Search className="w-14 h-14 mb-3 text-blue-900" />}
            description="UX/UI workshops, rapid prototyping, and requirements mapping."
          />
          <ProcessStep
            title="Build"
            icon={<Code className="w-14 h-14 mb-3 text-blue-900" />}
            description="Agile development, transparent sprints, and continuous feedback."
          />
          <ProcessStep
            title="Secure"
            icon={<ShieldCheck className="w-14 h-14 mb-3 text-blue-900" />}
            description="Pen-testing, compliance audits, and robust security reviews."
          />
          <ProcessStep
            title="Deploy & Optimize"
            icon={<CloudUpload className="w-14 h-14 mb-3 text-blue-900" />}
            description="Scalable cloud hosting, analytics, and ongoing optimization."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Co-Create a Standout Digital Product?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a
            href="/contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow transition"
          >
            Book a Free Consultation
          </a>
          <a
            href="/tech"
            className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-full shadow transition"
          >
            Explore Our Tech Stack
          </a>
        </div>
      </section>
    </div>
  );
}

// Reusable Feature Card Component
function FeatureCard({
  icon,
  title,
  desc
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

// Helper component for process steps
function ProcessStep({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      {icon}
      <h4 className="font-bold text-lg mb-2 text-blue-900">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
