import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';

import qnaIcon from '../../images/qnaIcon.svg';

const QnABlock = styled.div`
  padding: 70px 0;
  background: #f8f9fa;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .question {
    font-size: 28px;
    font-weight: bold;
  }
  .qna-link-block {
    .qna-icon {
    }
    .qna-link {
      margin-left: 15px;
      font-size: 18px;
      font-weight: bold;
      color: black;
      text-decoration: none;
    }
  }
`;

const QnA = () => {
  return (
    <QnABlock>
      <Wrapper>
        <h3 className="question">궁금한 점이 있으신가요?</h3>
        <div className="qna-link-block">
          <img className="qna-icon" alt="qna icon" src={qnaIcon} />
          <a className="qna-link" href="https://www.daangn.com/wv/faqs">
            자주 묻는 질문
          </a>
        </div>
      </Wrapper>
    </QnABlock>
  );
};

export default QnA;
