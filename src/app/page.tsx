import { Navbar } from "@/components";
import { Hero } from "./Hero";
import { Features } from "./Features";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  )
}
