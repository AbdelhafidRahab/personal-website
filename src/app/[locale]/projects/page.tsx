import { ProjectService } from "@/features/projects/services/ProjectService";
import { ProjectsView } from "@/features/projects/components/ProjectsView";

export default async function ProjectsPage() {
  // 1. Fetch data on the Server
  const projects = await ProjectService.getAll();

  return (
    <main className="min-h-screen pt-32 pb-24 bg-black">
      {/* 2. Pass data to the Client Component */}
      <ProjectsView initialProjects={projects} />
    </main>
  );
}
