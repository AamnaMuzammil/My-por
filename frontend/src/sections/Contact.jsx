import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending... ⏳');
    
    // We are switching to Web3Forms because Google App Passwords are too strict!
    const formToSubmit = new FormData(event.target);
    
    // PUT YOUR WEB3FORMS ACCESS KEY HERE 👇
    formToSubmit.append("access_key", "00bda0c2-e833-4d6c-b43b-e32effd128b6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! 🚀');
        event.target.reset(); // clear form
      } else {
        setStatus('Failed to send message. Check Access Key. 😢');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to server. 😢');
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="cartoon-title" style={{ boxShadow: '6px 6px 0px #118ab2', textShadow: '3px 3px 0px #118ab2' }}>
            Get In Touch!
          </h2>
          <motion.p 
            animate={{ rotate: [1, -1, 1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
            style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 700 }}
          >
            I'd love to hear from you. Drop me a line! 👇
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Contact Info Neo-Brutalist */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Email */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2, x: 10 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                background: 'var(--bg-main)', padding: '1.5rem',
                borderRadius: '16px', border: '3px solid #ff7eb3',
                boxShadow: '6px 6px 0px #ff7eb3',
                cursor: 'pointer'
              }}
            >
              <div style={{ background: '#ff7eb3', padding: '1rem', borderRadius: '12px', color: '#1a1a1a', border: '2px solid var(--text-main)' }}>
                <Mail size={32} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', color: '#ff7eb3' }}>Email</h4>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{personalInfo.email}</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2, x: 10 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                background: 'var(--bg-main)', padding: '1.5rem',
                borderRadius: '16px', border: '3px solid #06d6a0',
                boxShadow: '6px 6px 0px #06d6a0',
                cursor: 'pointer'
              }}
            >
              <div style={{ background: '#06d6a0', padding: '1rem', borderRadius: '12px', color: '#1a1a1a', border: '2px solid var(--text-main)' }}>
                <MapPin size={32} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', color: '#06d6a0' }}>Location</h4>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Karachi, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Neo-Brutalist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            style={{ 
              padding: '3rem 2.5rem', 
              borderRadius: '24px',
              background: 'var(--bg-main)',
              border: '4px solid #118ab2',
              boxShadow: '10px 10px 0px #118ab2',
              position: 'relative'
            }}
          >
            {/* Small decorative elements */}
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '3rem' }}>✨</motion.div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem' }}>YOUR NAME</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  required 
                  style={{ 
                    width: '100%', padding: '1rem', borderRadius: '12px', 
                    border: '3px solid var(--text-main)', background: 'var(--bg-secondary)', 
                    color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit',
                    fontSize: '1.1rem', fontWeight: 600,
                    transition: 'all 0.3s'
                  }} 
                  onFocus={(e) => { e.target.style.boxShadow = '4px 4px 0px #ff7eb3'; e.target.style.borderColor = '#ff7eb3'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'var(--text-main)'; }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem' }}>YOUR EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  required 
                  style={{ 
                    width: '100%', padding: '1rem', borderRadius: '12px', 
                    border: '3px solid var(--text-main)', background: 'var(--bg-secondary)', 
                    color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit',
                    fontSize: '1.1rem', fontWeight: 600,
                    transition: 'all 0.3s'
                  }} 
                  onFocus={(e) => { e.target.style.boxShadow = '4px 4px 0px #ffd166'; e.target.style.borderColor = '#ffd166'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'var(--text-main)'; }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem' }}>MESSAGE</label>
                <textarea 
                  rows="4" 
                  name="message"
                  placeholder="Hey Amna, let's work together!"
                  required 
                  style={{ 
                    width: '100%', padding: '1rem', borderRadius: '12px', 
                    border: '3px solid var(--text-main)', background: 'var(--bg-secondary)', 
                    color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit', resize: 'vertical',
                    fontSize: '1.1rem', fontWeight: 600,
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => { e.target.style.boxShadow = '4px 4px 0px #06d6a0'; e.target.style.borderColor = '#06d6a0'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'var(--text-main)'; }}
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                style={{ 
                  width: '100%', marginTop: '1rem', padding: '1.2rem',
                  background: '#118ab2', color: '#fff', border: '3px solid var(--text-main)',
                  borderRadius: '12px', fontSize: '1.2rem', fontWeight: 800,
                  textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                  boxShadow: '4px 4px 0px var(--text-main)'
                }}
              >
                Send Message <Send size={24} />
              </motion.button>
              
              {/* Status Message */}
              {status && (
                <div style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 800, fontSize: '1.1rem', color: status.includes('success') ? '#06d6a0' : '#ff7eb3' }}>
                  {status}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
