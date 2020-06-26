import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

import plus from '../../images/plus.svg';
import MainArticleTitle from '../common/MainArticleTitle';
import Item from '../common/Item';

const HotArticlesBlock = styled.div`
  background: white;
  height: 1155px;
  padding: 130px 0 120px;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hot-articles-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hot-articles-more {
    width: 211px;
    height: 295px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    &:hover {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }
    .more-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 90px 0;
      color: black;
      text-decoration: none;

      .more-text {
        padding-top: 16px;
        font-size: 17px;
        font-weight: bold;
        line-height: 1.5;
      }
    }
  }
`;

const HotArticlesItem = styled(Item)``;

const HotArticles = () => {
  return (
    <HotArticlesBlock>
      <Wrapper>
        <MainArticleTitle title="당근마켓 인기 매물" />
        <div className="hot-articles-list">
          <HotArticlesItem />
          <HotArticlesItem />
          <HotArticlesItem />
          <HotArticlesItem />
          <HotArticlesItem />
          <HotArticlesItem />
          <HotArticlesItem />
          <HotArticlesItem />
        </div>
        <div className="hot-articles-more">
          <Link to="#" className="more-item">
            <img alt="+" src={plus} />
            <div className="more-text">
              당근마켓
              <br />
              인기 매물
              <br />
              더보기
            </div>
          </Link>
        </div>
      </Wrapper>
    </HotArticlesBlock>
  );
};

export default HotArticles;
