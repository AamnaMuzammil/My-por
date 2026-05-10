import { motion } from 'framer-motion';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="cartoon-title" style={{ boxShadow: '6px 6px 0px #ffd166', textShadow: '3px 3px 0px #ffd166' }}>
            Featured Projects
          </h2>
          <motion.p 
            animate={{ rotate: [-1, 1, -1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
            style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 700 }}
          >
            Some of my recent work 🚀
          </motion.p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
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
