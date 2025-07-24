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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-navy-800 mb-4">About JASWIN Tech Solution</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              JASWIN AI Solution LLP is an Indian tech startup that helps businesses grow with smart, scalable digital solutions. We focus on innovation, speed, and trust to deliver high-quality IT services and projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gold-100 p-8 rounded-xl">
              <div className="text-gold-500 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional technology solutions that drive business growth, enhance operational efficiency, and create lasting value for our clients. We strive to be the trusted technology partner that organizations rely on for their digital transformation journey.
              </p>
            </div>

            <div className="bg-navy-50 p-8 rounded-xl">
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

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-800 mb-4">Meet Our Expert Team</h3>
            <p className="text-lg text-gray-600">
              Our diverse team of technology professionals brings together expertise, creativity, and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card bg-white rounded-xl shadow-lg p-6 text-center smooth-transition">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.position}`} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                />
                <h4 className="text-xl font-semibold text-navy-800 mb-2">{member.name}</h4>
                <p className="text-gold-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
