import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/Images/KKA_Logo.png"
import {} from 'react-icons'
import { FaEnvelope, FaFacebookF, FaMapMarker, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { OnReveal } from '@/OnReveal';
import { Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20" style={{borderRadius: "50px 50px 0 0"}}>
      <OnReveal>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient-gold">Get In Touch</h3>                   
            {isSubmitted ? (
              <div className="card-elegant text-center bg-green-50 border-green-200">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700 mb-4">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
              <OnReveal>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-input bg-white/10 border-white/20 text-primary-foreground placeholder-white/70"
                  required
                />
              </div>
              </OnReveal>
              <OnReveal>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-input bg-white/10 border-white/20 text-primary-foreground placeholder-white/70"
                  required
                />
              </div>
              </OnReveal>
              <OnReveal>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-textarea bg-white/10 border-white/20 text-primary-foreground placeholder-white/70"
                  required
                />
              </div>
              </OnReveal>
              <OnReveal>
              <button type="submit" disabled={isSubmitting}className="btn-gold flex items-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                  </>
                )}
              </button>
              </OnReveal>
            </form>
            )}
          </div>

          {/* Contact Information & Links */}
          <div className="space-y-8">
          <OnReveal>
            {/* Logo and Description */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img className="h-12 w-12 text-gold" src={Logo} alt='KKA_Logo' />
                <div className="flex flex-col leading-tight">
                  <span className="text-heading text-lg font-bold tracking-wide">
                    Kenneth Akpom<div className='flex-nowrap text-lg tracking-widerr'> & Associates</div>
                  </span>
                </div>
              </Link>
              <p className="text-body text-white/80">
                Professional legal services with integrity, expertise, and dedication 
                to serving our clients' best interests.
              </p>
            </div>
            </OnReveal>

            <OnReveal>
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>
                  +234 816 201 6410
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>
                  <a href="mailto:kennethakpom.associates@gmail.com" target="_blank" rel="noopener noreferrer">
                    kennethakpom.associates@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarker className="h-5 w-5 text-gold" />
                <span className='cursor-pointer hover:text-gold transition-all duration-300'>Lagos, Nigeria</span>
              </div>
            </div>
            </OnReveal>

            <OnReveal>
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-gold hover:text-primary transition-all duration-300" aria-label='Visit our FaceBook Page'>
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://wa.me/2348162016410?text=Good%20Day%20Sir.%20I%20got%20your%20number%20from%20your%20website.%20I.." className="p-3 bg-white/10 rounded-lg hover:bg-gold hover:text-primary transition-all duration-300" aria-label='Visit our Whatsapp Page'>
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
            </OnReveal>
          </div>
        </div>

        <OnReveal>
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-white/70">
            © 2025 Kenneth Akpom & Associates. All rights reserved.
            <Link to="/privacy" className="hover:text-gold transition-all duration-300 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-gold transition-all duration-300 ml-1">Terms of Service</Link>
          </p>
          <p className='hidden font-bold italic text-lg'>Dahvidweb</p>
        </div>
        </OnReveal>
      </div>
      </OnReveal>
    </footer>
  );
};

export default Footer;