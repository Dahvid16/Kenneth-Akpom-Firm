import React from 'react';
import ServiceHeroSection from '@/components/ServiceComponents/ServiceHeroSection';
import ServiceServices from '@/components/ServiceComponents/ServiceServices';
import ServiceProcessSection from '@/components/ServiceComponents/ServiceProcessSection';
import ServiceCallToAction from '@/components/ServiceComponents/ServiceCallToAction';

const Services = () => {
  

  return (
    <div className="min-h-screen">
      <ServiceHeroSection/>
      <ServiceServices/>
      <ServiceProcessSection/>
      <ServiceCallToAction/>
    </div>
  );
};

export default Services;