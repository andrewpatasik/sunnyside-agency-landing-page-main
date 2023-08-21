import { Navbar } from "@/components";
import { Hero } from "./Hero";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Hero />
    </main>
  )
}
