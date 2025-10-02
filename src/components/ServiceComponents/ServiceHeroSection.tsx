import React from 'react'
import { motion } from 'framer-motion'
import { OnReveal } from '@/OnReveal'

const ServiceHeroSection = () => {
  return (
    <>
    {/* Hero Section */}
      <section className="hero-bg section-padding text-primary-foreground">
        <div className='after-bg'></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 className="text-display mb-6"
            initial={{ opacity: 0, y: 75 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
              Our Legal <span className="text-gradient-gold">Services</span>
            </motion.h1>
            <OnReveal>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to meet your personal and business needs 
              across all areas of Nigerian law.
            </p>
            </OnReveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceHeroSection