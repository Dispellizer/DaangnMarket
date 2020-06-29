import React from 'react';
import Header from '../components/common/Header';
import HotArticlesContent from '../components/hotArticles/HotArticlesContent';
import AppDown from '../components/hotArticles/AppDown';
import Footer from '../components/common/Footer';

const HotArticlesPage = () => {
  return (
    <>
      <Header />
      <HotArticlesContent />
      <AppDown />
      <Footer />
    </>
  );
};

export default HotArticlesPage;
