import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FiGithub size={20} />, link: personalInfo.github, label: 'GitHub', color: '#ff7eb3' },
    { icon: <FiLinkedin size={20} />, link: personalInfo.linkedin, label: 'LinkedIn', color: '#00ffd5' },
    { icon: <FiMail size={20} />, link: `mailto:${personalInfo.email}`, label: 'Email', color: '#9d00ff' },
  ];

  return (
    <footer style={{
      position: 'relative',
      background: 'rgba(8, 6, 14, 0.85)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      overflow: 'hidden',
    }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #ff7eb3, #9d00ff, #00ffd5, transparent)',
      }} />

      {/* Ambient glow orbs */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '10%',
        width: 'clamp(140px, 35vw, 300px)', height: 'clamp(140px, 35vw, 300px)',
        background: 'radial-gradient(circle, rgba(255,126,179,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', right: '10%',
        width: 'clamp(140px, 35vw, 300px)', height: 'clamp(140px, 35vw, 300px)',
        background: 'radial-gradient(circle, rgba(0,255,213,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />

      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>

        <div className="footer-row">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '320px' }}
          >
            <div style={{
              fontFamily: 'Outfit',
              fontWeight: 900,
              fontSize: '2rem',
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '1rem'
            }}>
              <span style={{ color: 'var(--accent-pink)' }}>●</span> {personalInfo.name.split(' ')[0]}
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontSize: '0.95rem',
              fontWeight: 400
            }}>
              Software Engineering student & MERN Stack developer building sleek, performant digital experiences.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '2rem' }}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, borderColor: s.color, color: s.color, boxShadow: `0 0 15px ${s.color}33` }}
                  style={{
                    width: '44px', height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem' }}>
              Navigation
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s ease' }}
                    onMouseOver={e => e.currentTarget.style.color = '#fff'}
                    onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '260px' }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem' }}>
              Available For Work
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              marginBottom: '1.5rem'
            }}>
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ffd5', display: 'inline-block', flexShrink: 0 }}
              />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Open to new opportunities</span>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.5rem', borderRadius: '50px',
                background: 'linear-gradient(135deg, #ff7eb3, #9d00ff)',
                color: '#fff', fontWeight: 700, fontSize: '0.85rem',
                fontFamily: 'Outfit', cursor: 'pointer',
                border: 'none', textDecoration: 'none',
                boxShadow: '0 5px 20px rgba(255,126,179,0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,126,179,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(255,126,179,0.3)'; }}
            >
              Hire Me ✨
            </a>
          </motion.div>
        </div>

        {/* Bottom row — uses .footer-bottom class for responsive stacking on mobile */}
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', fontWeight: 400 }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Three.js
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)', boxShadow: '0 0 20px rgba(255,126,179,0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.03)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: 'all 0.25s ease',
              backdropFilter: 'blur(10px)'
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
