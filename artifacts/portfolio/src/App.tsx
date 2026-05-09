import { Hero, Navbar } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Leadership } from "./components/sections/Leadership";
import { Contact } from "./components/sections/Contact";

function App() {
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

export default App;
