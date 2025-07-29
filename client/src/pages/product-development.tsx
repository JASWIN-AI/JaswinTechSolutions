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
      
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center padding-top-6 padding-bottom-2">
              <div className="max-w-3xl mx-auto">
                <p></p>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                  From Vision to Reality: Scalable, Secure Digital Solutions, Built with You
                </h2>
                {/* <p className="text-lg md:text-2xl mb-8">
                  Co-create fintech apps, eGovernance platforms, and automation tools with speed, precision, and full ownership.
                </p> */}
                <a
                  href="/contact"
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow transition"
                >
                  Let’s Build Together &rarr;
                </a>
              </div>
        </section>
        
        <section className="max-w-5xl mx-auto py-4 px-4">
          {/* Visual Placeholder - Enhanced */}
          <div className="mt-4 flex justify-center">
            <div className="max-w-3xl w-full bg-white rounded-2xl px-2 py-4 shadow-2xl border border-gray-200 text-gray-800 font-inter">
              <div className="flex items-center gap-3 mb-6">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 18a6 6 0 110-12 6 6 0 010 12z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              </div>

              <ul className="space-y-5 text-[17px] leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-700">End-to-End Expertise:</span> We co-create scalable and secure digital solutions—fintech apps, eGovernance platforms, and intelligent automation tools—built with speed, precision, and full ownership.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Agile & Cutting-Edge:</span> From UX/UI design to agile development and deployment, we use modern tech stacks and best practices to deliver high-performance, user-centric products.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Post-Launch Support:</span> Beyond delivery, we ensure compliance (ISO, GDPR, SOC), continuous improvement, and future-ready innovations to sustain your digital growth.
                </li>
              </ul>
            </div>
          </div>
        </section>


      {/* Value Proposition Grid */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Cloud className="w-12 h-12 mb-3 text-blue-900" />
            <h3 className="font-bold text-lg mb-2">Tailored for Scale</h3>
            <p className="text-gray-600 text-sm">Cloud-native, microservices architecture for seamless growth.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 mb-3 text-blue-900" />
            <h3 className="font-bold text-lg mb-2">Bank-Grade Security</h3>
            <div className="flex gap-2 mb-1">
              {/* Use Lucide icons for compliance badges */}
              <ShieldCheck className="w-6 h-6 text-green-600" title="GDPR" />
              <ShieldCheck className="w-6 h-6 text-blue-600" title="ISO" />
              <ShieldCheck className="w-6 h-6 text-purple-600" title="SOC2" />
            </div>
            <p className="text-gray-600 text-sm">GDPR, SOC2, ISO compliance built-in.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Rocket className="w-12 h-12 mb-3 text-blue-900" />
            <h3 className="font-bold text-lg mb-2">Agile & Future-Ready</h3>
            <p className="text-gray-600 text-sm">CI/CD pipelines, AI-driven automation, rapid iteration.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Infinity className="w-12 h-12 mb-3 text-blue-900" />
            <h3 className="font-bold text-lg mb-2">End-to-End Ownership</h3>
            <p className="text-gray-600 text-sm">Concept &rarr; Deployment &rarr; Optimization, all under one roof.</p>
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

      {/* Case Study Teaser 
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Fintech: Payment Gateway</h3>
            <p className="text-gray-700 mb-2">
              Built a payment gateway reducing latency by <span className="font-bold">40%</span> (PCI-DSS certified).
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">eGov: Citizen Services</h3>
            <p className="text-gray-700 mb-2">
              Digitized citizen services for <span className="font-bold">1M+ users</span> with zero downtime.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/projects"
            className="inline-block text-blue-900 font-semibold underline hover:text-blue-700 transition"
          >
            See More Success Stories &rarr;
          </a>
        </div>
      </section>

       
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            
            <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center font-bold text-blue-900">A</div>
            <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center font-bold text-blue-900">B</div>
            <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center font-bold text-blue-900">C</div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-8 w-8 text-blue-900" title="ISO" />
            <ShieldCheck className="h-8 w-8 text-green-600" title="GDPR" />
            <ShieldCheck className="h-8 w-8 text-purple-600" title="SOC2" />
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center text-blue-900 font-medium italic">
            “Their team delivered our MVP in 12 weeks with full compliance.”
          </div>
        </div>
      </section> */}

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