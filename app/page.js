import Image from "next/image";
import Navbar from "./components/navbar"
import Gradient from "./components/topgradient"
import Hero from "./components/hero"
import About from "./components/about"
import Work from "./components/work"
import Projects from "./components/projects";
import Footer from "./components/footer"
/* for testing sections */
/* import Test from "./components/test" */

export default function Home() {
  return (
    <main className="overflow-y-scroll max-h-screen">
      <Navbar />
      <Gradient />
      <Hero />
      <About />
      <Work />
      <Projects />
      {/* <Test /> */}
      <Footer />
    </main>
  );
}
