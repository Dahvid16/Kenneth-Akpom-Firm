import React from 'react'
import { motion } from 'framer-motion'
import { OnReveal } from '@/OnReveal'

const ServiceProcessSection = () => {
  return (
    <>
    {/* Process Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Our Process</h2>
            <OnReveal>
            <p className="text-body max-w-2xl mx-auto">
              We follow a structured approach to ensure the best outcomes for our clients.
            </p>
            </OnReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold/80 text-gold-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Initial Consultation</h4>
              <p className="text-white/90 text-sm">
                We listen to your needs and assess your legal situation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/80 text-gold-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2 text-lg">Case Analysis</h4>
              <p className="text-white/90 text-sm">
                Thorough review and analysis of your legal matter.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/80 text-gold-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Strategy Development</h4>
              <p className="text-white/90 text-sm">
                Create a tailored legal strategy for your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/80 text-gold-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Implementation</h4>
              <p className="text-white/90 text-sm">
                Execute the strategy with dedicated support throughout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceProcessSection