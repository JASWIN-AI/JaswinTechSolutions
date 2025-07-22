import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Custom e-commerce solution with advanced inventory management and payment processing for retail client.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web Development"
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
      title: "BI Dashboard",
      description: "Interactive business intelligence dashboard providing real-time insights and advanced analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Data Analytics"
    },
    {
      title: "ERP System",
      description: "Comprehensive enterprise resource planning system streamlining business processes and operations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Enterprise Software"
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-navy-800 mb-4">Our Recent Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve their digital goals through innovative technology solutions.
            </p>
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
                    <button className="text-navy-800 hover:text-gold-500 smooth-transition">
                      <ArrowRight className="h-5 w-5" />
                    </button>
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
