import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-card)', 
      borderTop: '6px solid var(--text-main)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '2rem'
    }}>
      {/* Animated Marquee */}
      <div style={{
        background: '#ff7eb3',
        color: '#1a1a1a',
        padding: '1rem 0',
        borderBottom: '4px solid var(--text-main)',
        borderTop: '4px solid var(--text-main)',
        display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transform: 'rotate(-1deg) scale(1.05)',
        marginBottom: '4rem',
        boxShadow: '0 8px 0px rgba(0,0,0,0.2)'
      }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{ display: 'flex', gap: '2rem', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Bricolage Grotesque' }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}>AVAILABLE FOR WORK ✨ LET'S BUILD SOMETHING 🚀</span>
          ))}
        </motion.div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Playful Floating Scene */}
        <div style={{ position: 'relative', width: '100%', height: '80px', pointerEvents: 'none' }}>
          <motion.div 
            animate={{ x: ['-20vw', '110vw'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            style={{ position: 'absolute', fontSize: '3rem', display: 'flex', gap: '30px', alignItems: 'flex-end', bottom: '0' }}
          >
            <motion.span animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 0.45 }}>🦖</motion.span>
            <motion.span animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 0.35 }}>🏃‍♀️</motion.span>
            <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 0.2 }}>🐛</motion.span>
            <motion.span animate={{ y: [0, -20, 0], rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>💻</motion.span>
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.5 }}>☕</motion.span>
            <motion.span animate={{ y: [0, -40, 0], x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 0.6 }}>🚀</motion.span>
            <motion.span animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 0.3 }}>👾</motion.span>
          </motion.div>
        </div>

        {/* Big Bouncy Name Tag */}
        <motion.div 
          whileHover={{ scale: 1.15, rotate: -3 }}
          style={{ 
            fontWeight: '800', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Bricolage Grotesque', 
            background: '#ffd166', color: '#1a1a1a', padding: '1rem 3rem', 
            borderRadius: '30px', border: '5px solid var(--text-main)',
            boxShadow: '8px 8px 0px var(--text-main)',
            display: 'inline-block', textTransform: 'uppercase',
            position: 'relative'
          }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: 'linear' }} style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '2.5rem' }}>☀️</motion.div>
          {personalInfo.name.split(' ')[0]}
        </motion.div>
        
        {/* Huge Social Icons */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: <FiGithub />, link: personalInfo.github, color: '#ff7eb3', rotate: -5 },
            { icon: <FiLinkedin />, link: personalInfo.linkedin, color: '#06d6a0', rotate: 5 },
            { icon: <FiMail />, link: `mailto:${personalInfo.email}`, color: '#118ab2', rotate: -5 }
          ].map((social, idx) => (
            <motion.a 
              key={idx}
              href={social.link} 
              target="_blank" 
              rel="noreferrer" 
              animate={{ rotate: social.rotate }}
              whileHover={{ scale: 1.2, rotate: 0, backgroundColor: social.color, color: '#1a1a1a', boxShadow: `8px 8px 0px var(--text-main)` }}
              whileTap={{ scale: 0.9, boxShadow: `0px 0px 0px var(--text-main)` }}
              style={{ 
                fontSize: '2.5rem',
                color: '#1a1a1a', // Always dark icon for contrast
                width: '90px', height: '90px', borderRadius: '24px',
                border: '4px solid var(--text-main)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '6px 6px 0px var(--text-main)',
                background: social.color, // Solid background color so it's always visible!
                transition: 'all 0.2s ease'
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <p style={{ 
          color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: 800, 
          border: '3px dashed var(--text-main)', padding: '1rem 2rem', 
          borderRadius: '20px', background: 'var(--bg-main)',
          boxShadow: '4px 4px 0px var(--text-main)'
        }}>
          Built with 💻 & ☕ by {personalInfo.name} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
