import Image from "next/image";
import Navbar from "./components/navbar"
import Gradient from "./components/topgradient"
import Hero from "./components/hero"
import About from "./components/about"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Gradient />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
