import { motion } from 'framer-motion';
import { skills } from '../data/content';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="premium-title" style={{ marginBottom: '1.5rem' }}>
            My Skills
          </h2>
          <motion.p 
            style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.05em' }}
          >
            Technologies I build with daily ⚡
          </motion.p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ height: '100%' }}
            >
              <SkillCard category={category} skills={skillList} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
