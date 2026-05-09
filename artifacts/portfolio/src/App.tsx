import { Route, Switch } from "wouter";
import { PortfolioProvider } from "./context/PortfolioContext";
import { Hero, Navbar } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Leadership } from "./components/sections/Leadership";
import { Contact } from "./components/sections/Contact";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

function Portfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <Switch>
        <Route path="/admin/dashboard" component={Admin} />
        <Route path="/admin" component={AdminLogin} />
        <Route component={Portfolio} />
      </Switch>
    </PortfolioProvider>
  );
}

export default App;
