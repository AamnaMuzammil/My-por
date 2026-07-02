import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  // Array of glowing accent colors for glass outline and highlights
  const colors = ['#ff7eb3', '#9d00ff', '#00ffd5', '#ff9f1c'];
  const randomColor = colors[project.id % colors.length];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1200,
        height: '100%'
      }}
    >
      <motion.div
        onClick={() => window.open(project.clickUrl, '_blank')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          scale: 1.03, 
          cursor: 'pointer',
          boxShadow: `0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px ${randomColor}33`
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`,
          background: 'rgba(20, 16, 32, 0.45)',
          backdropFilter: 'blur(16px)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* Glow overlay inside card */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${randomColor}11 0%, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Image Section */}
        <div style={{ height: '220px', overflow: 'hidden', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative', transform: "translateZ(30px)" }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.2, 1)' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Elegant Tag overlay */}
          <motion.div 
            style={{
              position: 'absolute', top: '15px', right: '15px',
              background: 'rgba(10, 10, 15, 0.65)', color: randomColor,
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 1rem', borderRadius: '50px',
              fontWeight: 700, border: `1px solid ${randomColor}55`,
              boxShadow: `0 0 10px ${randomColor}22`,
              textTransform: 'uppercase', fontSize: '0.75rem',
              transform: "translateZ(50px)",
              letterSpacing: '0.05em'
            }}
          >
            Project
          </motion.div>
        </div>
        
        {/* Content Section */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, transform: "translateZ(20px)", position: 'relative', zIndex: 2 }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: 'Outfit', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', transform: "translateZ(40px)" }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.8rem', flex: 1, lineHeight: 1.6, fontSize: '0.95rem', fontWeight: 400, transform: "translateZ(30px)" }}>
            {project.description}
          </p>
          
          {/* Technologies */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', transform: "translateZ(25px)" }}>
            {project.technologies.map((tech, index) => (
              <span key={index} style={{ 
                fontSize: '0.75rem', 
                padding: '0.3rem 0.7rem', 
                borderRadius: '50px', 
                background: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid rgba(255, 255, 255, 0.08)`,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}>
                {tech}
              </span>
            ))}
          </div>
          
          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.8rem', transform: "translateZ(35px)" }}>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()} 
              className="btn" 
              style={{ 
                padding: '0.6rem 1.2rem', 
                flex: 1, 
                fontSize: '0.85rem', 
                textAlign: 'center', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '0.5rem',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <FiGithub /> Code
            </a>
            {project.demo && project.demo !== '#' && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => e.stopPropagation()} 
                className="btn btn-primary" 
                style={{ 
                  padding: '0.6rem 1.2rem', 
                  flex: 1, 
                  fontSize: '0.85rem', 
                  background: randomColor, 
                  color: '#0d0b14',
                  fontWeight: 800,
                  textAlign: 'center', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  boxShadow: `0 5px 15px ${randomColor}33`
                }}
              >
                <FiExternalLink /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
