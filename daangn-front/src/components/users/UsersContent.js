import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { NavLink, Switch, Route } from 'react-router-dom';
import Item from '../common/Item';
import UsersReview from './UsersReview';

import Profile from '../../images/profile.png';

const UsersContentBlock = styled.div`
  padding-top: 100px;
`;

const Wrapper = styled(Responsive)`
  width: 677px;
`;

const UsersProfile = styled.div`
  display: flex;
  margin-bottom: 40px;
  .profile-img {
    margin-right: 30px;
    img {
      width: 58px;
      border-radius: 50%;
    }
  }
  .profile-detail {
    margin-top: 10px;
    .nickname {
      margin-right: 20px;
      font-size: 22px;
      font-weight: bold;
      .region {
        margin-left: 15px;
        font-size: 17px;
        font-weight: normal;
      }
    }
    .users-info-list {
      margin-top: 10px;
      display: flex;
      font-size: 15px;
      color: #868e96;
      .users-info-item {
        margin-right: 30px;
        span {
          margin-left: 10px;
          font-weight: bold;
        }
      }
    }
  }
`;

const UsersRecorder = styled.div`
  .users-filter {
    .users-filter-list {
      display: flex;
      border-bottom: 1px solid #e9ecef;
      .users-filter-item {
        .users-filter-link {
          display: block;
          padding: 8px 20px;
          font-size: 17px;
          color: #868e96;
          text-decoration: none;
          &:hover {
            color: #f76707;
          }
          &.active {
            font-size: 17px;
            font-weight: bold;
            color: #f76707;
            border-bottom: 3px solid #f76707;
          }
        }
      }
    }
  }
`;

const UsersItem = () => {
  const UsersItemBlock = styled.div`
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  return (
    <UsersItemBlock>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </UsersItemBlock>
  );
};

const UsersReviews = () => {
  const UsersReviewsBlock = styled.div``;

  return (
    <UsersReviewsBlock>
      <UsersReview />
    </UsersReviewsBlock>
  );
};

const UsersManners = () => {
  const UsersKindBlock = styled.div`
    padding: 20px 0;
    .manners-list {
      .manners-item {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #e9ecef;
        &:last-child {
          border: 0;
        }
        .manners-content {
          font-size: 15px;
          b {
            margin-right: 5px;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .manners-count {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
  `;

  return (
    <UsersKindBlock>
      <ul className="manners-list">
        <li className="manners-item">
          <p className="manners-content">
            <b>1.</b>친절하고 매너가 좋아요.
          </p>
          <p className="manners-count">39명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>2.</b>응답이 빨라요.
          </p>
          <p className="manners-count">38명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>3.</b>시간 약속을 잘 지켜요.
          </p>
          <p className="manners-count">35명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>4.</b>좋은 상품을 저렴하게 판매해요.
          </p>
          <p className="manners-count">24명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>5.</b>상품상태가 설명한 것과 같아요.
          </p>
          <p className="manners-count">17명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>6.</b>상품설명이 자세해요.
          </p>
          <p className="manners-count">16명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>7.</b>제가 있는 곳까지 와서 거래했어요.
          </p>
          <p className="manners-count">7명</p>
        </li>
        <li className="manners-item">
          <p className="manners-content">
            <b>8.</b>무료로 나눠주셨어요.
          </p>
          <p className="manners-count">5명</p>
        </li>
      </ul>
    </UsersKindBlock>
  );
};

const UsersBlock = () => {
  return (
    <UsersContentBlock>
      <Wrapper>
        <UsersProfile>
          <div className="profile-img">
            <img alt="profile img" src={Profile} />
          </div>
          <div className="profile-detail">
            <h2 className="nickname">
              후추<span className="region">성북구 정릉제2동</span>
            </h2>
            <ul className="users-info-list">
              <li className="users-info-item">
                매너온도<span>45.7°C</span>
              </li>
              <li className="users-info-item">
                재거래희망률<span>100%</span>
              </li>
            </ul>
          </div>
        </UsersProfile>
        <UsersRecorder>
          <div className="users-filter">
            <ul className="users-filter-list">
              <li className="users-filter-item">
                <NavLink
                  to="/users/1"
                  className="users-filter-link"
                  activeClassName="active"
                  exact
                >
                  판매 물품 (9)
                </NavLink>
              </li>
              <li className="users-filter-item">
                <NavLink
                  to="/users/1/review"
                  className="users-filter-link"
                  activeClassName="active"
                >
                  거래 후기 (10)
                </NavLink>
              </li>
              <li className="users-filter-item">
                <NavLink
                  to="/users/1/manners"
                  className="users-filter-link"
                  activeClassName="active"
                >
                  매너 칭찬
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="users-recodes">
            <Switch>
              <Route path="/users/:id" component={UsersItem} exact />
              <Route path="/users/:id/review" component={UsersReviews} />
              <Route path="/users/:id/manners" component={UsersManners} />
            </Switch>
          </div>
        </UsersRecorder>
      </Wrapper>
    </UsersContentBlock>
  );
};

export default UsersBlock;
