import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Ambient glow orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '5%',
        width: 'clamp(120px, 30vw, 280px)', height: 'clamp(120px, 30vw, 280px)',
        background: 'radial-gradient(circle, rgba(255,126,179,0.18) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 'clamp(140px, 35vw, 360px)', height: 'clamp(140px, 35vw, 360px)',
        background: 'radial-gradient(circle, rgba(0,255,213,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* ── Avatar — sits ABOVE text ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.8rem' }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="hero-avatar-frame"
          >
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} avatar`}
              style={{ width: '88%', height: '88%', objectFit: 'contain', zIndex: 2 }}
            />
          </motion.div>
        </motion.div>

        {/* ── Available badge ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.6rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.9)',
            padding: '0.45rem 1.2rem',
            borderRadius: '50px',
            fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
          }}>
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00ffd5', display: 'inline-block', flexShrink: 0 }}
            />
            Available for new projects
          </div>
        </motion.div>

        {/* ── Heading ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, type: 'spring', bounce: 0.2 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.6rem, 9vw, 5.8rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '0.4rem',
            wordBreak: 'break-word',
          }}>
            Hey I'm{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.3rem, 4vw, 2.4rem)',
            fontWeight: 800,
            color: 'var(--accent-cyan)',
            fontFamily: 'Outfit',
            letterSpacing: '-0.01em',
            marginBottom: '1.4rem',
            lineHeight: 1.2,
          }}>
            {personalInfo.title.split('|')[1]?.trim() || personalInfo.title}
          </h2>

          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '540px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
            fontWeight: 400,
          }}>
            {personalInfo.tagline}
          </p>

          {/* CTA buttons — hero-btn-group stacks on ≤480px */}
          <div className="hero-btn-group" style={{ justifyContent: 'center' }}>
            <a href="#projects" className="btn btn-primary">
              Explore My Work ↓
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect ✨
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
