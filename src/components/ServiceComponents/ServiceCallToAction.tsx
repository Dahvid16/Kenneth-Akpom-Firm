import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { OnReveal } from '@/OnReveal';

const ServiceCallToAction = () => {
  return (
    <>
    {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="container-custom text-center">
          <motion.h2 className="text-heading mb-4"
          initial={{ opacity: 0, y: 75 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          >Need Legal Assistance?</motion.h2>
          <OnReveal>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't navigate any legal challenges alone. Contact us today for professional legal counsel and representation you can trust.
          </p>
          </OnReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <OnReveal>
            <Link to="/contact">
            <button className="btn-gold flex p-3 items-center gap-2">
              Schedule Consultation <FaArrowRight className='text-xs'/>
            </button>
            </Link>
            </OnReveal>
            <OnReveal>
            <a href="tel:+234 816 201 6410">
              <button className="btn-outline border-black text-black hover:bg-black hover:text-blue-100 flex items-center justify-center p-[0.6rem] gap-2">
                <FaPhone/> Call Now: +234 816 201 6410
              </button>
            </a>
            </OnReveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceCallToAction