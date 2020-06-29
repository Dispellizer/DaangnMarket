import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

import heart from '../../images/heart.svg';
import xs1 from '../../images/xs1.jpg';

const RegionMarketBlock = styled.div`
  margin-top: 20px;
`;

const Wrapper = styled(Responsive)`
  width: 802px;
  .market-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    .market-title {
      width: 720px;
      padding: 20px 40px;
      font-size: 18px;
      font-weight: bold;
    }
    .market-item-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 40px;
    }
    .market-more {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      font-size: 16px;
      color: #868e96;
      cursor: pointer;
      border-top: 1px solid #e9ecef;
    }
  }
`;

const RegionMarketItem = () => {
  const RegionMarketItemContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    .market-item {
      width: 217px;
      .item-link {
        text-decoration: none;
        color: black;
        .item-photo {
          display: flex;
          align-items: center;
          height: 160px;
          overflow: hidden;
          border-radius: 8px;
          img {
            width: 217px;
            height: 217px;
          }
        }
        .item-desc {
          margin: 16px 0px;
          .item-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-region {
            font-size: 14px;
            color: #868e96;
            margin-bottom: 11px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-price-heart {
            display: flex;
            justify-content: space-between;
            .item-price {
              font-size: 15px;
              font-weight: bold;
              color: #ff8a3d;
            }
            .item-heart {
              font-size: 14px;
              img {
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  `;
  return (
    <RegionMarketItemContainer>
      <div className="market-item">
        <Link to="#" className="item-link">
          <div className="item-photo">
            <img src={xs1} alt="item" />
          </div>
          <div className="item-desc">
            <h2 className="item-title">아이폰리페어샵</h2>
            <div className="item-price-heart">
              <div className="item-region">황상동 ∙ 휴대폰수리</div>
              <div className="item-heart">
                <img src={heart} alt="market heart" />
                <span>4</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </RegionMarketItemContainer>
  );
};

const RegionMarket = () => {
  return (
    <RegionMarketBlock>
      <Wrapper>
        <div className="market-container">
          <p className="market-title">동네업체</p>
          <div className="market-item-block">
            <RegionMarketItem />
            <RegionMarketItem />
            <RegionMarketItem />
            <RegionMarketItem />
            <RegionMarketItem />
            <RegionMarketItem />
          </div>
          <div className="market-more">더보기</div>
        </div>
      </Wrapper>
    </RegionMarketBlock>
  );
};

export default RegionMarket;
