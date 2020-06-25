import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
