import Image from "next/image";
import Navbar from "./components/navbar"
import Gradient from "./components/topgradient"
import Hero from "./components/hero"
import About from "./components/about"
import Work from "./components/work"
import Footer from "./components/footer"
/* for testing sections */
import Test from "./components/test"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Gradient />
      <Hero />
      <About />
      <Work />
      {/* <Test /> */}
      <Footer />
    </main>
  );
}
