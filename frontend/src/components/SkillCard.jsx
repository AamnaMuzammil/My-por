import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const categoryConfig = {
  Frontend: { icon: <Layout size={30} />, color: '#ff7eb3', bg: 'rgba(255, 126, 179, 0.05)' },
  Backend: { icon: <Server size={30} />, color: '#9d00ff', bg: 'rgba(157, 0, 255, 0.05)' },
  Database: { icon: <Database size={30} />, color: '#00ffd5', bg: 'rgba(0, 255, 213, 0.05)' },
  Tools: { icon: <Wrench size={30} />, color: '#ff9f1c', bg: 'rgba(255, 159, 28, 0.05)' },
};

const SkillCard = ({ category, skills }) => {
  const config = categoryConfig[category] || { icon: <Layout size={30} />, color: '#ff7eb3', bg: 'rgba(255, 126, 179, 0.05)' };

  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        borderColor: `${config.color}55`,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${config.color}22` 
      }}
      style={{
        padding: '2.5rem 2rem',
        borderRadius: '20px',
        border: `1px solid rgba(255, 255, 255, 0.08)`,
        background: 'rgba(25, 20, 38, 0.45)',
        backdropFilter: 'blur(16px)',
        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2)`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.8rem',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Background large subtle icon */}
      <div style={{
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        opacity: 0.05,
        transform: 'scale(2.5)',
        color: config.color,
        pointerEvents: 'none'
      }}>
        {config.icon}
      </div>

      {/* Main animated icon */}
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.02)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: config.color, 
          border: `1px solid ${config.color}44`,
          boxShadow: `0 0 20px ${config.color}22`,
          zIndex: 1,
          flexShrink: 0
        }}
      >
        {config.icon}
      </motion.div>
      
      {/* Title */}
      <h3 style={{ 
        fontSize: '1.5rem', 
        fontFamily: 'Outfit',
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.02em',
        zIndex: 1,
        textAlign: 'center'
      }}>
        {category}
      </h3>
      
      {/* Skill badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', zIndex: 1, flex: 1, alignContent: 'flex-start' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.08, color: config.color, borderColor: `${config.color}55` }}
            style={{
              padding: '0.5rem 1.1rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: `1px solid rgba(255, 255, 255, 0.08)`,
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
