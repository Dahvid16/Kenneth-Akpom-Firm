import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HomeComponents/HeroSection'
import AboutSection from '../components/HomeComponents/AboutSection'
import HomeServiceSection from '../components/HomeComponents/HomeServiceSection'
import HomeArticleSection from '../components/HomeComponents/HomeArticleSection';
import HomeBlogSection from '../components/HomeComponents/HomeBlogSection'

const Home = () => {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Services Section */}
      <HomeServiceSection services/>

      {/* Articles Section */}
      <HomeArticleSection article/>

      {/* Blog Section */}
      <HomeBlogSection/>
      
    </div>
  );
};

export default Home;