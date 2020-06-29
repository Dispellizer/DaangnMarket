import React from 'react';
import styled from 'styled-components';
import MainArticleTitle from '../common/MainArticleTitle';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const HotKeywordsContentBlock = styled.div`
  padding-top: 140px;
  padding-bottom: 70px;
`;

const Wrapper = styled(Responsive)`
  .top-keywords-list {
    margin: 0 auto;
    width: 414px;
    .top-keywords-item {
      display: flex;
      flex-direction: column;
      padding: 14px 16px;
      border-bottom: 1px solid #e9ecef;
      &:hover {
        background: #f8f9fa;
      }
      .top-keywords-link {
        display: flex;
        justify-content: space-between;
        color: black;
        text-decoration: none;
        &:hover .keyword {
          text-decoration: underline;
        }
        .keyword-block {
          display: flex;
          font-size: 17px;
          .rank {
            width: 20px;
            margin-right: 20px;
            font-family: Verdana, Arial, Helvetica, sans-serif;
            font-style: oblique;
            font-weight: bold;
            text-align: right;
          }
          .keyword {
          }
        }
        .rank-block {
          .rank-arrow {
            margin-right: 6px;
            &.up {
              color: #e03131;
            }
            &.down {
              color: #186ec0;
            }
          }
        }
      }
    }
  }
`;

const HotKeywordsContent = () => {
  return (
    <HotKeywordsContentBlock>
      <Wrapper>
        <MainArticleTitle title="오늘의 중고 인기 검색어" />
        <ol className="top-keywords-list">
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up"></span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up"></span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">1</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">2</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow down">↓</span>
                <span className="changed-rank">4</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">1</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">12</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">13</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
          <li className="top-keywords-item">
            <Link to="#" className="top-keywords-link">
              <div className="keyword-block">
                <p className="rank">14</p>
                <p className="keyword">자전거</p>
              </div>
              <p className="rank-block">
                <span className="rank-arrow up">↑</span>
                <span className="changed-rank">-</span>
              </p>
            </Link>
          </li>
        </ol>
      </Wrapper>
    </HotKeywordsContentBlock>
  );
};

export default HotKeywordsContent;
