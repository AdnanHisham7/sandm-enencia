import React from 'react';
import ModernHeroSection from '../components/home/ModernHeroSection';
import AboutSection from '../components/home/AboutSection';
import ProductCategoriesGrid from '../components/home/ProductCategoriesGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import TechnologySection from '../components/home/TechnologySection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ModernHeroSection />
      <AboutSection />
      <ProductCategoriesGrid />
      <FeaturedProducts />
      <TechnologySection />
    </div>
  );
};

export default HomePage;