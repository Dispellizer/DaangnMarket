import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import SimpleSlider from './Slider';

import profile from '../../images/profile.png';
import tempFace from '../../images/tempFace.png';
import { Link } from 'react-router-dom';

const ArticlesContentBlock = styled.div`
  padding-top: 100px;
`;

const Wrapper = styled(Responsive)`
  display: felx;
  flex-wrap: wrap;
  width: 677px;
`;

const ArticlesImage = styled.div`
  width: 666px;
`;

const ArticlesProfile = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
  padding-bottom: 15px;
  width: 677px;
  color: black;
  text-decoration: none;
  border-bottom: 1px solid #e9ecef;
  &:hover .nickname {
    text-decoration: underline;
  }
  .profile-left {
    display: flex;
    .profile-img-area {
      margin-right: 15px;
      .profile-img {
        width: 40px;
        border-radius: 50%;
      }
    }
    .profile-info {
      margin-top: 5px;
      .nickname {
        font-size: 15px;
        font-weight: bold;
        line-height: 1.5;
      }
      .region-name {
        font-size: 13px;
      }
    }
  }
  .profile-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .profile-temp {
      display: flex;
      .temp {
        margin-right: 5px;
        font-size: 16px;
        font-weight: bold;
        color: #319e45;
      }
      .temp-img {
        width: 24px;
        height: 24px;
        background-image: url(${tempFace});
        background-position: 0px -99px;
      }
    }
    .temp-meters {
      margin-right: 35px;
      margin-bottom: 8px;
      width: 100px;
      background: #e9ecef;
      border-radius: 4px;
      .bar {
        border-radius: 4px;
        width: 38%;
        height: 4px;
        background: #319e45;
      }
    }
    .temp-state {
      font-size: 12px;
      color: #868e96;
    }
  }
`;

const ArticlesDesc = styled.div`
  width: 677px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
  .article-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
  }
  .article-category {
    margin-top: 4px;
    font-size: 13px;
    color: #868e96;
  }
  .article-price {
    margin-top: 4px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.8;
  }
  .article-desc {
    margin-top: 8px;
    font-size: 17px;
    line-height: 1.6;
    p {
      margin: 16px 0;
    }
  }
  .article-counts {
    font-size: 13px;
    color: #868e96;
  }
`;

const ArticlesContent = () => {
  return (
    <ArticlesContentBlock>
      <Wrapper>
        <ArticlesImage>
          <SimpleSlider />
        </ArticlesImage>
        <ArticlesProfile to="/users/1">
          <div className="profile-left">
            <div className="profile-img-area">
              <img className="profile-img" alt="profile img" src={profile} />
            </div>
            <div className="profile-info">
              <div className="nickname">용산직거래</div>
              <div className="region-name">용산구 한강로2가</div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-temp">
              <div className="temp">38.0°C</div>
              <div className="temp-img"></div>
            </div>
            <div className="temp-meters">
              <div className="bar"></div>
            </div>
            <div className="temp-state">매너온도</div>
          </div>
        </ArticlesProfile>
        <ArticlesDesc>
          <h1 className="article-title">
            아이폰XS맥스, 아이폰XS MAX A2101, A급 공기계 판매
          </h1>
          <p className="article-category">디지털/가전 ∙ 끌올4일 전</p>
          <p className="article-price">630,000원</p>
          <div className="article-desc">
            <p>
              아이폰xs맥스 스페이스그레이 색상
              <br />
              용량 64기가 입니다
              <br />
              통신사 3사 모두 구분없이
              <br />
              사용되는 단말기 입니다.
            </p>
            <p>
              기능 모두 정상이고 테두리 외관은
              <br />
              사진과 같이 깨끗합니다.
            </p>
            <p>
              우측 상단부분에 사진보시면
              <br />
              테두리 미세하게 찍힘 한곳 있습니다
            </p>
            <p>
              배터리 성능 100프로
              <br />
              수리이력 없습니다.
            </p>
            <p>
              아이폰 무상리퍼 서비스 보증기간
              <br />
              2020년 8월 18일까지 남아있습니다.
            </p>
            <p>
              직거래 신용산역, 용산역 가능합니다
              <br />
              추가로 궁금하신점 있으시면
              <br />
              언제든 문의주세요
            </p>
          </div>
          <p className="article-counts">채팅 8 ∙ 관심 8 ∙ 조회 521</p>
        </ArticlesDesc>
      </Wrapper>
    </ArticlesContentBlock>
  );
};

export default ArticlesContent;
