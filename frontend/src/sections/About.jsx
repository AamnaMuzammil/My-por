import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  const enhancedAbout = [
    {
      subtitle: "Academic Excellence",
      title: "Undergraduate at SSUET",
      desc: "Software Engineering student (2023–2027) maintaining a 4.0 GPA. Building a strong foundation in core computer science principles and software development life cycles.",
      color: "#ff7eb3",
      rotate: "-1deg"
    },
    {
      subtitle: "Professional Training",
      title: "Diploma from Aptech",
      desc: "Completed a professional diploma, gaining hands-on experience in building real-world web applications using HTML, CSS, JavaScript, PHP, and databases.",
      color: "#ffd166",
      rotate: "1deg"
    },
    {
      subtitle: "Core Focus",
      title: "Frontend & Backend",
      desc: "A strong passion for creating seamless user experiences and robust architectures. I love bridging the gap between design and engineering.",
      color: "#06d6a0",
      rotate: "-1.5deg"
    },
    {
      subtitle: "Career Objective",
      title: "Software Professional",
      desc: "My goal is to work in a professional environment, contribute effectively to innovative projects, and continuously grow as a full-stack developer.",
      color: "#118ab2",
      rotate: "1.5deg"
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-main)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Animated Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '5rem', alignItems: 'flex-start' }}>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ flex: '1 1 250px' }}
          >
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffd166', marginBottom: '1.5rem', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase' }}>
                <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>✨</motion.span> About Me
             </div>
             <a href="#contact" className="btn btn-secondary">
                Let's Connect <FiArrowRight />
             </a>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ flex: '2 1 500px' }}
          >
            <h2 className="cartoon-title" style={{ boxShadow: '6px 6px 0px #06d6a0', textShadow: '3px 3px 0px #06d6a0', marginBottom: '1rem', transform: 'rotate(1deg)' }}>
              My Journey 🚀
            </h2>
            <p style={{ fontSize: '1.4rem', lineHeight: 1.6, fontWeight: 500, color: 'var(--text-secondary)' }}>
              Discover my passion for <strong style={{ color: 'var(--text-main)', borderBottom: '3px solid #ff7eb3' }}>Software Engineering</strong> and the path I am taking to build amazing digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Playful Colorful List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {enhancedAbout.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', bounce: 0.4 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 0,
                boxShadow: `10px 10px 0px var(--text-main)`
              }}
              style={{
                border: '4px solid var(--text-main)',
                borderRadius: '24px',
                padding: '2.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                backgroundColor: item.color,
                color: '#1a1a1a', // Dark text for bright backgrounds
                transform: `rotate(${item.rotate})`,
                boxShadow: `6px 6px 0px var(--text-main)`,
                transition: 'transform 0.2s ease',
                position: 'relative'
              }}
            >
              
              <div style={{ flex: '1 1 600px' }}>
                <p style={{ 
                  backgroundColor: '#1a1a1a', color: '#fff', 
                  display: 'inline-block', padding: '0.4rem 1rem', 
                  borderRadius: '20px', fontSize: '0.85rem', 
                  marginBottom: '1rem', textTransform: 'uppercase', 
                  letterSpacing: '1px', fontWeight: 800,
                  border: '2px solid var(--text-main)'
                }}>
                  {item.subtitle}
                </p>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', fontFamily: 'Bricolage Grotesque', textTransform: 'uppercase' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 600, maxWidth: '85%' }}>
                  {item.desc}
                </p>
              </div>
              
              <motion.div 
                whileHover={{ rotate: 45, scale: 1.2 }}
                style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', 
                  backgroundColor: '#1a1a1a', border: '3px solid var(--text-main)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.8rem',
                  boxShadow: `4px 4px 0px var(--text-main)`,
                  zIndex: 5
                }}
              >
                <FiArrowRight />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
