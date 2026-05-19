import Navbar from '@/components/feature/Navbar';
import ScrollProgress from '@/components/feature/ScrollProgress';
import Footer from '@/components/feature/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}