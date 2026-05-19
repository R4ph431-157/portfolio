import { useEffect, useRef, useState } from 'react';
import { skills } from '@/mocks/portfolioData';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWidth(level), delay);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs text-slate-500 font-medium tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, #7c3aed 0%, #38bdf8 100%)',
            boxShadow: width > 0 ? '0 0 10px rgba(124, 58, 237, 0.5)' : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-28 bg-[#07070f]"
    >
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 mb-12 md:mb-16 text-center">
            <span
              className="text-sm font-semibold uppercase tracking-widest text-gradient"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Skills
            </span>
            <h2
              className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technologies I Work With
            </h2>
            <p className="mt-4 md:mt-5 text-slate-500 max-w-xl mx-auto text-sm md:text-lg">
              My toolkit focused on modern frontend development and continuously expanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {skills.map((group, groupIdx) => (
              <div
                key={group.category}
                className={`animate-in opacity-0 translate-y-8 transition-all duration-700 glass-card rounded-2xl p-6 md:p-8 hover:border-violet-500/20 ${
                  groupIdx === 0 ? 'delay-100' : 'delay-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(124, 58, 237, 0.12)', border: '1px solid rgba(124, 58, 237, 0.2)' }}
                  >
                    <i
                      className={`${
                        groupIdx === 0 ? 'ri-code-s-slash-line' : 'ri-book-open-line'
                      } text-xl`}
                      style={{ color: '#a78bfa' }}
                    />
                  </div>
                  <h3
                    className="text-base font-semibold text-slate-200"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {group.category}
                  </h3>
                </div>

                {group.items.map((item, itemIdx) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    delay={groupIdx * 200 + itemIdx * 150}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
