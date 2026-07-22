import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main className="">

      <Background />

      <Cursor />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      <Footer />

    </main>
  );
}