import { useEffect, useRef } from 'react';
import { projects } from '@/mocks/portfolioData';

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-[#07070f]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 mb-12 md:mb-16 text-center">
            <span
              className="text-sm font-semibold uppercase tracking-widest text-gradient"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Projects
            </span>
            <h2
              className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Recent Work
            </h2>
            <p className="mt-4 md:mt-5 text-slate-500 max-w-xl mx-auto text-sm md:text-lg">
              Projects I&apos;ve built to sharpen my skills and explore new ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`animate-in opacity-0 translate-y-8 transition-all duration-700 group ${
                  idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : idx === 2 ? 'delay-300' : 'delay-400'
                }`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-500/25 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/80 via-[#07070f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* View badge */}
                    <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)' }}
                      >
                        View <i className="ri-arrow-right-up-line" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold"
                          style={{
                            background: 'rgba(124, 58, 237, 0.12)',
                            border: '1px solid rgba(124, 58, 237, 0.2)',
                            color: '#a78bfa',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-base md:text-xl font-bold text-slate-200 group-hover:text-gradient transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
