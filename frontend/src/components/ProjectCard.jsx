import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  // Array of bright colors for the cards
  const colors = ['#ff7eb3', '#ffd166', '#06d6a0', '#118ab2'];
  const randomColor = colors[project.id % colors.length];

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: '4px solid var(--text-main)',
        boxShadow: `8px 8px 0px ${randomColor}`,
        background: 'var(--bg-card)',
        transition: 'all 0.3s ease',
        height: '100%'
      }}
    >
      {/* Image Section */}
      <div style={{ height: '220px', overflow: 'hidden', borderBottom: '4px solid var(--text-main)', position: 'relative' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Playful sticker overlay */}
        <motion.div 
          animate={{ rotate: [10, -10, 10] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          style={{
            position: 'absolute', top: '10px', right: '10px',
            background: randomColor, color: '#1a1a1a',
            padding: '0.4rem 1rem', borderRadius: '20px',
            fontWeight: 800, border: '2px solid var(--text-main)',
            boxShadow: '2px 2px 0px var(--text-main)',
            textTransform: 'uppercase', fontSize: '0.8rem'
          }}
        >
          Featured
        </motion.div>
      </div>
      
      {/* Content Section */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, background: 'var(--bg-main)' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'Outfit', fontWeight: 800, textTransform: 'uppercase' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6, fontWeight: 500 }}>
          {project.description}
        </p>
        
        {/* Technologies */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
          {project.technologies.map((tech, index) => (
            <span key={index} style={{ 
              fontSize: '0.85rem', 
              padding: '0.4rem 0.8rem', 
              borderRadius: '8px', 
              background: 'transparent',
              border: `2px solid ${randomColor}`,
              color: 'var(--text-main)',
              fontWeight: 700
            }}>
              {tech}
            </span>
          ))}
        </div>
        
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={project.github} className="btn btn-secondary" style={{ padding: '0.6rem 1rem', flex: 1, fontSize: '0.9rem' }}>
            <FiGithub /> Code
          </a>
          <a href={project.demo} className="btn btn-primary" style={{ padding: '0.6rem 1rem', flex: 1, fontSize: '0.9rem', background: randomColor }}>
            <FiExternalLink /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
