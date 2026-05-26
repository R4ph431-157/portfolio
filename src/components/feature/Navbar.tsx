import { useState, useEffect } from 'react';
import { navLinks } from '@/mocks/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const y = window.scrollY;
        setScrolled(y > 50);
        if (y < 200) {
          setActiveSection('');
          return;
        }
        const sections = ['about', 'skills', 'projects'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06]'
          : 'border-b border-transparent'
      }`}
      style={
        scrolled
          ? { background: 'rgba(7, 7, 15, 0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
          : {}
      }
    >
      <div className="section-container">
        <div className="section-inner flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span
              className="text-lg md:text-xl font-bold tracking-tight text-gradient"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              R4PH431
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-300 whitespace-nowrap cursor-pointer group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-300"
                  style={{
                    width: activeSection === link.href.replace('#', '') ? '100%' : '0%',
                    background: 'linear-gradient(90deg, #7c3aed, #38bdf8)',
                  }}
                />
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px rounded-full w-0 group-hover:w-full transition-all duration-300 opacity-50"
                  style={{ background: 'linear-gradient(90deg, #7c3aed, #38bdf8)' }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`ri-${mobileOpen ? 'close' : 'menu'}-line text-2xl`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/[0.06]"
          style={{ background: 'rgba(7, 7, 15, 0.97)' }}
        >
          <div className="section-container py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-slate-400 hover:text-slate-100 transition-colors text-base font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
