import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="section-padding" style={{ 
      minHeight: '100svh',        /* svh = small viewport height, excludes iOS address bar */
      minHeight: '100vh',         /* fallback */
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '6rem',
      position: 'relative',
      overflow: 'hidden'          /* clip glow orbs that bleed past the section */
    }}>
      
      {/*
        Ambient glow orbs — previously fixed 300px/400px wide, they overflowed at 360px.
        Now clamped with max-width and positioned so they stay contained.
      */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: 'clamp(150px, 40vw, 300px)',  /* shrinks to 40vw on small screens */
        height: 'clamp(150px, 40vw, 300px)',
        background: 'radial-gradient(circle, rgba(255, 126, 179, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: 'clamp(180px, 45vw, 400px)',  /* shrinks to 45vw on small screens */
        height: 'clamp(180px, 45vw, 400px)',
        background: 'radial-gradient(circle, rgba(0, 255, 213, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />

      <div className="container hero-grid">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              padding: '0.5rem 1.2rem', 
              borderRadius: '50px', 
              fontWeight: 600, 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              maxWidth: '100%'   /* prevents badge from overflowing on 360px */
            }}
          >
            <span style={{ color: 'var(--accent-cyan)', flexShrink: 0 }}>●</span>
            HELLO WORLD! 👋
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'clamp(2.6rem, 8vw, 5.5rem)', 
            fontWeight: 900, 
            marginBottom: '1rem', 
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            wordBreak: 'break-word'   /* prevents name from overflowing at smallest sizes */
          }}>
            I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <h3 style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.8rem)', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            color: 'var(--accent-cyan)',
            letterSpacing: '-0.01em',
            fontFamily: 'Outfit'
          }}>
            {personalInfo.title}
          </h3>
          
          <p style={{ 
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', 
            color: 'var(--text-secondary)', 
            marginBottom: '3rem', 
            maxWidth: '520px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            {personalInfo.tagline}
          </p>
          
          {/*
            .hero-btn-group class stacks buttons to full-width column on ≤480px
            (defined in index.css) so they don't overflow at 360px.
          */}
          <div className="hero-btn-group">
            <a href="#projects" className="btn btn-primary">Explore My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </motion.div>

        {/* Avatar / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: 'spring' }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative', perspective: 1000 }}
        >
          <motion.div 
            animate={isMobile ? {} : { 
              y: [-15, 15, -15],
              rotate: [-1, 1, -1]
            }}
            transition={isMobile ? {} : { repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '260px' : '380px',  /* smaller on mobile so it doesn't crowd */
              aspectRatio: '1',
              borderRadius: '50% 50% 40% 40%',
              background: 'radial-gradient(circle, rgba(157, 0, 255, 0.15) 0%, rgba(255, 126, 179, 0.05) 70%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: isMobile ? 'none' : 'blur(20px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.02)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img 
              src={personalInfo.avatar} 
              alt="Developer Avatar" 
              style={{ width: '85%', height: '85%', objectFit: 'contain', zIndex: 2 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
