import { Navbar } from "@/components";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Testimonial } from "./Testimonial";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Footer />
    </main>
  )
}
