import React from 'react';
import { Link } from 'wouter';
const EdTechPublicServices = () => {
  const aiApplications = [
    {
      title: "Chatbots & Virtual Assistants",
      description: "Handle routine citizen queries, reducing wait times by up to 70% with continuous availability",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Intelligent Document Processing",
      description: "Shortens administrative cycles by automating form handling and data extraction, turning multi-week processes into hour-long tasks",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Predictive Resource Allocation",
      description: "Machine learning analyzes demographic and behavioral data to enable more efficient distribution for social programs",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Advanced Fraud Detection",
      description: "Improves precision in identifying irregularities in benefit claims and procurement beyond manual capabilities",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const challenges = [
    { percentage: "68%", description: "Legacy IT infrastructure limitations" },
    { percentage: "57%", description: "Fragmented data systems between departments" },
    { percentage: "49%", description: "Workforce capability gaps in AI adoption" }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-200 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">EdTech: AI in Public Service Delivery</h1>
          <p className="text-xl md:text-2xl max-w-4xl">
            Digital transformation reshaping government services through artificial intelligence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introductory Section */}
        <section className="mb-16">
          <div className="prose-lg text-gray-700 space-y-6">
            <p>
              Digital transformation is reshaping the landscape of public service delivery, with artificial intelligence (AI) emerging as a powerful enabler of efficiency, accessibility, and improved citizen engagement. According to recent research (ResearchGate, 2023), AI-powered solutions are effectively addressing persistent challenges in government operations and paving the way for innovative service models.
            </p>
            
            <p>
              AI is enhancing various aspects of public service. Chatbots and virtual assistants now handle routine citizen queries, reducing wait times by up to 70% and ensuring continuous availability. Intelligent document processing technologies are significantly shortening administrative cycles by automating form handling and data extraction, often turning multi-week processes into tasks completed within hours. Machine learning models are being applied to analyze demographic and behavioral data, enabling governments to allocate resources more efficiently for social programs. Additionally, advanced analytics are improving fraud detection in benefit claims and procurement with far greater precision than manual systems.
            </p>
          </div>
        </section>

        {/* AI Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
            AI Applications in Public Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiApplications.map((app, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                      <p className="text-gray-700">{app.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-4xl font-bold text-blue-600">{challenge.percentage}</span>
                <p className="text-gray-700 mt-2">{challenge.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            Successful implementations show that gradual rollouts—supported by structured change management—are key to overcoming these challenges.
          </p>
        </section>

        {/* Future Outlook Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
            Future Outlook
          </h2>
          <div className="prose-lg text-gray-700 space-y-6">
            <p>
              Looking forward, AI in the public sector is expected to converge with other technologies such as blockchain for secure records and IoT for urban infrastructure, enabling smarter and more integrated services. The most promising potential lies in personalized service delivery, where AI can adapt services to individual citizen needs while upholding stringent privacy standards.
            </p>
            
            <p>
              Early adopters report substantial benefits, including 30–45% improvements in operational efficiency and 20–35% increases in citizen satisfaction. Still, the research cautions that these gains must be accompanied by robust ethical frameworks and human oversight to ensure transparency and accountability.
            </p>
          </div>
        </section>

        {/* Implementation Strategy */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <p className="text-gray-700 font-medium">Start with high-impact, low-risk pilot projects</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <p className="text-gray-700 font-medium">Scale proven solutions across departments</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <p className="text-gray-700 font-medium">Maintain balance between innovation and governance</p>
              </div>
            </div>
            <div className="prose text-gray-700">
              <p>
                To begin this journey, the study advises public sector organizations to focus on high-impact, low-risk pilot projects, and then scale proven solutions across departments. This balanced, phased approach aligns innovation with the sector's need for responsible governance and measurable outcomes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-400 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Public Services with AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Implement intelligent solutions that enhance efficiency while maintaining transparency and accountability.
          </p>
           <Link
                href="/contact"
                className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300"
            >
                        Speak With Our Public Sector Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EdTechPublicServices;