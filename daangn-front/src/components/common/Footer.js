import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

import facebook from '../../images/facebook.svg';
import insta from '../../images/insta.svg';
import blog from '../../images/blog.svg';

const FooterBlock = styled.div`
  padding: 40px 0 70px;
  background: #495057;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  color: #dee2e6;
  .footer-list {
    display: flex;
    margin-top: 20px;
    .footer-list-item {
      line-height: 1.6;
      &::after {
        margin: 0 16px;
        color: #868e96;
        font-weight: normal;
        content: '|';
      }
      &:last-child::after {
        content: '';
      }
      &.text-bold {
        font-weight: bold;
      }
      a {
        text-decoration: none;
        color: #dee2e6;
      }
    }
  }
  .ceo {
  }
  .copyright {
    margin: 20px 0;
    color: #868e96;
    font-weight: bold;
  }
  .social {
    .social-list {
      display: flex;
      .social-list-item {
        margin: 0 15px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Wrapper>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a
              className="footer-item-link"
              href="https://policy.daangn.com/terms.html"
            >
              이용약관
            </a>
          </li>
          <li className="footer-list-item text-bold">
            <a
              className="footer-item-link"
              href="https://policy.daangn.com/terms.html"
            >
              개인정보처리방침
            </a>
          </li>
          <li className="footer-list-item">
            <a
              className="footer-item-link"
              href="https://policy.daangn.com/terms.html"
            >
              위치기반서비스 이용약관
            </a>
          </li>
          <li className="footer-list-item text-bold">
            <a
              className="footer-item-link"
              href="https://policy.daangn.com/terms.html"
            >
              광고주센터
            </a>
          </li>
          <li className="footer-list-item">
            <a
              className="footer-item-link"
              href="https://policy.daangn.com/terms.html"
            >
              ABOUT US
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-item">사업자 등록번호 : 375-87-00088</li>
          <li className="footer-list-item">서울특별시 서초구 서초대로 396</li>
          <li className="footer-list-item">
            <p>
              고객문의 :
              <a href="mailto:cs@daangnservice.com"> cs@daangnservice.com</a>
            </p>
            <p>
              제휴문의 :
              <a href="mailto:contact@daangn.com"> contact@daangn.com</a>
            </p>
          </li>
        </ul>
        <p className="ceo">(주)당근마켓 대표 김재현, 김용현</p>
        <div className="copyright">
          Copyright © Danggeun Market Inc. All rights reserved.
        </div>
        <div className="social">
          <ul className="social-list">
            <li className="social-list-item">
              <a
                className="footer-social-link"
                href="https://www.facebook.com/daangn"
              >
                <img className="footer-icon" alt="facebook" src={facebook} />
              </a>
            </li>
            <li className="social-list-item">
              <a
                className="footer-social-link"
                href="https://www.instagram.com/daangnmarket/"
              >
                <img className="footer-icon" alt="facebook" src={insta} />
              </a>
            </li>
            <li className="social-list-item">
              <a
                className="footer-social-link"
                href="https://blog.naver.com/daangn"
              >
                <img className="footer-icon" alt="facebook" src={blog} />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
