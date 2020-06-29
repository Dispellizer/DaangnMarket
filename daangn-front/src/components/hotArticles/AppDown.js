import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const AppDownBlock = styled.div`
  padding: 80px 0;
  background: #f8f9fa;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .appdown-title {
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
  }
  .appdown-desc {
    font-size: 17px;
    margin: 10px 0;
  }
  .appdown-buttons {
    margin-top: 40px;
    .download-button {
      padding: 13px 21px;
      font-size: 22px;
      font-weight: bold;
      background: #ff8a3d;
      color: white;
      text-decoration: none;
      border-radius: 35px;
      &:last-child {
        margin-left: 25px;
      }
    }
  }
`;

const AppDown = () => {
  return (
    <AppDownBlock>
      <Wrapper>
        <h3 className="appdown-title">더 구경하고 싶나요?</h3>
        <p className="appdown-desc">
          당근마켓 앱에서 따듯한 거래를 직접 경험해보세요!
        </p>
        <div className="appdown-buttons">
          <a
            className="download-button"
            href="https://itunes.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1&mt=8"
            target="_blank noopener noreferrer"
          >
            App Store
          </a>
          <a
            className="download-button"
            href="https://play.google.com/store/apps/details?id=com.towneers.www"
            target="_blank noopener noreferrer"
          >
            Google Play
          </a>
        </div>
      </Wrapper>
    </AppDownBlock>
  );
};

export default AppDown;
