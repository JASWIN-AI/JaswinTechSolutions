import { Code, Cloud, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build robust, scalable applications tailored to your specific business needs. From web applications to mobile solutions, we deliver high-quality software that drives results.",
      features: [
        "Full-stack web development",
        "Mobile app development",
        "API integration & development",
        "Legacy system modernization"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Migration",
      description: "Accelerate your digital transformation with secure, scalable cloud infrastructure. We help you migrate, optimize, and manage your cloud environment for maximum efficiency.",
      features: [
        "Cloud migration strategy",
        "AWS, Azure & GCP services",
        "DevOps & automation",
        "24/7 cloud monitoring"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to help your organization embrace digital technologies, optimize processes, and create new business opportunities in the digital economy.",
      features: [
        "Digital strategy roadmapping",
        "Process automation",
        "Data analytics & insights",
        "Technology assessment"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-navy-800 mb-4">Our Core Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-xl shadow-lg p-8 smooth-transition border border-gray-100 hover:shadow-xl">
                <div className="text-gold-500 mb-6">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-gold-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="bg-navy-800 hover:bg-navy-700 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
