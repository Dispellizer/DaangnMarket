import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import itemPhoto from '../../images/itemPhoto.jpg';

const Item = () => {
  const ItemWrapp = styled.div`
    margin-bottom: 40px;
    .item-link {
      display: flex;
      flex-direction: column;
      width: 211px;
      height: 298px;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      color: black;
      text-decoration: none;
      &:hover {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
      }
      .item-photo {
        background-image: url(${itemPhoto});
        background-size: cover;
        border-radius: 8px 8px 0 0;
        width: 211px;
        height: 160px;
      }
      .item-desc {
        margin: 16px 16px 0;
        .item-title {
          font-size: 17px;
          font-weight: bold;
          margin-bottom: 9px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-region {
          font-size: 15px;
          color: #868e96;
          margin-bottom: 11px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-price {
          font-size: 15px;
          font-weight: bold;
          padding-bottom: 11px;
          border-bottom: 1px solid #e9ecef;
          color: #ff8a3d;
        }
        .item-count {
          font-size: 13px;
          color: #adb5bd;
          padding: 15px 0;
          span + span::before {
            content: ' ∙ ';
          }
        }
      }
    }
  `;

  return (
    <ItemWrapp>
      <Link to="/articles" className="item-link">
        <div className="item-photo"> </div>
        <div className="item-desc">
          <h2 className="item-title">과학뒤집기 40권</h2>
          <div className="item-region">경기도 용인시 수지구 동천동</div>
          <div className="item-price">50,000원</div>
          <div className="item-count">
            <span>관심 5</span>
            <span>채팅 40</span>
          </div>
        </div>
      </Link>
    </ItemWrapp>
  );
};

export default Item;
