import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ChooseByBrand from '../components/homepage/ChooseByBrand';
import ShopCategory from '../components/homepage/ShopCategory';
import TodaysDeals from '../components/homepage/TodaysDeals';

function Homepage() {
  return (
    <div>
      <HeroSection />
      <ShopCategory />
      <TodaysDeals />
      <ChooseByBrand />
      <Footer />
    </div>
  );
}

export default Homepage;
