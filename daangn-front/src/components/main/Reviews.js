import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import MainArticleTitle from '../common/MainArticleTitle';

import reviewIcon from '../../images/intro.png';

const ReviewsBlock = styled.div`
  height: 975px;
  padding-top: 110px;
  background: white;
`;

const Wrapper = styled(Responsive)`
  .reviews-wrap {
    .reviews-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .review {
        margin-right: 32px;
        margin-bottom: 100px;
        .review-icon {
          margin-bottom: 10px;
          width: 16px;
          height: 15px;
          background-image: url(${reviewIcon});
          background-position: -172px -1380px;
          background-repeat: no-repeat;
        }
        .review-text {
          margin-left: 12px;
          width: 268px;
          font-size: 17px;
          line-height: 1.6;
          letter-spacing: -0.6px;
          .review-region {
            color: #ff8a3d;
          }
        }
      }
    }
  }
`;

const Reviews = () => {
  return (
    <ReviewsBlock>
      <Wrapper>
        <MainArticleTitle title="당근마켓 사용자 후기" />
        <div className="reviews-wrap">
          <ul className="reviews-list">
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                아나바다 운동하는 것 같아서 좋아요ㅎ 저한텐 필요 없는 물건이
                필요한 사람에게 전달될 수 있는 공간을 열어주셔서 감사합니다!
                <span className="review-region"> - 광주 관천동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                근처에 있는 사람들끼리 거래하니까 뭔가 더 믿을 수 있는 것
                같아요. 동네에서 바로 직거래할 수 있는 물건만 볼 수 있어 좋은 것
                같아요.
                <span className="review-region"> - 서울 잠실3동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                집에 있는 안 쓰는 물건 팔기 좋아요 :) 동네 사람들이랑 직거래할
                수 있어서 소소한 물건 팔기 좋아요!
                <span className="review-region"> - 인천 주안1동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                요즘 미니멀라이프 실천 중인데 당근마켓만한 앱이 없어요!
                미니멀리즘을 위한 앱이랄까요?ㅎㅎ 동네 직거래라 쉽고 간편해서
                너무 좋아요^^ 중고거래에 빠져있답니다❤︎
                <span className="review-region"> - 부산 부전제1동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                믿을 수 있고, 무엇보다 직거래할 수 있어서 편하네요! 좋은
                물건들이 거래되다 보니 중독성도 은근 강함 ㅋㅋ 놓칠까 봐 자꾸
                들여다보게 되네요.
                <span className="review-region"> - 광명 철산3동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                여기는 모랄까 돈 버는 것이 목적이 아닌 이웃들과 안 쓰는 물건들을
                공유하고 정을 주고받는 동네 장터 같아요. 거래할 때마다 이웃의
                정을 느낄 수 있어 좋았답니다.
                <span className="review-region"> - 울산 삼산동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                동네에서 바로 직거래하니까 사기 걱정도 없고 좋네요 ^^ 동네
                사람들이니까 신뢰도 가고 가끔 쿨매 나오면 좋아요 ~~
                <span className="review-region"> - 분당 정자동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                당근에서 거래하는 재미에 쏙 빠졌어요~ 안쓰는 물건 나눔하고
                피드백 받는 경험도 너무 좋았어요~ 동네라서 정말 편해요. 넘나
                애정하는 어플 응원할게요!
                <span className="review-region"> - 대전 둔산2동</span>
              </div>
            </li>
            <li className="review">
              <div className="review-icon"></div>
              <div className="review-text">
                요즘 매일 쓰는 벼룩 앱이에요:) 근처 주민이라 믿을만하고 쉽게
                거래할 수 있어요~ 동네에서 올라오는 매물 구경하는 맛에 완전
                중독됐어요!! 진짜 안써본 사람은 몰라요 ㅋㅋ
                <span className="review-region"> - 제주 노형동</span>
              </div>
            </li>
          </ul>
        </div>
      </Wrapper>
    </ReviewsBlock>
  );
};

export default Reviews;
