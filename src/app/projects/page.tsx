"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'proprietary' | 'open-source'>('proprietary');

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeTab
  );

  return (
    <main className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="heading-gradient">Projects</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg">
            A selection of projects I&apos;ve built or contributed to.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="p-1 bg-neutral-900/50 border border-neutral-800 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('proprietary')}
              className={`
                px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${activeTab === 'proprietary' 
                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                  : 'text-neutral-400 hover:text-white'}
              `}
            >
              Proprietary
            </button>
            <button
              onClick={() => setActiveTab('open-source')}
              className={`
                px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${activeTab === 'open-source' 
                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                  : 'text-neutral-400 hover:text-white'}
              `}
            >
              Open Source
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
                <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/20">
            <p className="text-neutral-500">No projects found in this category yet.</p>
          </div>
        )}

      </div>
    </main>
  );
}