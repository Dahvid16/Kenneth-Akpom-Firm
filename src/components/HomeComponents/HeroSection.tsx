import { OnReveal } from '@/OnReveal';
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
        <section className='hero-bg section-padding text-primary-foreground relative hero-bg::after'>
            <div className='after-bg'></div>
            <div className="container-custom flex items-center justify-center hero-image relative z-10">
            <div className="animate-fade-in text-center">
                <motion.h1 className="text-display mb-6 l"
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                >
                    Professional Legal Services <span className="text-gradient-gold block mt-3">You Can Trust</span>
                </motion.h1>
                <motion.p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                >
                    Experienced legal counsel providing comprehensive services across Nigeria. We protect your interests with integrity, expertise, and dedication.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <OnReveal>
                    <Link to="/contact">
                        <button className='btn-gold flex gap-2 items-center text-xl h-14'>
                        For Consultation <FaArrowRight className="h-4 w-5 " />
                        </button>
                    </Link>
                    </OnReveal>
                    <OnReveal>
                    <Link to="/services">
                        <button className="btn-outline border-white text-white hover:bg-white hover:text-primary text-xl h-14">
                        Our Services
                        </button>
                    </Link>
                    </OnReveal>
                </div>
            </div>
        </div>
      </section>
  )
}

export default HeroSection