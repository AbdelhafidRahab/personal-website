import { skills } from "@/lib/data";

export const Skills = () => {
  const categories = ["technical", "soft"] as const;

  return (
    <section className="py-24 bg-neutral-950/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-20 text-center tracking-tight">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-white capitalize mb-6 flex items-center gap-3">
                {category} <span className="h-px flex-1 bg-neutral-800"></span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                        ${skill.highlight 
                          ? 'bg-neutral-100 text-black border border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                          : 'bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white'}
                      `}
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};