import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';
import Item from '../common/Item';

const HotItemBlock = styled.div`
  padding-top: 32px;
`;

const Wrapper = styled(Responsive)`
  width: 677px;
  .hot-item-title-area {
    display: flex;
    justify-content: space-between;
    .hot-item-title {
      padding-bottom: 30px;
      font-size: 18px;
      font-weight: bold;
    }
    .hot-item-link {
      font-size: 15px;
      text-decoration: none;
      color: #ff8a3d;
      &:hover {
        font-weight: bold;
      }
    }
  }
  .hot-item-list {
    width: 677px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Items = styled(Item)``;

const HotItem = () => {
  return (
    <HotItemBlock>
      <Wrapper>
        <div className="hot-item-title-area">
          <h3 className="hot-item-title">당근마켓 인기중고</h3>
          <Link className="hot-item-link" to="#">
            더 구경하기
          </Link>
        </div>
        <div className="hot-item-list">
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
      </Wrapper>
    </HotItemBlock>
  );
};

export default HotItem;
