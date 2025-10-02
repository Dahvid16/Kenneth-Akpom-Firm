import React from 'react'
import { Award, Target } from 'lucide-react';
import { OnReveal } from '@/OnReveal';

const AboutMissionSection = () => {
  return (
    <>
    {/* Mission & Vision Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom flex justify-center flex-col items-center text-justify">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-11/12 md:m-full">
          <OnReveal>
            <div className="card-elegant hover-glow">
              <Target className="h-12 w-12 text-gold mb-6" />
              <OnReveal>
              <h3 className="text-subheading mb-4">Our Mission</h3>
              </OnReveal>
              <OnReveal>
              <p className="text-body">
                Our mission is to empower individuals and businesses through insightful legal counsel, unwavering advocacy, and a personalized approach to every case. We are dedicated to guiding our clients with clarity and compassion, striving to resolve their legal challenges and protect their interests with the utmost diligence and respect.
              </p>
              </OnReveal>
            </div>
            </OnReveal>
            <OnReveal>
            <div className="card-elegant hover-glow">
              <Award className="h-12 w-12 text-gold mb-6" />
              <OnReveal>
              <h3 className="text-subheading mb-4">Our Vision</h3>
              </OnReveal>
              <OnReveal>
              <p className="text-body">
                Our vision is to be recognized for delivering legal solutions that inspire confidence, promote justice, and foster positive change. We aim to set a benchmark for excellence, integrity, and client-centered service, making a lasting impact in the legal profession and the communities we serve.
              </p>
              </OnReveal>
            </div>
            </OnReveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMissionSection