import { motion } from 'framer-motion';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem' }}>
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                borderLeft: '4px solid var(--accent-pink)',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--accent-pink)', fontWeight: 500 }}>{exp.company}</h4>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontWeight: 500, background: 'var(--bg-main)', padding: '0.4rem 1rem', borderRadius: '20px', height: 'fit-content' }}>
                  {exp.period}
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
