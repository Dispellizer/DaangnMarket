import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import UsersBlock from '../components/users/UsersContent';
import Footer from '../components/common/Footer';

const UsersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <UsersBlock />
      <Footer />
    </>
  );
};

export default UsersPage;
