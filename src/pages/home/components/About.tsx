import { useEffect, useRef } from 'react';
import { about, profile } from '@/mocks/portfolioData';

export default function About() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-[#07070f]"
    >
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="animate-in opacity-0 translate-y-8 transition-all duration-700 mb-12 md:mb-16">
            <span
              className="text-sm font-semibold uppercase tracking-widest text-gradient"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              About Me
            </span>
            <h2
              className="mt-3 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {about.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-4 animate-in opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <div className="relative max-w-xs mx-auto lg:mx-0">
                {/* Gradient ring around avatar */}
                <div
                  className="relative rounded-2xl p-[2px]"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)' }}
                >
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full aspect-square object-cover object-top"
                    />
                  </div>
                </div>
                {/* Code icon badge */}
                <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-xl glass-card border-violet-500/20 flex items-center justify-center"
                  style={{ border: '1px solid rgba(124, 58, 237, 0.25)' }}
                >
                  <i className="ri-code-box-line text-2xl text-gradient" style={{ background: 'linear-gradient(135deg, #a78bfa, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                </div>
                {/* Ambient glow behind image */}
                <div className="absolute inset-0 -z-10 bg-violet-600/15 rounded-2xl blur-2xl" />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-5 md:space-y-7">
                {about.paragraphs.slice(0, 3).map((para, idx) => (
                  <p
                    key={idx}
                    className={`animate-in opacity-0 translate-y-8 transition-all duration-700 text-slate-400 leading-relaxed text-base md:text-lg ${
                      idx === 0 ? 'delay-200' : idx === 1 ? 'delay-300' : 'delay-400'
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
