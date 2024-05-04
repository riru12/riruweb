import Navbar from "./components/navbar"
import Gradient from "./components/topgradient"
import Hero from "./components/hero"
import About from "./components/about"
import Work from "./components/work"
import Projects from "./components/projects";
import Contact from "./components/contact"
import Footer from "./components/footer"
/* for testing section */
/* import Test from "./components/test" */
import Test from "./components/test"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Gradient />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
      {/* <Test /> */}
      <Test />
      <Footer />
    </main>
  );
}
