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
        transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
        style={{
          width: '100%',
          maxWidth: '1100px',
          padding: '0.8rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          background: scrolled ? 'rgba(13, 11, 20, 0.8)' : 'rgba(25, 20, 38, 0.4)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '50px',
          boxShadow: scrolled ? '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 126, 179, 0.08)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <motion.div 
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
        
        <ul style={{ display: 'flex', gap: '1.8rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
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
  );
};

export default Navbar;
