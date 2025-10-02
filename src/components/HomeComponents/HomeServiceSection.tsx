import React from 'react'
import { Link } from 'react-router-dom';
import { Shield, Users, Award } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { OnReveal } from '@/OnReveal';

const HomeServiceSection = () => {

  const services = [
    {
      title: 'Corporate Law',
      description: 'Comprehensive business legal services including incorporation, contracts, and compliance.',
      icon: Shield
    },
    {
      title: 'Real Estate Law',
      description: 'Property transactions, land disputes, and real estate documentation services.',
      icon: Users
    },
    {
      title: 'Family Law',
      description: 'Divorce, custody, adoption, and other family-related legal matters.',
      icon: Award
    }
  ];

  return (
    <section className="py-16 md:py-20">
            <div className="container-custom flex justify-center flex-col items-center">
              <div className="text-center mb-12">
                <motion.h2 className="text-heading mb-4"
                initial={{ opacity: 0, y: 75 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}
                >Our Legal Services</motion.h2>
                <OnReveal>
                <p className="text-body max-w-2xl mx-auto">
                  We provide expert Legal services tailored to meet the diverse needs of individuals, businesses, and organizations throughout Nigeria ensuring the highest standards of professional excellence and client satisfaction.
                </p>
                </OnReveal>
              </div>
              <div className="grid grid-cols-1 md:w-full w-11/12 md:grid-cols-3 gap-10">
                {services.map((service, index) => (
                <OnReveal>
                  <div key={index} className="card-service animate-fade-in h-72 flex flex-col cursor-default">
                    <service.icon className="h-12 w-12 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3 h-8">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 h-20">{service.description}</p>
                    <Link 
                      to="/services" 
                      className="text-gold hover:text-gold-dark transition-colors inline-flex items-center"
                    >
                      Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </OnReveal>
                ))}
              </div>
              <div className="text-center mt-12">
                <OnReveal>
                <Link to="/services" className="">
                <button className='btn-outline'>
                  View All Services
                </button>
                </Link>
                </OnReveal>
              </div>
            </div>
          </section>
  )
}

export default HomeServiceSection