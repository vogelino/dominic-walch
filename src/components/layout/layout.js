import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/head';
import GlobalStyle from 'global.css.js';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Head />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
