import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import ProductDevelopment from "@/pages/product-development";
import Consulting from "./pages/consulting";
import JaswinAILMS from "./pages/JaswinAILMS";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/solutions/turnkey-projects" component={Projects} />
      <Route path="/solutions/product-development" component={ProductDevelopment} />
      <Route path="/contact" component={Contact} />
      <Route path="/consulting" component={Consulting} />
      <Route path="product/lms" component={JaswinAILMS} />
      <Route path="/home" component={Home} />
    </Switch>
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