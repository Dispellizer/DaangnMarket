import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import ArticleContent from '../components/articles/ArticlesContent';
import RelatedItem from '../components/articles/RelatedItem';
import HotItem from '../components/articles/HotItem';
import Footer from '../components/common/Footer';

const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ArticleContent />
      <RelatedItem />
      <HotItem />
      <Footer />
    </>
  );
};

export default ArticlePage;
