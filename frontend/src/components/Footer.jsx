import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      position: 'relative',
      background: 'rgba(8, 6, 14, 0.9)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      overflow: 'hidden',
    }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, #ff7eb3, #9d00ff, #00ffd5, transparent)',
      }} />

      {/* Ambient glow orbs */}
      <div style={{
        position: 'absolute', top: '-80px', left: '5%',
        width: 'clamp(140px, 35vw, 300px)', height: 'clamp(140px, 35vw, 300px)',
        background: 'radial-gradient(circle, rgba(255,126,179,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', right: '5%',
        width: 'clamp(140px, 35vw, 300px)', height: 'clamp(140px, 35vw, 300px)',
        background: 'radial-gradient(circle, rgba(0,255,213,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', borderRadius: '50%',
      }} />

      <div className="container" style={{ padding: '4rem 2rem 2.5rem' }}>

        {/* ── Big heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
            fontWeight: 900,
            fontFamily: 'Outfit',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          Let's Start Your{' '}
          <span className="gradient-text">Creative Project</span>
        </motion.h2>

        {/* ── Big CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="footer-cta-card"
        >
          {/* Left: CTA text + button */}
          <div className="footer-cta-left">
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
              fontWeight: 800,
              fontFamily: 'Outfit',
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
            }}>
              Ready to create something beautiful?
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.97rem',
              lineHeight: 1.7,
              marginBottom: '1.8rem',
              maxWidth: '380px',
            }}>
              I am currently available for new projects. Let's connect to discuss your requirements and timelines.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.8rem' }}
            >
              Send an Inquiry ✦
            </a>
          </div>

          {/* Divider */}
          <div className="footer-cta-divider" />

          {/* Right: Avatar + contact info */}
          <div className="footer-cta-right">
            {/* Avatar circle */}
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '2px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', marginBottom: '1rem',
              flexShrink: 0,
            }}>
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
              />
            </div>

            <div style={{ marginBottom: '1.4rem' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
                Say Hello 🔥
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Let's build something epic.
              </p>
            </div>

            {/* Quick links */}
            <p style={{
              fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'var(--text-secondary)',
              marginBottom: '0.9rem',
            }}>
              Quick Links
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem',
                  fontWeight: 500, transition: 'color 0.2s ease',
                  wordBreak: 'break-all', overflowWrap: 'break-word',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                <FiMail size={15} style={{ flexShrink: 0, color: 'var(--accent-pink)' }} />
                {personalInfo.email}
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem',
                  fontWeight: 500, transition: 'color 0.2s ease',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                <FiLinkedin size={15} style={{ flexShrink: 0, color: 'var(--accent-cyan)' }} />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem',
                  fontWeight: 500, transition: 'color 0.2s ease',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                <FiGithub size={15} style={{ flexShrink: 0, color: 'var(--accent-purple)' }} />
                Github
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom" style={{ marginTop: '2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem', fontWeight: 400 }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Three.js
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)', boxShadow: '0 0 18px rgba(0,255,213,0.25)' }}
            whileTap={{ scale: 0.93 }}
            style={{
              width: '38px', height: '38px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(0,255,213,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent-cyan)', cursor: 'pointer',
              transition: 'all 0.25s ease', backdropFilter: 'blur(10px)',
            }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
