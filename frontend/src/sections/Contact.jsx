import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending... ⏳');
    
    const formToSubmit = new FormData(event.target);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    if (backendUrl) {
      // Use Custom Express Backend API
      try {
        const payload = {
          name: formToSubmit.get('name'),
          email: formToSubmit.get('email'),
          message: formToSubmit.get('message')
        };
        const response = await fetch(`${backendUrl}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus('Message sent successfully! 🚀');
          event.target.reset();
        } else {
          setStatus(`Failed to send message: ${data.error || 'Server error'} 😢`);
        }
      } catch (error) {
        console.error(error);
        setStatus('Error connecting to backend server. 😢');
      }
    } else {
      // Fallback to Web3Forms
      formToSubmit.append("access_key", "00bda0c2-e833-4d6c-b43b-e32effd128b6");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formToSubmit
        });

        const data = await response.json();

        if (data.success) {
          setStatus('Message sent successfully! 🚀');
          event.target.reset();
        } else {
          setStatus('Failed to send message. Check Access Key. 😢');
        }
      } catch (error) {
        console.error(error);
        setStatus('Error connecting to server. 😢');
      }
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'rgba(13, 11, 20, 0.45)', backdropFilter: 'blur(5px)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="premium-title">
            Get In Touch
          </h2>
          <motion.p 
            animate={{ y: [-3, 3, -3] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.05em' }}
          >
            I'd love to hear from you. Drop me a line! ✉️
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Contact Info Premium Glass */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Email */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                background: 'rgba(25, 20, 38, 0.45)', padding: '1.5rem',
                borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)',
                borderLeft: '4px solid var(--accent-pink)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ background: 'rgba(255, 126, 179, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--accent-pink)', border: '1px solid rgba(255, 126, 179, 0.2)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>Email</h4>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>{personalInfo.email}</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                background: 'rgba(25, 20, 38, 0.45)', padding: '1.5rem',
                borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)',
                borderLeft: '4px solid var(--accent-cyan)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ background: 'rgba(0, 255, 213, 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 255, 213, 0.2)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>Location</h4>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>Karachi, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Premium Glass */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              padding: '3rem 2.5rem', 
              borderRadius: '20px',
              background: 'rgba(25, 20, 38, 0.45)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>YOUR NAME</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  required 
                  style={{ 
                    width: '100%', padding: '0.9rem 1.2rem', borderRadius: '50px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.02)', 
                    color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit',
                    fontSize: '0.95rem', fontWeight: 500,
                    transition: 'all 0.3s'
                  }} 
                  onFocus={(e) => { e.target.style.boxShadow = '0 0 15px rgba(255, 126, 179, 0.15)'; e.target.style.borderColor = 'var(--accent-pink)'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>YOUR EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  required 
                  style={{ 
                    width: '100%', padding: '0.9rem 1.2rem', borderRadius: '50px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.02)', 
                    color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit',
                    fontSize: '0.95rem', fontWeight: 500,
                    transition: 'all 0.3s'
                  }} 
                  onFocus={(e) => { e.target.style.boxShadow = '0 0 15px rgba(0, 255, 213, 0.15)'; e.target.style.borderColor = 'var(--accent-cyan)'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>MESSAGE</label>
                <textarea 
                  rows="4" 
                  name="message"
                  placeholder="Hey Amna, let's work together!"
                  required 
                  style={{ 
                    width: '100%', padding: '1rem 1.2rem', borderRadius: '16px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.02)', 
                    color: 'var(--text-main)', outline: 'none', fontFamily: 'inherit', resize: 'vertical',
                    fontSize: '0.95rem', fontWeight: 500,
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => { e.target.style.boxShadow = '0 0 15px rgba(157, 0, 255, 0.15)'; e.target.style.borderColor = 'var(--accent-purple)'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn btn-primary"
                style={{ 
                  width: '100%', marginTop: '1rem', padding: '1rem',
                  color: '#0d0b14', border: 'none',
                  borderRadius: '50px', fontSize: '1rem', fontWeight: 800,
                  textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                  boxShadow: '0 5px 15px rgba(255, 126, 179, 0.3)',
                  background: 'var(--accent-gradient)'
                }}
              >
                Send Message <Send size={18} />
              </motion.button>
              
              {/* Status Message */}
              {status && (
                <div style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 600, fontSize: '0.95rem', color: status.includes('success') ? 'var(--accent-cyan)' : 'var(--accent-pink)' }}>
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
