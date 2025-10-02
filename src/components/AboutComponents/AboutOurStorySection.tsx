import React from 'react'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { OnReveal } from '@/OnReveal'

const AboutOurStorySection = () => {
  return (
    <>
    {/* Our Story Section */}
      <section className="py-16 md:py-16 px-1">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up text-justify">
              <motion.h2 className="text-heading tracking-wide mb-6"
              initial={{ opacity: 0, y: 75 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              >Our Story</motion.h2>
              <OnReveal>
              <p className="text-body mb-4">
                Established in 2018, our firm was born from the vision and life experience of a single, dedicated lawyer who entered the legal profession later in life. After decades of gaining wisdom and expertise across various industries, he chose to pursue law as a calling, bringing a unique perspective and deep empathy to every client relationship.
              </p>
              </OnReveal>
              <OnReveal>
              <p className="text-body mb-4">
                Our journey is defined by a commitment to personal service, integrity, and excellence. We believe that every client deserves not only expert legal guidance, but also understanding and respect. From our humble beginnings, we have grown through trust, professionalism, and a genuine desire to make a positive impact in the lives of those we serve.
              </p>
              </OnReveal>
              <OnReveal>
              <p className="text-body">
                Today, our practice stands as a testament to perseverance, lifelong learning, and the power of experience. We continue to uphold the values that inspired our founding, striving to deliver outstanding results and meaningful support to every client.
              </p>
              </OnReveal>
            </div>
            <div className="card-elegant animate-scale-in text-justify">
              <OnReveal>
              <div className="text-center mb-6">
                <Users className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="text-subheading mb-2">Meet Our Principal</h3>
              </div>
              </OnReveal>
              <div className="space-y-3">
                <OnReveal>
                <h4 className="text-xl font-semibold">Barrister Kenneth I. Akpom</h4>
                </OnReveal>
                <OnReveal>
                <p className="text-muted-foreground">
                  LL.B (Hons), B.L
                </p>
                </OnReveal>
                <OnReveal>
                <p className="text-body">
                  Barrister Kenneth I. Akpom is the heart and soul of our firm. Graduating as an elderly gentleman in 2018, he brings a wealth of life experience and a deep sense of purpose to his legal practice. Before embracing law, he excelled in various fields, gaining invaluable insights and skills that now enrich his approach to every case.
                </p>
                </OnReveal>
                <OnReveal>
                <div className="space-y-1">
                  <p className="text-sm"><span className='text-base font-bold'>Education:</span> Olabisi Onagbanjo University (LL.B), Nigerian Law School</p>
                  <p className="text-sm"><span className='text-base font-bold'>Bar Admission:</span> 2018</p>
                  <p className="text-sm"><span className='text-base font-bold'>Specializations:</span> Civil Litigation, Property Law, General Legal Advisory</p>
                </div>
                </OnReveal>
                <OnReveal>
                <p className="text-body">
                  Known for his integrity, and unwavering dedication, Barrister Kenneth I. Akpom is committed to guiding clients through their legal challenges with wisdom and care. His journey is a testament to the value of lifelong learning and the impact one person can make through service.
                </p>
                </OnReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutOurStorySection