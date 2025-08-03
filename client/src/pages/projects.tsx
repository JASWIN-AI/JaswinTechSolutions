import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI-LMS Platform",
      description: "A cloud-based SaaS platform built on MERN stack, simplifying corporate training, compliance, and skill development with AI-powered tools.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web Development"
    },
    {
      title: "AI-BFSI DST & Reporting",
      description: "A unified, role-agnostic dashboard suite with an AI-driven rules engine, designed to transform decision-making across India's banking ecosystem.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Data Analytics"
    },
    {
      title: "JASWIN Service Desk Plus",
      description: "JASWIN Service Desk Plus is a next-generation, AI-powered Service Desk Management platform built specifically for the operational and compliance demands of Indian banking and IT enterprises.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Enterprise Software"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration of enterprise applications to AWS cloud infrastructure with improved scalability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Cloud Solutions"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application with real-time features and intuitive user experience design.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Mobile Development"
    },
    
    
    {
      title: "Security Infrastructure",
      description: "Advanced cybersecurity solution with threat detection and automated response capabilities.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Cybersecurity"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-navy-800 mb-4">
              Turnkey Project Development
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
              We provide <span className="font-semibold text-navy-800">end-to-end software development services</span>, delivering fully integrated digital solutions from initial concept to deployment and beyond.
              <br /><br />
              Our turnkey approach covers:
              <ul className="list-disc list-inside text-gray-600 mt-2 mb-4">
                <li>Requirement analysis &amp; system architecture</li>
                <li>Agile development &amp; rigorous testing</li>
                <li>Seamless implementation &amp; ongoing support</li>
              </ul>
              By combining cutting-edge technologies with industry best practices, we build scalable, secure, and high-performance software tailored to your business objectives.
              <br /><br />
              <span className="font-medium text-navy-800">From innovation to efficiency</span>, we manage the entire project lifecycle—reducing risks, optimizing costs, and accelerating time-to-market.
              </p>
            </div>
            <div className="flex-1 hidden md:block">
              <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Turnkey Project Development"
              className="rounded-xl shadow-lg object-cover w-full h-72"
              />
            </div>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-item bg-white rounded-xl shadow-lg overflow-hidden smooth-transition hover:shadow-xl">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-500 font-medium">{project.category}</span>
                   {/*  <button className="text-navy-800 hover:text-gold-500 smooth-transition">
                      <ArrowRight className="h-5 w-5" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
