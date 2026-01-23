import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="group relative bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col h-full">
      
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-800">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-medium">
          Loading Image...
        </div>
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Role Badge*/}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-3 py-1 text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/20 rounded-full shadow-lg">
            {project.role}
          </span>
        </div>

        {/* Stats Badge*/}
        {project.stats && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold bg-indigo-600/90 backdrop-blur-md text-white rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
              {project.stats}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            The Technologies I used:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 text-xs font-medium text-neutral-300 bg-neutral-800/50 border border-neutral-700 rounded hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-800">
          {project.links.demo && (
            <Link 
              href={project.links.demo}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </Link>
          )}
          
          {project.links.repo && (
            <Link 
              href={project.links.repo}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};