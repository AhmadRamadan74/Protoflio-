import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean; message?: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    try {
      // In a real scenario, you'd send this data to a backend service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just show a success message
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I\'ll get back to you as soon as possible.'
      });
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Contact</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-detail">
                <h4>Email</h4>
                <a href="mailto:ramadan.fcai@gmail.com">ramadan.fcai@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-detail">
                <h4>Phone</h4>
                <a href="tel:+201277665911">+20 1277665911</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-detail">
                <h4>Location</h4>
                <p>Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="I'd like to discuss a project"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hello Ahmad, I'm reaching out because..."
                rows={5}
              ></textarea>
            </div>
            
            {submitStatus && (
              <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;