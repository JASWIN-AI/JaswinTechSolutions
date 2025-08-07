import React from 'react';
import { Link } from 'wouter';

const DigitalTransformationServices = () => {
  const bfsiServices = [
    {
      title: "AI Maturity Assessment",
      description: "Evaluate your current IT infrastructure, data readiness, and identify high-value AI opportunities, developing a clear implementation roadmap with measurable ROI targets."
    },
    {
      title: "Enterprise AI Architecture",
      description: "Build secure, scalable solutions for fraud detection, customer analytics, regulatory compliance, and algorithmic trading."
    },
    {
      title: "Technology Strategy",
      description: "Recommend optimal platforms combining leading cloud providers (AWS, Azure, GCP), machine learning frameworks (TensorFlow, PyTorch), and data processing tools (Spark, Databricks)."
    },
    {
      title: "Responsible AI Implementation",
      description: "Deploy robust governance policies, bias detection systems, and regulatory compliance measures including GDPR and PSD2 adherence."
    }
  ];

  const publicSectorApps = [
    {
      title: "Automated Citizen Services",
      description: "Chatbots and virtual assistants handle routine inquiries, reducing wait times by up to 70% while maintaining 24/7 availability (ResearchGate, 2023)."
    },
    {
      title: "Intelligent Document Processing",
      description: "AI-driven systems automate form processing and data extraction, cutting administrative processing times from weeks to hours."
    },
    {
      title: "Predictive Service Allocation",
      description: "Machine learning models analyze demographic and usage patterns to optimize resource distribution for social programs."
    },
    {
      title: "Fraud Detection",
      description: "Advanced analytics identify irregularities in benefit claims and procurement processes with greater accuracy than manual reviews."
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-200 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Empowering industries through secure, scalable digital solutions that drive innovation while ensuring compliance
          </p>
        </div>
      </div>

      {/* BFSI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">BFSI Sector Transformation</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              The financial services industry is undergoing a fundamental transformation through secure, scalable digital solutions that ensure regulatory compliance while driving innovation—from modernizing legacy banking systems to implementing AI-powered risk analytics platforms.
            </p>
            <p>
              This evolution demands specialized artificial intelligence integration expertise spanning technological implementation, governance frameworks, and operational restructuring. Our end-to-end AI consulting services enable financial institutions to fully capitalize on AI's capabilities while systematically addressing implementation risks and compliance requirements.
            </p>
            <p>
              We provide comprehensive support throughout the AI adoption journey, helping organizations navigate complex technological & regulatory landscapes to achieve measurable business outcomes.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">AI Transformation Services for Financial Institutions</h3>
        
        <div className="mb-12 space-y-6 text-gray-700">
          <p>
            Our comprehensive AI consulting framework enables financial organizations to successfully adopt and scale artificial intelligence solutions while addressing critical operational and regulatory requirements.
          </p>
          <p>
            We begin with an AI Maturity Assessment to evaluate your current IT infrastructure, data readiness, and identify high-value AI opportunities, developing a clear implementation roadmap with measurable ROI targets. This foundation informs our Enterprise AI Architecture design, where we build secure, scalable solutions for fraud detection, customer analytics, regulatory compliance, and algorithmic trading.
          </p>
          <p>
            Our Technology Strategy service recommends optimal platforms, combining leading cloud providers (AWS, Azure, GCP), machine learning frameworks (TensorFlow, PyTorch), and data processing tools (Spark, Databricks), with specialized solutions for sensitive workloads. We implement Responsible AI through robust governance policies, bias detection systems, and regulatory compliance measures including GDPR and PSD2 adherence.
          </p>
          <p>
            The AI Development Lifecycle covers end-to-end model creation, secure integration with banking systems, and rigorous performance testing. We ensure organizational readiness through Change Management programs, customized training, and establishing Centers of Excellence. Our Managed Services provide ongoing model monitoring, optimization, and compliance updates to maintain peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Accelerated AI implementation timelines</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Innovation balanced with regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sustainable competitive differentiation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Future-ready operational resilience</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Measurable Outcomes Include:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">30-50%</p>
                <p className="text-gray-700">gains in operational efficiency</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">60-80%</p>
                <p className="text-gray-700">improvement in fraud detection</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">20-40%</p>
                <p className="text-gray-700">increase in customer satisfaction</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-700">2-3x</p>
                <p className="text-gray-700">faster product development cycles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <p className="text-lg text-gray-700">
            For financial institutions pursuing AI transformation, we deliver strategic guidance and technical execution that drives tangible business results while effectively managing risk.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 my-12 max-w-7xl mx-auto"></div>

      {/* Public Sector Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">eGovernance & Public Sector Digitization</h2>
        
        <div className="mb-12 space-y-6 text-gray-700">
          <p>
            Transforming citizen services through seamless, transparent, and inclusive digital governance platforms powered by secure infrastructure and smart technologies.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AI-Driven Transformation in Public Service Delivery</h3>
          
          <p>
            Digital transformation is reshaping how governments serve citizens, with artificial intelligence (AI) playing a pivotal role in enhancing efficiency, accessibility, and satisfaction. Recent findings from ResearchGate (2023) show that AI solutions are not only solving long-standing operational challenges but are also opening doors to new models of service innovation.
          </p>
          
          <p>
            AI is streamlining public services in several impactful ways. Chatbots and virtual assistants now handle a large share of citizen interactions, cutting response times by up to 70% and ensuring around-the-clock availability. Intelligent document processing systems automate form handling and data extraction, reducing administrative delays from weeks to mere hours. Machine learning enables predictive service allocation by analyzing demographic and behavioral data to guide resource distribution in social programs. Similarly, advanced analytics tools are being used to detect fraud in claims and procurement more accurately than traditional methods.
          </p>
          
          <p>
            However, adoption is not without obstacles. The study identifies key implementation challenges including legacy system integration (68%), data silos (57%), and skill gaps in the workforce (49%). These barriers require a phased, well-managed approach to digital transformation, supported by change management and capacity building.
          </p>
          
          <p>
            Looking ahead, AI is expected to be integrated with complementary technologies such as blockchain for secure records and IoT for smart urban services. The most promising advancements are in personalized service delivery—where AI can tailor solutions to individual needs while safeguarding privacy.
          </p>
          
          <p>
            Governments implementing AI report up to 45% gains in operational efficiency and 35% improvements in citizen satisfaction. Yet, the research stresses the need for human oversight, ethical guidelines, and governance frameworks to ensure responsible use. Public agencies are advised to begin with high-impact, low-risk pilot projects, refining models before scaling across departments—balancing innovation with public accountability.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">Key AI Applications in Public Services:</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {publicSectorApps.map((app, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h4>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <p className="text-lg text-gray-700">
            Our public sector solutions combine cutting-edge technology with deep understanding of government operations to deliver transformative results while maintaining strict compliance and security standards.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-400 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether in financial services or public sector, our digital transformation solutions deliver measurable results while addressing your unique challenges.
          </p>
          <Link
                href="/contact"
                className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300"
            >
            Contact Our Experts
            </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationServices;