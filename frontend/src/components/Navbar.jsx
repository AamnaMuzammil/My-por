import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: '1rem', 
      left: 0, 
      right: 0, 
      display: 'flex', 
      justifyContent: 'center', 
      zIndex: 100,
      padding: '0 1rem' // Prevents it from touching screen edges on mobile
    }}>
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '0.8rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap', // Prevents overflow if screen is too small
          gap: '1rem',
          background: scrolled ? 'var(--bg-main)' : 'var(--bg-secondary)',
          border: '4px solid var(--text-main)',
          borderRadius: '24px',
          boxShadow: scrolled ? '8px 8px 0px #ff7eb3' : '8px 8px 0px #06d6a0',
          transition: 'background 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <motion.div 
          whileHover={{ rotate: 5, scale: 1.05 }}
          style={{ 
            fontWeight: '800', fontSize: '1.5rem', fontFamily: 'Outfit', 
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
            textTransform: 'uppercase'
          }}
        >
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>🌸</motion.span> 
          {personalInfo.name.split(' ')[0]}
        </motion.div>
        
        <ul style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li 
              key={item} 
              whileHover={{ y: -3, scale: 1.1, rotate: Math.random() > 0.5 ? 5 : -5 }}
              transition={{ type: 'spring', bounce: 0.6 }}
            >
              <a href={`#${item.toLowerCase()}`} style={{ 
                fontWeight: 800, 
                color: 'var(--text-main)', 
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.9rem'
              }}>
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: 'spring', bounce: 0.5 }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
