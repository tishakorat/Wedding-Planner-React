import React from 'react';
import Slider from './components/Slider';
import Footer from './components/Footer';
import WeddingSection from './components/WeddingSection';
import AboutSection from './components/AboutSection';
import LatestStylesSection from './components/LatestStyle';
import InspirationSection from './components/InspirationSection';
import GallerySection from './components/GallerySection';
import BouquetsSection from './components/BouquetsSection';
import ProvidesSection from './components/ProvidesSection';

const MainLayout = () => {
  return (
    <>
      <Slider />
      <WeddingSection />
      <AboutSection />
      <LatestStylesSection />
      <InspirationSection />
      <GallerySection />
      <BouquetsSection />
      <ProvidesSection />
      <Footer />
    </>
  );
};

export default MainLayout;
