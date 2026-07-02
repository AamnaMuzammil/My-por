import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ThreeCanvas from './components/ThreeCanvas';
import Lenis from 'lenis';

// ── Cinematic Parallax Section Wrapper ──────────────────────────────────────
// Each section slides in with a vertical parallax offset as you scroll past it.
// This creates the "video / cinematic camera pull" feeling.
const ParallaxSection = ({ children, offset = 60 }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Smooth spring for extra cinematic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [`${offset}px`, `-${offset}px`]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
};

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Only initialize smooth scroll on desktop screens for optimal mobile experience
    if (window.innerWidth > 768) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });

      let rafId;
      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Fixed interactive 3D starfield — reacts to scroll */}
      <ThreeCanvas />

      {/* Floating pill navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Hero — no parallax fade so it's always full-visible on load */}
        <Hero />

        {/* Every section below gets the cinematic parallax treatment */}
        <ParallaxSection offset={80}>
          <About />
        </ParallaxSection>

        <ParallaxSection offset={60}>
          <Skills />
        </ParallaxSection>

        <ParallaxSection offset={70}>
          <Projects />
        </ParallaxSection>

        <ParallaxSection offset={60}>
          <Contact />
        </ParallaxSection>
      </main>

      <Footer />
    </>
  );
}

export default App;
