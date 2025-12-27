import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/NavBar";
import { StarryBackground } from "./components/StarryBackground";

import { About } from "./pages/About";
import { CCA } from "./pages/CCA";
import { Education } from "./pages/Education";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Work } from "./pages/Work";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-blue-950">
      <Analytics />
      <Navbar />
      <StarryBackground />

      {/* Sections */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="cca">
        <CCA />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="project">
        <Project />
      </section>

      <Footer />
    </div>
  );
}
