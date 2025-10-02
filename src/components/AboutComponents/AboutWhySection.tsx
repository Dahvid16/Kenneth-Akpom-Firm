import React from 'react'
import CountUpOnView from '../CountUpOnView';
import { motion } from 'framer-motion';
import { OnReveal } from '@/OnReveal';

const AboutWhySection = () => {
  return (
    <>
    {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-custom flex justify-center flex-col items-center">
          <div className="text-center mb-12">
            <motion.h2 className="text-heading mb-4"
            initial={{ opacity: 0, y: 75 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >Why Choose LegalCounsel?</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 md:w-full">
            <div className="text-center items-center flex flex-col">
              <OnReveal>
              <div className="bg-white/10 rounded-full flex items-center justify-center mb-4" style={{height: "4.5rem", width: "4.5rem"}}>
                <span className="text-2xl font-bold text-gold">
                  <CountUpOnView end={8}/>+
                </span>
              </div>
              </OnReveal>
              <OnReveal>
              <h4 className="text-lg font-semibold mb-2">Years of Experience</h4>
              </OnReveal>
              <OnReveal>
              <p className="text-white/80">
                Eight years of distinguished legal service, demonstrating expertise and reliability across a broad spectrum of Nigerian law.
              </p>
              </OnReveal>
            </div>
            <div className="text-center items-center flex flex-col">
              <OnReveal>
              <div className="bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4" style={{height: "4.5rem", width: "4.5rem"}}>
                <span className="text-xl font-bold text-gold"><CountUpOnView end={100}/>+</span>
              </div>
              </OnReveal>
              <OnReveal>
              <h4 className="text-lg font-semibold mb-2">Cases Handled</h4>
              </OnReveal>
              <OnReveal>
              <p className="text-white/80">
                Over one hundred cases expertly managed, consistently achieving favorable resolutions and upholding the highest standards of advocacy.
              </p>
              </OnReveal>
            </div>
            <div className="text-center items-center flex flex-col">
              <OnReveal>
              <div className="bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4" style={{height: "4.5rem", width: "4.5rem"}}>
                <span className="text-xl font-bold text-gold"><CountUpOnView end={99}/>%</span>
              </div>
              </OnReveal>
              <OnReveal>
              <h4 className="text-lg font-semibold mb-2">Client Satisfaction</h4>
              </OnReveal>
              <OnReveal>
              <p className="text-white/80">
                Exceptional client satisfaction, reflected in consistently positive feedback and enduring professional relationships.
              </p>
              </OnReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutWhySection