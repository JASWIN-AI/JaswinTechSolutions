import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-navy-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-gold-400">JASWIN</span> Tech Solution
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Innovative technology solutions that drive business growth and digital transformation for forward-thinking companies.
            </p>
            <Link href="/contact">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-800 font-semibold px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Leading Technology Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At JASWIN Tech Solution, we specialize in delivering cutting-edge technology services that help businesses thrive in the digital age. Our team of experts combines technical excellence with strategic insight to provide solutions that drive real results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From custom software development to cloud migration and digital transformation, we partner with organizations to unlock their full potential through technology.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-500">150+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-500">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-500">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional office environment with modern technology" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
