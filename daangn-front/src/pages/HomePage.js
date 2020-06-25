import React from 'react';
import Header from '../components/common/Header';
import HeaderTop from '../components/main/HeaderTop';
import HotArticles from '../components/main/HotArticles';
import TownBanner from '../components/main/TownBanner';
import Introduction from '../components/main/Introduction';
import Reviews from '../components/main/Reviews';
import QnA from '../components/main/QnA';
import Footer from '../components/common/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeaderTop />
      <HotArticles />
      <TownBanner />
      <Introduction />
      <Reviews />
      <QnA />
      <Footer />
    </>
  );
};

export default HomePage;
