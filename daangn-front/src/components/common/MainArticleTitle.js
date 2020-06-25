import React from 'react';
import styled from 'styled-components';

const MainArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .article-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .article-divider {
    width: 70px;
    margin-bottom: 50px;
    border-top: 2px solid #ff8a3d;
  }
`;

const MainArticleTitle = ({ title }) => {
  return (
    <MainArticleBlock>
      <div className="article-title">{title}</div>
      <div className="article-divider"></div>
    </MainArticleBlock>
  );
};

export default MainArticleTitle;
