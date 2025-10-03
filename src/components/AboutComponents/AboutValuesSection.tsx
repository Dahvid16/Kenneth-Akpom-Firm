import React from 'react'
import { Shield, Award, Heart, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { OnReveal } from '@/OnReveal';

const AboutValuesSection = () => {

    const values = [
    {
      title: 'Integrity',
      description: 'Our practice is founded on uncompromising integrity, ensuring that every action and decision reflects the highest ethical standards.',
      icon: Shield
    },
    {
      title: 'Excellence',
      description: 'We are dedicated to delivering superior legal services through meticulous attention to detail, continuous learning, and a commitment to outstanding results.',
      icon: Award
    },
    {
      title: 'Client-First',
      description: 'We place our clients at the center of our practice, providing personalized counsel and advocacy tailored to their unique needs and objectives.',
      icon: Heart
    },
    {
      title: 'Justice',
      description: 'We uphold the principles of justice and equality, steadfastly advocating for fair treatment and the protection of rights within the legal system.',
      icon: Scale
    }
  ];

  return (
    <>
    {/* Our Values Section */}
      <section className="py-16 md:py-16 bg-gray-light">
        <div className="container-custom flex justify-center flex-col items-center">
          <div className="text-center mb-12">
            <motion.h2 className="text-heading mb-4"
            initial={{ opacity: 0, y: 75 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >Our Core Values</motion.h2>
            <OnReveal>
            <p className="text-body max-w-2xl mx-auto">
              These fundamental principles guide every aspect of our practice and client relationships.
            </p>
            </OnReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-10/12 md:w-full">
            {values.map((value, index) => (
              <OnReveal>
              <div key={index} className="card-elegant text-center hover-lift h-80 md:h-full">
                <value.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <motion.h3 className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 75 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                >{value.title}</motion.h3>
                <motion.p className="text-muted-foreground"
                initial={{ opacity: 0, y: 75 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                >{value.description}</motion.p>
              </div>
              </OnReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutValuesSection