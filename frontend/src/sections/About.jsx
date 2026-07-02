import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  const enhancedAbout = [
    {
      subtitle: "Academic Excellence",
      title: "Undergraduate at SSUET",
      desc: "Software Engineering student (2023–2027) maintaining a 4.0 GPA. Building a strong foundation in core computer science principles and software development life cycles.",
      color: "#ff7eb3"
    },
    {
      subtitle: "Professional Training",
      title: "Diploma from Aptech",
      desc: "Completed a professional diploma, gaining hands-on experience in building real-world web applications using HTML, CSS, JavaScript, PHP, and databases.",
      color: "#9d00ff"
    },
    {
      subtitle: "Core Focus",
      title: "Frontend & Backend",
      desc: "A strong passion for creating seamless user experiences and robust architectures. I love bridging the gap between design and engineering.",
      color: "#00ffd5"
    },
    {
      subtitle: "Career Objective",
      title: "Software Professional",
      desc: "My goal is to work in a professional environment, contribute effectively to innovative projects, and continuously grow as a full-stack developer.",
      color: "#ff9f1c"
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'rgba(13, 11, 20, 0.3)', backdropFilter: 'blur(5px)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Animated Header */}
        <div className="about-header">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="about-header-left"
          >
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <span style={{ fontSize: '0.6rem' }}>●</span> About Me
             </div>
             <a href="#contact" className="btn btn-secondary">
                Let's Connect <FiArrowRight />
             </a>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="about-header-right"
          >
            <h2 className="premium-title" style={{ marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
              My Journey
            </h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 400, color: 'var(--text-secondary)' }}>
              Discover my passion for <strong style={{ color: 'var(--text-main)', borderBottom: '2px solid var(--accent-pink)', paddingBottom: '2px' }}>Software Engineering</strong> and the path I am taking to build amazing digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Premium Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {enhancedAbout.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.01, 
                boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px ${item.color}15`,
                borderColor: `${item.color}55`
              }}
              className="journey-card"
              style={{
                borderLeftColor: item.color
              }}
            >
              
              <div className="journey-card-content">
                <p style={{ 
                  color: item.color,
                  fontSize: '0.75rem', 
                  marginBottom: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  fontWeight: 700
                }}>
                  {item.subtitle}
                </p>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem', fontFamily: 'Outfit', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 400, maxWidth: '85%' }}>
                  {item.desc}
                </p>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="journey-card-arrow"
                style={{ 
                  color: item.color
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
