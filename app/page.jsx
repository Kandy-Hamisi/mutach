import { Footer, Navbar } from "@/components";
import { Hero, OurServices, Projects, WhoWeAre } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className="padding bg-electric bg-cover bg-center bg-fixed">
        <Hero />
      </section>
      <section className="padding">
        <WhoWeAre />
      </section>
      <section className="padding bg-silver">
        <OurServices />
      </section>
      <section className="padding">
        <Projects />
      </section>
      <section className="padding bg-graphite">
        <Footer />
      </section>
    </main>
  );
}
