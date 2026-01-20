import { timelineData } from "@/lib/data";

export const Timeline = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-20 text-center tracking-tight">
          Journey <span className="text-neutral-500">& Experience</span>
        </h2>

        <div className="relative">
          {/* Center Spine Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neutral-800" />

          {/* Column Headers */}
          <div className="hidden lg:flex justify-between text-xs font-bold text-neutral-500 uppercase tracking-widest mb-12">
            <div className="w-5/12 text-right pr-8">Professional Experience</div>
            <div className="w-5/12 text-left pl-8">Academic Career</div>
          </div>

          <div className="space-y-20"> {/* Increased spacing between Time Blocks */}
            {timelineData.map((row, rowIndex) => (
              <div key={rowIndex} className="relative flex flex-col lg:flex-row items-stretch justify-between group">
                
                {/* --- Left Side: WORK ARRAY --- */}
                <div className="w-full lg:w-5/12 flex flex-col items-end gap-6">
                  {row.work && row.work.length > 0 ? (
                    row.work.map((job, jobIndex) => (
                      <div key={jobIndex} className="w-full lg:pr-8 relative">
                        {/* Connector Dot (Only for the first item in the list) */}
                        {jobIndex === 0 && (
                          <span className="hidden lg:block absolute top-6 -right-[37px] w-2.5 h-2.5 bg-indigo-500 rounded-full z-20" />
                        )}
                        
                        <div className="bg-neutral-900/20 p-6 rounded-xl border border-neutral-800/50 hover:border-neutral-700 transition-colors h-full">
                          <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                          <p className="text-indigo-400 text-sm font-semibold mb-3">{job.organization}</p>
                          <p className="text-neutral-400 text-sm leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    /* Empty placeholder */
                    <div className="hidden lg:block" /> 
                  )}
                </div>

                {/* --- Center: PERIOD BUBBLE --- */}
                {/* Placed absolutely to stay at the top of the block */}
                <div className="flex items-start justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 mb-8 lg:mb-0 lg:pt-0 order-first lg:order-none">
                  <div className="flex items-center justify-center w-[140px] py-2 bg-neutral-950 border border-neutral-700 rounded-full text-xs font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {row.period}
                  </div>
                </div>

                {/* --- Right Side: EDUCATION ARRAY --- */}
                <div className="w-full lg:w-5/12 flex flex-col items-start gap-6 mt-6 lg:mt-0">
                  {row.education && row.education.length > 0 ? (
                    row.education.map((edu, eduIndex) => (
                      <div key={eduIndex} className="w-full lg:pl-8 relative">
                         {/* Connector Dot (Only for the first item) */}
                         {eduIndex === 0 && (
                           <span className="hidden lg:block absolute top-6 -left-[37px] w-2.5 h-2.5 bg-emerald-500 rounded-full z-20" />
                         )}
                         
                         <div className="bg-neutral-900/20 p-6 rounded-xl border border-neutral-800/50 hover:border-neutral-700 transition-colors h-full">
                          <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                          <p className="text-emerald-400 text-sm font-semibold mb-3">{edu.organization}</p>
                          <p className="text-neutral-400 text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                     </div>
                    ))
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};