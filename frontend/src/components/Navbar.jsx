import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <div style={{ 
      position: 'fixed', 
      top: '1rem', 
      left: 0, 
      right: 0, 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
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
          background: scrolled || isOpen ? 'rgba(13, 11, 20, 0.85)' : 'rgba(25, 20, 38, 0.4)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '50px',
          boxShadow: scrolled ? '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 126, 179, 0.08)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
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
        
        {/* Desktop Navigation */}
        {!isMobile && (
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
        )}

        {/* Mobile Navigation Controls */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                padding: '0.2rem'
              }}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        )}
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              width: 'calc(100% - 2rem)',
              maxWidth: '1100px',
              marginTop: '0.5rem',
              background: 'rgba(13, 11, 20, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}
          >
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.2rem', 
              alignItems: 'center',
              width: '100%' 
            }}>
              {navItems.map((item) => (
                <motion.li 
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      display: 'block',
                      padding: '0.6rem 0',
                      fontWeight: 700, 
                      color: 'var(--text-secondary)', 
                      letterSpacing: '0.08em',
                      fontSize: '1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
                    onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)'; }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
