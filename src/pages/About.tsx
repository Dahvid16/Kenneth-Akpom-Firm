import React from 'react';
import AboutHeroSection from '../components/AboutComponents/AboutHeroSection';
import AboutOurStorySection from '@/components/AboutComponents/AboutOurStorySection';
import AboutValuesSection from '@/components/AboutComponents/AboutValuesSection';
import AboutWhySection from '@/components/AboutComponents/AboutWhySection';
import AboutMissionSection from '@/components/AboutComponents/AboutMissionSection';


const About = () => {

  return (
    <div className="min-h-screen">
      <AboutHeroSection/>
      <AboutOurStorySection/>
      <AboutValuesSection/>
      <AboutWhySection/>
      <AboutMissionSection/>
    </div>
  );
};

export default About;