import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [isOpen, setIsOpen] = useState(false);

  // ── Lock / unlock body scroll when mobile drawer is open ──────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Always clean up on unmount
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Event listeners — all passive to avoid scroll jank ───────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    // Close drawer on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    // { passive: true } eliminates scroll-blocking jank on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Run resize handler once on mount to sync state
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* ── Desktop Pill Navbar ────────────────────────────────────────────── */}
      {!isMobile && (
        <div style={{ 
          position: 'fixed', 
          top: '1rem', 
          left: 0, 
          right: 0, 
          display: 'flex', 
          justifyContent: 'center', 
          zIndex: 100,
          padding: '0 1rem'
        }}>
          <motion.nav
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
            style={{
              width: '100%',
              maxWidth: '1100px',
              padding: '0.8rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: scrolled ? 'rgba(13, 11, 20, 0.85)' : 'rgba(25, 20, 38, 0.4)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '50px',
              boxShadow: scrolled
                ? '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 126, 179, 0.08)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <motion.div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.03 }}
              style={{ 
                fontWeight: '800', fontSize: '1.4rem', fontFamily: 'Outfit', 
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                letterSpacing: '-0.02em', color: '#ffffff'
              }}
            >
              <span style={{ color: 'var(--accent-pink)', fontSize: '1rem' }}>●</span> 
              {personalInfo.name.split(' ')[0]}
            </motion.div>
            
            <ul style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <motion.li 
                  key={item} 
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <a href={`#${item.toLowerCase()}`} style={{ 
                    fontWeight: 600, 
                    color: 'var(--text-secondary)', 
                    letterSpacing: '0.05em',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400 }}>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </motion.li>
            </ul>
          </motion.nav>
        </div>
      )}

      {/* ── Mobile Hamburger Button ─────────────────────────────────────────── */}
      {isMobile && (
        <button 
          className="mobile-drawer-btn"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label={isOpen ? 'Close Navigation' : 'Open Navigation'}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      )}

      {/* ── Mobile Drawer Overlay & Sidebar ────────────────────────────────── */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              className="mobile-drawer-backdrop"
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="mobile-drawer"
            >
              {/* Brand inside drawer */}
              <div style={{
                fontFamily: 'Outfit',
                fontWeight: 900,
                fontSize: '1.6rem',
                color: '#fff',
                marginBottom: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: 'var(--accent-pink)', fontSize: '1.1rem' }}>●</span> 
                {personalInfo.name.split(' ')[0]}
              </div>

              {/* Drawer links */}
              <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.8rem', 
                width: '100%',
                flexGrow: 1
              }}>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.25 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={closeDrawer}
                      style={{ 
                        display: 'block',
                        padding: '0.9rem 1rem',
                        fontWeight: 700, 
                        color: 'var(--text-secondary)', 
                        letterSpacing: '0.08em',
                        fontSize: '1.05rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={e => { 
                        e.currentTarget.style.color = '#ffffff'; 
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; 
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                      onMouseOut={e => { 
                        e.currentTarget.style.color = 'var(--text-secondary)'; 
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)'; 
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Controls */}
              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
                marginTop: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ 
                  color: 'var(--text-secondary)', 
                  fontWeight: 600, 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Theme
                </span>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
