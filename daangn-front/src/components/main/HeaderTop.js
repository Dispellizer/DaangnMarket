import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';

import topHeaderImg from '../../images/headerTopImg.png';
import { Link } from 'react-router-dom';

const HeaderTopBlock = styled.div`
  background: #f1f3f5;
  height: 720px;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  .header-top-title {
    align-self: center;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 25px;
    flex: 1;
  }
  .header-top-desc {
    align-self: center;
  }
  .header-top-flex {
    display: flex;
    justify-content: space-between;
    .header-top-img {
      margin-top: 43px;
    }
    .top-keywords {
      margin-top: 15px;
      .top-keywords-title {
        padding-right: 66px;
        padding-bottom: 40px;
        font-size: 17px;
        font-weight: bold;
        border-bottom: 1px solid #868e96;
        .top-keywords-link {
          color: black;
          text-decoration: none;
          &:hover {
            color: #ff8a3d;
          }
        }
      }
      .top-keyword-list {
        margin-top: 20px;
        font-size: 17px;
        .top-keyword-item {
          .keyword-text-link {
            display: flex;
            color: black;
            text-decoration: none;
            &:hover {
              color: #ff8a3d;
            }
            .keyword-rank {
              font-weight: bold;
              margin-right: 10px;
            }
            .keyword-text {
              flex: 1;
            }
            .rank {
              margin-right: 5px;
              .up,
              .down {
                font-size: 10px;
              }
              .up {
                color: #e03131;
              }
              .down {
                color: #186ec0;
              }
              .changed_rank {
                margin-left: 5px;
                font-size: 13px;
              }
              .new {
                font-size: 13px;
                color: #e03131;
              }
            }
          }
        }
      }
    }
  }
`;

const HeaderTop = () => {
  return (
    <HeaderTopBlock>
      <Wrapper>
        <h1 className="header-top-title">우리 동네 중고 직거래 마켓</h1>
        <p className="header-top-desc">
          동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
        </p>
        <div className="header-top-flex">
          <img
            className="header-top-img"
            alt="top header img"
            src={topHeaderImg}
          />
          <div className="top-keywords">
            <h3 className="top-keywords-title">
              <Link to="/top_keywords" className="top-keywords-link">
                오늘의 인기 검색어
              </Link>
            </h3>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">1</p>
                  <p className="keyword-text">자전거</p>
                  <p className="rank">
                    <span className="changed_rank">-</span>
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">2</p>
                  <p className="keyword-text">캠핑</p>
                  <p className="rank">
                    <span className="changed_rank">-</span>
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">3</p>
                  <p className="keyword-text">냉장고</p>
                  <p className="rank">
                    <span className="changed_rank">-</span>
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">4</p>
                  <p className="keyword-text">의자</p>
                  <p className="rank">
                    <span className="up">▲</span>
                    <span className="changed_rank">1</span>
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">5</p>
                  <p className="keyword-text">에어컨</p>
                  <p className="rank">
                    <span className="down">▼</span>
                    <span className="changed_rank">2</span>
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">6</p>
                  <p className="keyword-text">선풍기</p>
                  <p className="rank">
                    <span className="down">▼</span>
                    <span className="changed_rank">1</span>
                  </p>
                </Link>
              </li>
            </ul>
            <ul className="top-keyword-list">
              <li className="top-keyword-item">
                <Link className="keyword-text-link">
                  <p className="keyword-rank">7</p>
                  <p className="keyword-text">노트북</p>
                  <p className="rank">
                    <span className="new">NEW</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </HeaderTopBlock>
  );
};

export default HeaderTop;
