import { Target, Heart, CheckCircle } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "15+ years of experience in technology leadership and business strategy. Passionate about driving innovation and client success."
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Expert in cloud architecture and software development with a track record of delivering scalable solutions for enterprise clients."
    },
    {
      name: "Michael Chen",
      position: "Head of Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Full-stack developer with expertise in modern frameworks and agile methodologies. Committed to code quality and innovation."
    }
  ];

  const values = [
    "Innovation & Excellence",
    "Client-Centric Approach",
    "Integrity & Transparency",
    "Continuous Learning",
    "Collaborative Partnership"
  ];

  return (
    <div className="pt-16">
      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
            {/* Left: Text Contents*/}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-4 tracking-tight leading-tight">
          <span className="block text-gold-500 drop-shadow-lg">Empowering Innovation,</span>
          <span className="block">Transforming <span className="text-gold-600">Futures</span></span>
              </h1>
              <div className="max-w-2xl text-base md:text-lg text-gray-700 leading-relaxed space-y-5">
          <p></p>
          <p>
            <span className="font-semibold text-navy-700">JASWIN AI Solutions</span> is a dynamic technology and consulting startup, blending deep industry expertise with cutting-edge innovation. Founded by BFSI and IT veterans and fueled by a talented team of technologists and strategists, we deliver agile, impactful solutions for modern enterprises.
          </p>
          <p>
            At JASWIN, we bridge the gap between vision and reality. As a next-gen technology and consulting startup, we combine decades of industry expertise with agile innovation to deliver tailored solutions for the <span className="text-gold-600 font-medium">BFSI</span>, <span className="text-gold-600 font-medium">EdTech</span>, and <span className="text-gold-600 font-medium">eGovernance</span> sectors.
          </p>
          <p>
            Backed by seasoned leaders from banking, IT, and public sector digitization, and powered by a dynamic team of developers, strategists, and domain specialists, we bring <span className="font-semibold text-navy-700">speed</span>, <span className="font-semibold text-navy-700">precision</span>, and <span className="font-semibold text-navy-700">fresh thinking</span> to every project.
          </p>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center md:justify-end items-stretch py-10">
              <img
              src="https://images.unsplash.com/photo-1658086351750-1ec43149a713?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI Innovation"
              className="rounded-2xl shadow-2xl w-full max-w-sm h-[480px] object-cover"
              />
            </div>
          </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gold-100 p-8 rounded-xl shadow-2xl border border-gold-100/40">
              <div className="text-gold-500 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional technology solutions that drive business growth, enhance operational efficiency, and create lasting value for our clients. We strive to be the trusted technology partner that organizations rely on for their digital transformation journey.
              </p>
              </div>

              <div className="bg-navy-50 p-8 rounded-xl shadow-2xl border border-navy-100/40">
              <div className="text-navy-800 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                {values.map((value, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-gold-500 mr-2" />
                  {value}
                </li>
                ))}
              </ul>
              </div>
            </div>

        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-800 mb-4">
              Our Technology Expertise
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From enterprise-grade microservices to cutting-edge AI models, 
              our team delivers robust, scalable, and innovative solutions 
              across diverse technology domains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold text-navy-800 mb-3">Java & Python Microservices</h4>
              <p className="text-gray-600 text-sm">
                Building scalable, high-performance microservices architectures using Java (Spring Boot) and Python (FastAPI, Flask), optimized for modern enterprise workloads.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold text-navy-800 mb-3">Data Science & AI</h4>
              <p className="text-gray-600 text-sm">
                Delivering AI-powered insights with machine learning, NLP, and predictive analytics to drive smarter decision-making and innovation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold text-navy-800 mb-3">Mobile App Development</h4>
              <p className="text-gray-600 text-sm">
                Cross-platform apps using React Native, backed by robust APIs and modern DevOps pipelines for fast, secure releases.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold text-navy-800 mb-3">.NET Core & C#</h4>
              <p className="text-gray-600 text-sm">
                Enterprise-grade backend systems and APIs leveraging .NET Core, C#, and modern cloud integration patterns.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold text-navy-800 mb-3">Cloud Platforms</h4>
              <p className="text-gray-600 text-sm">
                Expert deployments and cloud-native solutions on Azure, AWS, GCP, and DigitalOcean — ensuring scalability, security, and cost efficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
              <h4 className="text-xl font-semibold text-navy-800 mb-3">End-to-End Digital Solutions</h4>
              <p className="text-gray-600 text-sm">
                From architecture to deployment, we bring technology, strategy, and execution together for impactful digital transformations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
