import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import MainArticleTitle from '../common/MainArticleTitle';

import intro from '../../images/intro.png';

const IntroductionBlock = styled.div`
  height: 1057px;
  padding: 120px 0 0;
  background: #f8f9fa;
`;

const Wrapper = styled(Responsive)`
  .intro-wrap {
    display: flex;
    flex-wrap: wrap;
    .intro-detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 138px;
      margin-bottom: 100px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .intro-img {
        width: 230px;
        height: 230px;
      }
      .intro-img-1 {
        background-image: url(${intro});
        background-position: 0px 0px;
        background-repeat: no-repeat;
      }
      .intro-img-2 {
        background-image: url(${intro});
        background-position: 0px -230px;
        background-repeat: no-repeat;
      }
      .intro-img-3 {
        background-image: url(${intro});
        background-position: 0px -460px;
        background-repeat: no-repeat;
      }
      .intro-img-4 {
        background-image: url(${intro});
        background-position: 0px -690px;
        background-repeat: no-repeat;
      }
      .intro-img-5 {
        background-image: url(${intro});
        background-position: 0px -920px;
        background-repeat: no-repeat;
      }
      .intro-img-6 {
        background-image: url(${intro});
        background-position: 0px -1150px;
        background-repeat: no-repeat;
      }
      .intro-title {
        margin-top: 32px;
        font-size: 22px;
        font-weight: bold;
      }
      .intro-desc {
        margin-top: 10px;
        font-size: 17px;
        color: #495057;
        line-height: 1.5;
        letter-spacing: -1.2px;
      }
    }
  }
`;

const Introduction = () => {
  return (
    <IntroductionBlock>
      <Wrapper>
        <MainArticleTitle title="당근마켓은 이런 점이 달라요!" />
        <div className="intro-wrap">
          <div className="intro-detail">
            <div className="intro-img-1 intro-img"></div>
            <h5 className="intro-title">동네 인증</h5>
            <p className="intro-desc">
              설정한 동네를 인증한
              <br />
              주민만 거래할 수 있어요.
            </p>
          </div>
          <div className="intro-detail">
            <div className="intro-img-2 intro-img"></div>
            <h5 className="intro-title">거래 매너 온도</h5>
            <p className="intro-desc">
              거래하기 전, 프로필에 있는
              <br />
              매너 온도를 확인해보세요.
            </p>
          </div>
          <div className="intro-detail">
            <div className="intro-img-3 intro-img"></div>
            <h5 className="intro-title">1:1 채팅하기</h5>
            <p className="intro-desc">
              거래할 상대방과 부담 없이
              <br />
              대화할 수 있어요.
            </p>
          </div>
          <div className="intro-detail">
            <div className="intro-img-4 intro-img"></div>
            <h5 className="intro-title">가격 하락 알림</h5>
            <p className="intro-desc">
              관심 게시물의 가격이 떨어지면
              <br />
              가격 하락 알림을 받을 수 있어요.
            </p>
          </div>
          <div className="intro-detail">
            <div className="intro-img-5 intro-img"></div>
            <h5 className="intro-title">나눔의 날</h5>
            <p className="intro-desc">
              매월 11일, 안쓰는 물건을 나누고
              <br />
              이웃과 추억도 공유해보세요.
            </p>
          </div>
          <div className="intro-detail">
            <div className="intro-img-6 intro-img"></div>
            <h5 className="intro-title">감사 인사</h5>
            <p className="intro-desc">
              거래 후에는 서로에게
              <br />
              감사 인사를 보내보세요.
            </p>
          </div>
        </div>
      </Wrapper>
    </IntroductionBlock>
  );
};

export default Introduction;
