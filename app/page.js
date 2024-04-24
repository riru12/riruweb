import Image from "next/image";
import Navbar from "./components/navbar"
import Gradient from "./components/topgradient"
import Hero from "./components/hero"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Gradient />
      <Hero />
    </main>
  );
}
