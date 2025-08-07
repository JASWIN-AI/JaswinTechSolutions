import React from 'react';
import { Link } from 'wouter';

const PublicSectorDigitization = () => {
  const keyApplications = [
    {
      title: "Automated Citizen Services",
      description: "Chatbots and virtual assistants now handle routine inquiries, reducing wait times by up to 70% while maintaining 24/7 availability (ResearchGate, 2023).",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Intelligent Document Processing",
      description: "AI-driven systems automate form processing and data extraction, cutting administrative processing times from weeks to hours.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Predictive Service Allocation",
      description: "Machine learning models analyze demographic and usage patterns to optimize resource distribution for social programs.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Fraud Detection",
      description: "Advanced analytics identify irregularities in benefit claims and procurement processes with greater accuracy than manual reviews.",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const challenges = [
    { percentage: "68%", description: "Legacy system integration challenges" },
    { percentage: "57%", description: "Data silos between departments" },
    { percentage: "49%", description: "Skill gaps in the workforce" }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-200 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">eGovernance & Public Sector Digitization</h1>
          <p className="text-xl md:text-2xl max-w-4xl">
            Transforming citizen services through seamless, transparent, and inclusive digital governance platforms
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introductory Section */}
        <section className="mb-16">
          <div className="prose-lg text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-500 pl-4">
              AI-Driven Transformation in Public Service Delivery
            </h2>
            
            <p>
              Digital transformation is reshaping how governments serve citizens, with artificial intelligence (AI) playing a pivotal role in enhancing efficiency, accessibility, and satisfaction. Recent findings from ResearchGate (2023) show that AI solutions are not only solving long-standing operational challenges but are also opening doors to new models of service innovation.
            </p>
            
            <p>
              AI is streamlining public services in several impactful ways. Chatbots and virtual assistants now handle a large share of citizen interactions, cutting response times by up to 70% and ensuring around-the-clock availability. Intelligent document processing systems automate form handling and data extraction, reducing administrative delays from weeks to mere hours. Machine learning enables predictive service allocation by analyzing demographic and behavioral data to guide resource distribution in social programs. Similarly, advanced analytics tools are being used to detect fraud in claims and procurement more accurately than traditional methods.
            </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Challenges</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-teal-600">{challenge.percentage}</span>
                <p className="text-gray-700 mt-2">{challenge.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            These barriers require a phased, well-managed approach to digital transformation, supported by change management and capacity building.
          </p>
        </section>

        {/* Future Outlook */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Future Outlook</h3>
          <div className="prose-lg text-gray-700 space-y-6">
            <p>
              Looking ahead, AI is expected to be integrated with complementary technologies such as blockchain for secure records and IoT for smart urban services. The most promising advancements are in personalized service delivery—where AI can tailor solutions to individual needs while safeguarding privacy.
            </p>
            
            <p>
              Governments implementing AI report up to 45% gains in operational efficiency and 35% improvements in citizen satisfaction. Yet, the research stresses the need for human oversight, ethical guidelines, and governance frameworks to ensure responsible use. Public agencies are advised to begin with high-impact, low-risk pilot projects, refining models before scaling across departments—balancing innovation with public accountability.
            </p>
          </div>
        </section>

        {/* Key Applications */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key AI Applications in Public Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {keyApplications.map((app, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {app.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h4>
                      <p className="text-gray-700">{app.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-teal-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Measurable Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-teal-600">45%</span>
                </div>
                <p className="text-gray-700 font-medium">Gains in operational efficiency</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-teal-600">35%</span>
                </div>
                <p className="text-gray-700 font-medium">Improvements in citizen satisfaction</p>
              </div>
            </div>
            <div className="prose text-gray-700">
              <p>
                Our public sector solutions combine cutting-edge AI technologies with robust governance frameworks to deliver transformative results while maintaining strict compliance and security standards.
              </p>
              <p className="font-medium mt-4">
                Begin your digital transformation journey with high-impact, low-risk pilot projects designed for measurable success.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-400 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Public Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Implement AI solutions that enhance efficiency while maintaining transparency and accountability.
          </p>
          
          <Link
                href="/contact"
                className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300"
            >
            Contact Our Governance Experts
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicSectorDigitization;