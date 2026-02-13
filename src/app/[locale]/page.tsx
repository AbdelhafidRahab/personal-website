import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

const Skills = dynamic(() => import("@/components/Skills").then(mod => mod.Skills));
const Timeline = dynamic(() => import("@/components/Timeline").then(mod => mod.Timeline));

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-20 w-125 h-125 bg-white/5 rounded-full blur-[120px] z-10" />
      <div className="absolute bottom-0 -right-20 w-125 h-125 bg-neutral-800/10 rounded-full blur-[120px] z-10" />

      {/* Sections */}
      <Hero />
      <Timeline />
      <Skills />
    </main>
  );
}