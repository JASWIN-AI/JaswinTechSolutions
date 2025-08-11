import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket, Zap, Sparkles } from "lucide-react";
import { motion } from 'framer-motion';
import heroBg from "../../../assets/hero_background5.png"; // Adjust the path as necessary
export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-navy-800 text-white py-20 lg:py-28">
          {/* Background Image as <img> */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

{/* Add a semi-transparent overlay to improve text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Lighten Overlay 
          <div className="absolute inset-0 bg-white bg-opacity-5"></div>
*/}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

          {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gold-200">JASWIN</span> AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Innovative technology solutions that drive business growth and digital transformation for forward-thinking companies.
            </p>
            <Link href="/contact">
              <Button className="
                bg-gold-500 hover:bg-gold-600 
                text-navy-800 font-semibold px-8 py-3 text-lg shadow-lg
                underline decoration-navy-800 underline-offset-4
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:decoration-white
              ">
                Let's Build the Future
              </Button>
            </Link>
          </div>
        </section>



      {/* Company Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <h2 className="text-3xl font-bold text-navy-800 mb-6">
                <span className="text-gold-500">Our</span> Mission
              </h2> */}
               <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-400 pb-2">
                Our Mission
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  JASWIN AI Solution is a dynamic technology and consulting startup, blending deep industry expertise with cutting-edge innovation. Founded by BFSI and IT seasoned professionals  and fueled by a talented team of technologists and strategists, we deliver agile, impactful solutions for modern enterprises.
                </p>
                <p className="text-lg">
                  At JASWIN, we bridge the gap between vision and reality. As a next-gen technology and consulting startup, we combine decades of industry expertise with agile innovation to deliver tailored solutions for the <span className="font-semibold text-gold-600">BFSI</span>, <span className="font-semibold text-gold-600">EdTech</span>, and <span className="font-semibold text-gold-600">eGovernance</span> sectors.
                </p>
                <p className="text-lg">
                  Backed by seasoned leaders from banking, IT, and public sector digitization, and powered by a dynamic team of developers, strategists, and domain specialists, we bring <span className="font-semibold">speed</span>, <span className="font-semibold">precision</span>, and <span className="font-semibold">fresh thinking</span> to every project.
                </p>
                <p className="text-lg">
                  From custom software development to cloud migration and digital transformation, we partner with organizations to unlock their full potential through technology.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Startup team collaborating on digital solutions" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

     {/* Disruptive by Design Section - Compact Colorful Design */}
<section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header with Better Visibility */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-navy-800">
        <span className="bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">
          From Vision 
        </span>{' '}
        <span className="text-navy-800">to Velocity</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gold-400 mx-auto mt-4 rounded-full"></div>
    </div>
    
    {/* Compact Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Rapid Prototyping Card */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-blue-500">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <Rocket className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold text-navy-800 mb-2">0 to MVP</h3>
        <p className="text-gray-600 text-sm">
          Concept to prototype in weeks with our agile framework
        </p>
      </div>
      
      {/* AI-Powered Card */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-purple-500">
        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4">
          <Zap className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-bold text-navy-800 mb-2">AI-Powered</h3>
        <p className="text-gray-600 text-sm">
          Intelligent systems that evolve with your needs
        </p>
      </div>
      
      {/* Future-Proof Card */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-teal-500">
        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="text-lg font-bold text-navy-800 mb-2">Future-Proof</h3>
        <p className="text-gray-600 text-sm">
          Scalable architecture for tomorrow's challenges
        </p>
      </div>
    </div>

    {/* Medium-sized Success Story CTA */}
    <div className="mt-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl shadow-lg p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Let's Build Your <span className="text-yellow-300">Success Story</span>
        </h2>
        <p className="text-blue-100 mb-6">
          Custom solutions tailored for startups and enterprises alike
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-2 px-6 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Get Started
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className=" border border-white text-blue hover:bg-white hover:text-blue-800 font-medium py-2 px-6 rounded-full text-sm shadow hover:scale-105 transition-transform">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}