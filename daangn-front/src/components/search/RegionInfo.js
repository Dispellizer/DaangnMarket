import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

import heart from '../../images/heart.svg';
import xs1 from '../../images/xs1.jpg';

const RegionInfoBlock = styled.div`
  margin-top: 20px;
  margin-bottom: 70px;
`;

const Wrapper = styled(Responsive)`
  width: 802px;
  .info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    .info-title {
      width: 720px;
      padding: 20px 40px 0px;
      font-size: 18px;
      font-weight: bold;
    }
    /* .info-item {
      margin: 0 40px;
      padding: 20px 0;
      border-bottom: 1px solid #e9ecef;
      &:last-child {
        border: none;
      }
      .item-link {
        width: 720px;
        display: flex;
        text-decoration: none;
        color: black;
        .item-photo {
          margin-right: 20px;
          img {
            border-radius: 8px;
            width: 120px;
            height: 120px;
          }
        }
        .item-desc {
          margin: 16px 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .item-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-more-desc {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-region {
            margin-top: 10px;
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
    } */
    .info-more {
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

const RegionInfoItem = () => {
  const RegionInfoItemContainer = styled.ul`
    border-bottom: 1px solid #e9ecef;
    margin: 0 40px;
    &:last-child {
      border: none;
    }
    .info-item {
      padding: 20px 0;
      .item-link {
        width: 720px;
        display: flex;
        text-decoration: none;
        color: black;
        .item-photo {
          margin-right: 20px;
          img {
            border-radius: 8px;
            width: 120px;
            height: 120px;
          }
        }
        .item-desc {
          margin: 16px 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .item-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 9px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-more-desc {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-region {
            margin-top: 10px;
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
    <RegionInfoItemContainer>
      <li className="info-item">
        <Link to="#" className="item-link">
          <div className="item-photo">
            <img src={xs1} alt="item" />
          </div>
          <div className="item-desc">
            <h2 className="item-title">아이폰 전문매장</h2>
            <div className="item-more-desc">
              아이폰 전문매장 카드할인x 결합할인x 순수 현금가 기준 안내 할부가능
              빠른 문의 상담가능
            </div>
            <div className="item-region">황상동</div>
            <div className="item-price-heart">
              <div className="item-price">100원</div>
              <div className="item-heart">
                <img src={heart} alt="info heart" />
                <span>4</span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </RegionInfoItemContainer>
  );
};

const RegionInfo = () => {
  return (
    <RegionInfoBlock>
      <Wrapper>
        <div className="info-container">
          <p className="info-title">동네정보</p>
          <ul className="info-item-list">
            <RegionInfoItem />
            <RegionInfoItem />
            <RegionInfoItem />
            <RegionInfoItem />
            <RegionInfoItem />
            <RegionInfoItem />
          </ul>
          <div className="info-more">더보기</div>
        </div>
      </Wrapper>
    </RegionInfoBlock>
  );
};

export default RegionInfo;
