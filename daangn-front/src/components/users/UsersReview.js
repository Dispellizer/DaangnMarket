import React from 'react';
import styled from 'styled-components';

import Profile from '../../images/profile.png';
import { Link } from 'react-router-dom';

const UsersReview = () => {
  const UsersReviewBlock = styled.div`
    padding: 20px 0;
  `;

  const UserReviewItem = () => {
    const UserReviewItemBlock = styled.ul`
      border-bottom: 1px solid #e9ecef;
      &:last-child {
        border: 0;
      }
      .review-item {
        padding: 20px 0;
        .review-user-info {
          margin-bottom: 15px;
          display: flex;
          img {
            margin-right: 15px;
            width: 24px;
            border-radius: 50%;
          }
          .review-user-name {
            align-self: center;
            margin-right: 15px;
            font-size: 15px;
            font-weight: bold;
            color: black;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
          .review-user-region {
            align-self: center;
            font-size: 13px;
          }
        }
        .review-desc {
          font-size: 15px;
          margin-bottom: 15px;
        }
        .review-time {
          font-size: 13px;
          color: #868e96;
        }
      }
    `;
    return (
      <UserReviewItemBlock>
        <li className="review-item">
          <div className="review-user-info">
            <img src={Profile} alt="review user profile" />
            <Link to="/users/1" className="review-user-name">
              하루
            </Link>
            <span className="review-user-region">도봉구 쌍문동</span>
          </div>
          <div className="review-desc">
            찾던 건데 엄청 싸게 구했어요ㅠㅅㅠ 감사합니당
          </div>
          <div className="review-time">7시간 전</div>
        </li>
      </UserReviewItemBlock>
    );
  };

  return (
    <UsersReviewBlock>
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
      <UserReviewItem />
    </UsersReviewBlock>
  );
};

export default UsersReview;
