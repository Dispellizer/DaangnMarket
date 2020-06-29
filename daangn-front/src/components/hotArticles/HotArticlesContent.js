import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import MainArticleTitle from '../common/MainArticleTitle';
import Item from '../common/Item';

const HotArticlesContentBlock = styled.div`
  padding-top: 130px;
  padding-bottom: 60px;
`;

const Wrapper = styled(Responsive)`
  width: 980px;
  .hot-item-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const HotArticlesContent = () => {
  return (
    <HotArticlesContentBlock>
      <Wrapper>
        <MainArticleTitle title="인기 중고 매물" />
        <div className="hot-item-list">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </Wrapper>
    </HotArticlesContentBlock>
  );
};

export default HotArticlesContent;
