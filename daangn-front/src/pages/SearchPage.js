import React from 'react';
import Header from '../components/common/Header';
import Result from '../components/search/Result';
import RegionMarket from '../components/search/RegionMarket';
import RegionInfo from '../components/search/RegionInfo';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const SearchPageBlock = styled.div`
  background-color: #f8f9fa;
`;

const SearchPage = () => {
  return (
    <SearchPageBlock>
      <Header />
      <Result />
      <RegionMarket />
      <RegionInfo />
      <Footer />
    </SearchPageBlock>
  );
};

export default SearchPage;
