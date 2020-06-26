import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Item from '../common/Item';

const RelatedItemBlock = styled.div`
  padding-top: 32px;
  border-bottom: 1px solid #e9ecef;
`;

const Wrapper = styled(Responsive)`
  width: 677px;
  .related-item-title {
    padding-bottom: 30px;
    font-size: 18px;
    font-weight: bold;
  }
  .related-item-list {
    width: 677px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Items = styled(Item)``;

const RelatedItem = () => {
  return (
    <RelatedItemBlock>
      <Wrapper>
        <h3 className="related-item-title">이 상품과 함께 봤어요</h3>
        <div className="related-item-list">
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
      </Wrapper>
    </RelatedItemBlock>
  );
};

export default RelatedItem;
