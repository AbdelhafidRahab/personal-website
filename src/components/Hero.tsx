import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center z-10">
      <div className="container mx-auto px-6 text-center">        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">
          Building Digital <br />
          <span className="heading-gradient">Solutions</span>
        </h1>
        
        <p className="mx-auto max-w-xl text-lg text-neutral-400 leading-relaxed mb-10">
          Full Stack Engineer & AI Enthusiast. I architect, code, and ship scalable systems that solve real user problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects" 
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all"
          >
            View Projects
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-4 rounded-full border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-900 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};