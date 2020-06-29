import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

import heart from '../../images/heart.svg';
import xs1 from '../../images/xs1.jpg';

const ResultBlock = styled.div`
  padding-top: 100px;
`;

const Wrapper = styled(Responsive)`
  width: 802px;
  .result-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    .result-title {
      width: 720px;
      padding: 20px 40px;
      font-size: 18px;
      font-weight: bold;
    }
    .result-item-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 40px;
    }
    .result-more {
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

const ResultItem = () => {
  const ResultItemContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    .result-item {
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
    <ResultItemContainer>
      <div className="result-item">
        <Link to="#" className="item-link">
          <div className="item-photo">
            <img src={xs1} alt="item" />
          </div>
          <div className="item-desc">
            <h2 className="item-title">
              아이폰XS맥스, 아이폰XS MAX A2101, A급 공기계 판매
            </h2>
            <div className="item-region">용산구 한강로2가</div>
            <div className="item-price-heart">
              <div className="item-price">630,000원</div>
              <div className="item-heart">
                <img src={heart} alt="result heart" />
                <span>4</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </ResultItemContainer>
  );
};

const Result = () => {
  return (
    <ResultBlock>
      <Wrapper>
        <div className="result-container">
          <p className="result-title">중고거래</p>
          <div className="result-item-block">
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
          </div>
          <div className="result-more">더보기</div>
        </div>
      </Wrapper>
    </ResultBlock>
  );
};

export default Result;
