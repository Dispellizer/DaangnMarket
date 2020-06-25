import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

import townLogo from '../../images/townLogo.svg';
import townImg from '../../images/townImg.png';

const TownBannerBlock = styled.div`
  background: #fff4ee;
  height: 136px;
  padding: 48px 0;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  .town-logo {
    margin-bottom: 15px;
  }
  .town-banner-desc {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .town-link-button {
    display: inline-block;
    padding: 17px 5px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    background: #ff8a3d;
    text-decoration: none;
  }
  .town-img {
    align-self: flex-end;
    width: 322px;
    height: 85px;
  }
`;

const TownBanner = () => {
  return (
    <TownBannerBlock>
      <Wrapper>
        <div className="town-flex">
          <img className="town-logo" alt="town logo" src={townLogo} />
          <p className="town-banner-desc">
            내 근처 동네가게는 이곳에서 찾아보세요.
          </p>
          <a
            className="town-link-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://town.daangn.com/"
          >
            당근마켓 동네가게 바로가기
          </a>
        </div>
        <img className="town-img" alt="town img" src={townImg} />
      </Wrapper>
    </TownBannerBlock>
  );
};

export default TownBanner;
