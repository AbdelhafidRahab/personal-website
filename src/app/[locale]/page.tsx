import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { AboutService } from "@/features/about/services/AboutService";

const Skills = dynamic(() =>
  import("@/features/about/components/Skills").then((mod) => mod.Skills)
);
const Timeline = dynamic(() =>
  import("@/features/about/components/Timeline").then((mod) => mod.Timeline)
);

export default async function Home() {
  // 1. Decoupled Architecture: The Server Component acts as a Controller
  // It fetches data from the Service layer and passes it down purely as props.
  const timelineData = await AboutService.getTimeline();
  const skillsData = await AboutService.getSkills();

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-20 w-125 h-125 bg-white/5 rounded-full blur-[120px] z-10" />
      <div className="absolute bottom-0 -right-20 w-125 h-125 bg-neutral-800/10 rounded-full blur-[120px] z-10" />

      {/* Sections */}
      <Hero />
      <Timeline data={timelineData} />
      <Skills data={skillsData} />
    </main>
  );
}
