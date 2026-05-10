import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const categoryConfig = {
  Frontend: { icon: <Layout size={40} />, color: '#ff7eb3', bg: 'rgba(255, 126, 179, 0.1)' },
  Backend: { icon: <Server size={40} />, color: '#ffd166', bg: 'rgba(255, 209, 102, 0.1)' },
  Database: { icon: <Database size={40} />, color: '#06d6a0', bg: 'rgba(6, 214, 160, 0.1)' },
  Tools: { icon: <Wrench size={40} />, color: '#118ab2', bg: 'rgba(17, 138, 178, 0.1)' },
};

const SkillCard = ({ category, skills }) => {
  const config = categoryConfig[category] || { icon: <Layout size={40} />, color: '#ff7eb3', bg: 'rgba(255, 126, 179, 0.1)' };

  return (
    <motion.div
      whileHover={{ y: -10, x: -5, boxShadow: `8px 8px 0px ${config.color}` }}
      style={{
        padding: '2rem',
        borderRadius: '24px',
        border: `3px solid ${config.color}`,
        background: 'var(--bg-main)',
        boxShadow: `4px 4px 0px ${config.color}`,
        transition: 'all 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Background large subtle icon */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        opacity: 0.1,
        transform: 'scale(3)',
        color: config.color,
      }}>
        {config.icon}
      </div>

      {/* Main animated icon */}
      <motion.div 
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          background: config.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1a1a', 
          border: '3px solid var(--text-main)',
          boxShadow: '4px 4px 0px var(--text-main)',
          zIndex: 1,
          flexShrink: 0
        }}
      >
        {config.icon}
      </motion.div>
      
      {/* Title */}
      <h3 style={{ 
        fontSize: '2rem', 
        fontFamily: 'Outfit',
        fontWeight: 800,
        color: config.color,
        letterSpacing: '1px',
        textShadow: '1px 1px 0px var(--bg-card)',
        zIndex: 1,
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>
        {category}
      </h3>
      
      {/* Skill badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', zIndex: 1, flex: 1, alignContent: 'flex-start' }}>
        {skills.map((skill, index) => {
          const randomRotate = index % 2 === 0 ? 2 : -2;
          
          return (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.15, rotate: randomRotate * 2 }}
              style={{
                padding: '0.6rem 1.2rem',
                background: config.bg,
                border: `2px solid ${config.color}`,
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--text-main)',
                cursor: 'pointer',
                transform: `rotate(${randomRotate}deg)`
              }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillCard;
