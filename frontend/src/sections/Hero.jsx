import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
  return (
    <section className="section-padding" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Floating Background Elements */}
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} style={{ position: 'absolute', top: '15%', left: '10%', fontSize: '4rem', opacity: 0.5 }}>⭐</motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: 'absolute', bottom: '20%', right: '15%', fontSize: '5rem', opacity: 0.5 }}>🚀</motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: 'absolute', top: '30%', right: '25%', width: '30px', height: '30px', borderRadius: '50%', background: '#ff7eb3', opacity: 0.5 }} />

      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div 
            whileHover={{ rotate: -5, scale: 1.1 }}
            style={{ 
              display: 'inline-block', background: '#ffd166', color: '#1a1a1a', 
              padding: '0.5rem 1.5rem', borderRadius: '20px', fontWeight: 800, 
              border: '3px solid var(--text-main)', boxShadow: '4px 4px 0px var(--text-main)',
              marginBottom: '1.5rem', transform: 'rotate(-2deg)'
            }}
          >
            HELLO WORLD! 👋
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 8vw, 5rem)', 
            fontWeight: 800, 
            marginBottom: '1rem', 
            lineHeight: 1,
            textTransform: 'uppercase',
            textShadow: '4px 4px 0px #ff7eb3',
            WebkitTextStroke: '1px var(--text-main)'
          }}>
            {personalInfo.name}
          </h1>
          
          <h3 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            color: '#06d6a0',
            textTransform: 'uppercase',
            fontFamily: 'Outfit'
          }}>
            {personalInfo.title}
          </h3>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem', 
            maxWidth: '500px', 
            lineHeight: 1.6,
            fontWeight: 600
          }}>
            {personalInfo.tagline}
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary" style={{ background: '#06d6a0' }}>Contact Me</a>
          </div>
        </motion.div>

        {/* Avatar/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              aspectRatio: '1',
              borderRadius: '32px',
              background: '#118ab2',
              border: '6px solid var(--text-main)',
              boxShadow: '15px 15px 0px #ff7eb3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              transform: 'rotate(2deg)'
            }}
          >
            <img 
              src={personalInfo.avatar} 
              alt="Developer Avatar" 
              style={{ width: '90%', height: '90%', objectFit: 'contain' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
