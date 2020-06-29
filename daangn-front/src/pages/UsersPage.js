import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import UsersBlock from '../components/users/UsersContent';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const UsersPageBlock = styled.div`
  height: 110vh;
`;

const UsersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <UsersPageBlock>
      <Header />
      <UsersBlock />
      <Footer />
    </UsersPageBlock>
  );
};

export default UsersPage;
