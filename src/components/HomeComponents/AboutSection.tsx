import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { OnReveal } from '@/OnReveal';
import { motion } from 'framer-motion';
import CountUpOnView from '../CountUpOnView';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <motion.h2 className="text-heading mb-6"
                initial={{ opacity: 0, y: 75 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}
            >
              Trusted Legal Partner for Over 
              <span className="text-gradient-gold text-3xl"> <CountUpOnView end={8}/>+ Years</span>
            </motion.h2>
            <OnReveal>
            <p className="text-body mb-4">
              Kenneth Akpom & Associates has been serving clients across Nigeria with professional legal services since 2017. Our commitment to excellence, integrity, and client satisfaction has made us a trusted name in the Legal industry.
            </p>
            </OnReveal>
            <OnReveal>
            <p className="text-body">
              Our firm is built on the foundation of integrity, excellence, and unwavering commitment to justice. We pride ourselves on providing personalized legal solutions that protect our clients' interests while upholding the highest ethical standards of the legal profession.
            </p>
            </OnReveal>
            <div className="mt-12 w-64">
              <OnReveal>
              <Link to="/about" className="">
                <button className='flex items-center btn-primary w-64'>
                  Learn More About Us <FaArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              </OnReveal>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 animate-scale-in text-center">
            <OnReveal>
            <div className="flex items-center flex-col justify-center card-elegant gap-6 w-11/12 h-44">
              <h3 className="md:text-4xl text-3xl font-bold text-gold"><CountUpOnView end={100}/>%</h3>
              <p className="text-muted-foreground md:text-xl text-lg">Nigeria-wide coverage</p>
            </div>
            </OnReveal>
            <OnReveal>
            <div className="flex items-center flex-col justify-center card-elegant gap-6 w-11/12 h-44">
              <h3 className="md:text-4xl text-3xl font-bold text-gold"><CountUpOnView end={8}/>+</h3>
              <p className="text-muted-foreground md:text-xl text-lg">Years Experience</p>
            </div>
            </OnReveal>
            <OnReveal>
            <div className="flex items-center flex-col justify-center card-elegant gap-6 w-11/12 h-44">
              <h3 className="md:text-4xl text-3xl font-bold text-gold"><CountUpOnView end={99.9}/>%</h3>
              <p className="text-muted-foreground md:text-xl text-lg">Client Satisfaction</p>
            </div>
            </OnReveal>
            <OnReveal>
            <div className="flex items-center flex-col justify-center card-elegant gap-6 w-11/12 h-44">
              <h3 className="md:text-4xl text-3xl font-bold text-gold"><CountUpOnView end={24}/>/7</h3>
              <p className="text-muted-foreground md:text-xl text-lg">Legal Support</p>
            </div>
            </OnReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection