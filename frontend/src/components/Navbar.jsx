import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ── Body scroll lock when drawer is open ────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Passive listeners ───────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    // Close drawer when viewport grows past mobile breakpoint
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };

    // Escape key closes drawer
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/*
        ── DESKTOP PILL NAVBAR ──────────────────────────────────────────────
        Visibility is controlled by CSS (.nav-desktop-wrapper):
          • Shown  on screens > 768px
          • Hidden on screens ≤ 768px  (display: none via media query)
        Never rely on JS window.innerWidth for show/hide — CSS is instant
        and works before any JS hydration.
      */}
      <div className="nav-desktop-wrapper">
        <motion.nav
          className="nav-desktop-pill"
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          style={{
            background: scrolled
              ? 'rgba(13, 11, 20, 0.85)'
              : 'rgba(25, 20, 38, 0.4)',
            boxShadow: scrolled
              ? '0 15px 35px rgba(0,0,0,0.4), 0 0 20px rgba(255,126,179,0.08)'
              : '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.03 }}
            className="nav-logo"
          >
            <span className="nav-logo-dot">●</span>
            {personalInfo.name.split(' ')[0]}
          </motion.div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </motion.li>
          </ul>
        </motion.nav>
      </div>

      {/*
        ── MOBILE HAMBURGER BUTTON ──────────────────────────────────────────
        Visibility is controlled by CSS (.mobile-drawer-btn):
          • Hidden on screens > 768px  (display: none via media query)
          • Shown  on screens ≤ 768px
      */}
      <button
        className="mobile-drawer-btn"
        onClick={() => setIsOpen((prev) => !prev)}
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
            transition={{ duration: 0.15 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* ── MOBILE DRAWER ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              id="mobile-drawer"
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            >
              {/* Brand */}
              <div className="drawer-brand">
                <span className="nav-logo-dot">●</span>
                {personalInfo.name.split(' ')[0]}
              </div>

              {/* Links */}
              <ul className="drawer-links">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.22 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="drawer-link"
                      onClick={closeDrawer}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Theme toggle */}
              <div className="drawer-footer">
                <span className="drawer-footer-label">Theme</span>
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
