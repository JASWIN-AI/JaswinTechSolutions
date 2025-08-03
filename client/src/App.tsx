import { useEffect } from 'react';
import { useLocation } from 'wouter'; // Import from wouter
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import ProductDevelopment from "@/pages/product-development";
import Projects from "@/pages/projects";
import Services from "@/pages/services";
import { Route, Switch } from "wouter";
import AIBFSIPage from "./pages/AIBFSIPage";
import AIDataConsulting from "./pages/AIDataConsulting";
import CloudDevelopmentServices from "./pages/CloudDevelopmentServices";
import Consulting from "./pages/consulting";
import HumanCapitalWarm from "./pages/HumanCapital";
import HumanCapitalCorporate from "./pages/HumanPartnership";
import InformationSecurity from "./pages/InformationSecurity";
import JaswinAILMS from "./pages/JaswinAILMS";
import ServiceDeskPlus from "./pages/ServiceDeskPlus";
import SREServices from "./pages/SREServices";
import TechnologyPartner from "./pages/TechnologyPartner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// ScrollToTop component for wouter router
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  }, [location]); // Trigger on location change
  

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/solutions/turnkey-projects" component={Projects} />
        <Route path="/solutions/product-development" component={ProductDevelopment} />
        <Route path="/solutions/sre-managed" component={SREServices} />
        <Route path="/solutions/cloud-services" component={CloudDevelopmentServices} />
        <Route path="/solutions/information-security" component={InformationSecurity} />
        <Route path="/solutions/ai-data-consulting" component={AIDataConsulting} />
        <Route path="/contact" component={Contact} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/product/lms" component={JaswinAILMS} />
        <Route path="/product/ai-bfsi" component={AIBFSIPage} />
        <Route path="/product/jas-service-desk" component={ServiceDeskPlus} />
        <Route path="/human-capital" component={HumanCapitalWarm} />
        <Route path="/hr-partner" component={HumanCapitalCorporate} />
        <Route path="/technology-partner" component={TechnologyPartner} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        {/* Catch-all route for home */}
        <Route path="/home" component={Home} />
        <Route path="/:rest*" component={Home} /> {/* Catch-all */}
      </Switch>
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;