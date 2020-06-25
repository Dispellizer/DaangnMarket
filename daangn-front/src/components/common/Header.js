import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import apple from '../../images/apple.svg';
import android from '../../images/android.svg';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 77px;
  .logo {
    width: 132px;
    height: 37px;
  }
  .search {
    display: flex;
    width: 515px;
    height: 44px;
    border: 1px solid #ff8a3d;
    border-radius: 4px;
    .search-area {
      align-self: center;
      padding: 0 10px;
      flex: 1;
      height: 38px;
      font-size: 18px;
      border: none;
      outline: none;
      &::placeholder {
        color: #adb5bd;
      }
    }
    .search-area-btn {
      display: flex;
      margin-right: 5px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      .search-area-icon {
        align-self: center;
        width: 26px;
        height: 26px;
      }
    }
  }
  .app {
    display: flex;
    .download-btn {
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-size: 17px;
      border: 1px solid #ff8a3d;
      border-radius: 25px;
      text-decoration: none;
      color: #ff8a3d;
      img {
        margin-right: 10px;
        padding: 11px 0;
      }
    }
    .download-btn:last-child {
      margin-left: 15px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <h1 className="logo">
            <Link to="/">
              <img className="logo" alt="당근마켓" src={logo} />
            </Link>
          </h1>
          <div className="search">
            <input
              type="text"
              className="search-area"
              name="search-area"
              placeholder="지역, 상품 등을 검색해보세요."
            />
            <button className="search-area-btn">
              <img className="search-area-icon" alt="search" src={search} />
            </button>
          </div>
          <div className="app">
            <a
              target="_blank noopener noreferrer"
              className="app-store download-btn"
              href="https://itunes.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1&mt=8"
            >
              <img className="app-store-img" alt="App Store" src={apple} />
              <div className="download-text">App Store</div>
            </a>
            <a
              target="_blank noopener noreferrer"
              className="google-play download-btn"
              href="https://play.google.com/store/apps/details?id=com.towneers.www"
            >
              <img
                className="google-play-img"
                alt="Google Play"
                src={android}
              />
              <div className="download-text">Google Play</div>
            </a>
          </div>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
