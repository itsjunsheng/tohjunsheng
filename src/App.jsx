import { Navbar } from "./components/NavBar";
import SplashCursor from './components/SplashCursor/SplashCursor';
import { StarryBackground } from "./components/StarryBackground";
import { About } from "./pages/About";
import { CCA } from "./pages/CCA";
import { Education } from "./pages/Education";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Work } from "./pages/Work";



export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-black to-blue-950">
      <SplashCursor />

      <Navbar />
      
      <StarryBackground />

      <section id="home" className="scroll">
        <Home />
      </section>

      <section id="about" className="scroll">
        <About />
      </section>

      <section id="education" className="scroll">
        <Education />
      </section>

      <section id="cca" className="scroll">
        <CCA />
      </section>

      <section id="work" className="scroll">
        <Work />
      </section>

      <section id="projects" className="scroll">
        <Projects />
      </section>

      <Footer />
    </div>
  );
}
