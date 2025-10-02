import React from 'react'
import { motion } from 'framer-motion'
import { OnReveal } from '@/OnReveal'

const HeroSection = () => {
  return (
    <>
    {/* Hero Section */}
      <section className="hero-bg section-padding text-primary-foreground">
        <div className='after-bg'></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <motion.h1 className="text-display mb-6"
            initial={{ opacity: 0, y: 75 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
              About <span className="text-gradient-gold">LegalCounsel</span>
            </motion.h1>
            <OnReveal>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Your trusted legal partner with over 8 years of experience serving clients across Nigeria with dedication, expertise, and unwavering commitment to justice.
            </p>
            </OnReveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection