import { profile } from '@/mocks/portfolioData';

export default function Footer() {
  return (
    <footer className="relative bg-[#04040b] py-12 md:py-20 overflow-hidden">
      {/* Top border gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.4) 30%, rgba(56,189,248,0.4) 70%, transparent 100%)' }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-violet-600/8 blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="flex flex-col items-center text-center">
            <h2
              className="text-2xl md:text-5xl font-bold leading-tight text-gradient"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let&apos;s Connect!
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-lg text-slate-500 max-w-md mx-auto">
              Got a project in mind or just want to talk tech? I&apos;m always up for new ideas.
            </p>

            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
              {[
                { icon: 'ri-twitter-x-line', href: profile.socials.twitter, label: 'Twitter' },
                { icon: 'ri-github-line', href: profile.socials.github, label: 'GitHub' },
                { icon: 'ri-linkedin-line', href: profile.socials.linkedin, label: 'LinkedIn' },
                { icon: 'ri-mail-line', href: profile.socials.email, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center text-slate-500 transition-all duration-300 hover:scale-110"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(124, 58, 237, 0.4)';
                    el.style.color = '#a78bfa';
                    el.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '';
                    el.style.color = '';
                    el.style.boxShadow = '';
                  }}
                >
                  <i className={`${social.icon} text-base md:text-lg`} />
                </a>
              ))}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 md:mt-8 inline-flex items-center gap-1.5 text-xs md:text-sm text-slate-600 hover:text-violet-400 transition-colors duration-300 group cursor-pointer"
            >
              <span>Back to Top</span>
              <i className="ri-arrow-up-line group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="pt-6 mt-8 md:pt-8 md:mt-10 border-t border-white/[0.05]">
            <p className="text-center text-[11px] md:text-sm text-slate-700">
              &copy; {new Date().getFullYear()} R4PH431. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
