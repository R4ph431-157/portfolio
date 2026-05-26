import { profile } from '@/mocks/portfolioData';

export default function Hero() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07070f]"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[300px] h-[300px] bg-sky-500/8 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 section-container pt-20">
        <div className="section-inner text-center">
          <h1
            className="hero-fade-in text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: '0.1s' }}
          >
            <span className="text-white">Building Digital</span>
            <br />
            <span className="italic font-light text-slate-500">Experiences</span>
            <br />
            <span className="text-gradient">That Matter</span>
          </h1>

          <p
            className="hero-fade-in mt-6 md:mt-10 text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.25s' }}
          >
            Hi there, I&apos;m <strong className="text-slate-200 font-semibold">{profile.name}</strong>,{' '}
            a {profile.title} based in {profile.location}.
          </p>

          <div
            className="hero-fade-in mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={() => handleNavClick('#projects')}
              className="group relative px-8 py-3.5 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2 md:gap-2.5 whitespace-nowrap cursor-pointer text-white overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 35px rgba(124, 58, 237, 0.45), 0 0 70px rgba(124, 58, 237, 0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
              }}
            >
              View Projects
              <i className="ri-arrow-right-line text-base md:text-lg group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={profile.resumeUrl}
              download="idyuraphael_Resume.pdf"
              className="group px-8 py-3.5 md:px-10 md:py-4 border border-white/10 text-slate-300 rounded-full font-semibold text-sm md:text-base hover:border-violet-500/40 hover:text-white hover:bg-violet-500/8 transition-all duration-300 flex items-center gap-2 md:gap-2.5 whitespace-nowrap"
            >
              <i className="ri-download-line text-base md:text-lg" />
              Download CV
            </a>
          </div>

          <div
            className="hero-fade-in mt-10 md:mt-14 flex items-center justify-center gap-4 md:gap-7"
            style={{ animationDelay: '0.55s' }}
          >
            {[
              { icon: 'ri-html5-line', label: 'HTML', color: '#e34c26' },
              { icon: 'ri-css3-line', label: 'CSS', color: '#264de4' },
              { icon: 'ri-javascript-line', label: 'JS', color: '#f7df1e' },
              { icon: 'ri-reactjs-line', label: 'React', color: '#61dafb' },
            ].map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-1.5 md:gap-2 group cursor-default"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass-card flex items-center justify-center group-hover:border-white/15 group-hover:scale-110 transition-all duration-300">
                  <i
                    className={`${tech.icon} text-xl md:text-2xl`}
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-slate-600 text-[10px] md:text-sm font-medium">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="hero-fade-in mt-10 md:mt-14 flex items-center justify-center"
            style={{ animationDelay: '0.7s' }}
          >
            <button
              onClick={() => handleNavClick('#about')}
              className="text-slate-700 hover:text-slate-400 transition-colors cursor-pointer animate-bounce"
              aria-label="Scroll down"
            >
              <i className="ri-arrow-down-line text-xl md:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
