import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  badge?: string;
}

export const ComingSoon = ({ title, description, badge = "Coming Soon" }: ComingSoonProps) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black px-6 pt-20 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-125 bg-linear-to-b from-neutral-900/50 to-transparent pointer-events-none" />
        
        <div className="z-10 text-center max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-indigo-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              {badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              {title}
            </h1>
            
            <p className="text-lg text-neutral-400 leading-relaxed mb-10">
              {description}
            </p>

            {/* Optional: Subscription or Back Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-8 py-3 rounded-full border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-900 transition-all"
              >
                Return Home
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all"
              >
                Notify Me
              </Link>
            </div>
        </div>
    </main>
  );
};