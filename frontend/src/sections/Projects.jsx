import { motion } from 'framer-motion';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(13, 11, 20, 0.45)', backdropFilter: 'blur(5px)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="premium-title">
            Featured Projects
          </h2>
          <motion.p 
            animate={{ y: [-5, 5, -5] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.05em' }}
          >
            Sleekly crafted digital solutions 🌌
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
