import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    if (window.location.hash === '#form') {
      const el = document.getElementById('form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const location = useLocation();
  const selectedService = location.state?.service;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: selectedService || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 816 201 6410', '+234 807 576 3840'],
      description: 'Call us during business hours for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['kennethakpom.associates@gmail.com', 'consultation@ka.associates.ng'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Suite 7, Ikotun-Ijegun Road, Ikotun', 'Lagos State, Nigeria'],
      description: 'Visit our office for in-person consultations'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [`Monday - Friday: 9:00 AM - 5:00 PM [GMT+1]`, `Saturday: 10:00 AM - 4:00 PM [GMT+1]`],
      description: '24/7 emergency legal support available'
    }
  ];

  const practiceAreas = [
    'Corporate Law',
    'Real Estate Law',
    'Family Law',
    'Employment Law',
    'Civil Litigation',
    'Intellectual Property',
    'Criminal Defense',
    'Legal Documentation',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg section-padding text-primary-foreground">
        <div className='after-bg'></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-display mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Have a legal question or need guidance? Reach out today for clear, professional advice and dedicated representation tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="container-custom flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] md:w-full">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-elegant text-center hover-lift">
                <info.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
  <section className="py-16 md:py-20 md:px-0 px-1 section-padd" id="form">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-heading mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="card-elegant text-center bg-green-50 border-green-200">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Legal Matter *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select a practice area</option>
                        {practiceAreas.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="form-textarea"
                      placeholder="Please describe your legal matter in detail..."
                      required
                    />
                  </div>
                  <p className="text-caption text-muted-foreground">
                    * Required fields. Your information is kept confidential and secure.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
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
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Office Location */}
              <div>
                <h3 className="text-subheading mb-4">Our Location</h3>
                <div className="card-elegant">
                  <div className="aspect-video bg-gray-medium rounded-lg mb-4 flex items-center justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63420.48769210025!2d3.2025128095414317!3d6.549377344841366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85422f38ae75%3A0x214e1e7d2b0ee983!2sIkotun%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1759296284816!5m2!1sen!2sng" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full text-muted-foreground"></iframe>
                  </div>
                  <h4 className="font-semibold mb-2">Kenneth Akpom & Associates Office</h4>
                  <p className="text-muted-foreground mb-2">
                    Suite 7, Ikotun-Ijegun Road, Ikotun<br />
                    Lagos State, Nigeria
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Located in the heart of Lagos business district, easily accessible by public transport.
                  </p>
                </div>
              </div>

            </div>
              {/* Emergency Contact */}
              <div className="card-elegant bg-primary text-primary-foreground mx-auto w-[95%] md:w-full">
                <h4 className="text-lg font-semibold mb-3">Emergency Legal Support</h4>
                <p className="mb-4 text-white/90">
                  Need urgent legal assistance? Our emergency hotline is available 24/7 
                  for critical legal matters.
                </p>
                <a 
                  href="tel:+2348031234567"
                  className="btn-gold"
                >
                  Call Emergency Line
                </a>
              </div>

              {/* Consultation Info */}
              <div className="card-elegant mx-auto w-[95%] md:w-full">
                <h4 className="text-lg font-semibold mb-3">Free Consultation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Initial 30-minute consultation is free</li>
                  <li>• Case evaluation and legal advice</li>
                  <li>• No obligation to proceed</li>
                  <li>• Confidential and professional</li>
                </ul>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;