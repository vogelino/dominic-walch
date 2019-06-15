import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from './footer.css';
import { Link } from 'gatsby';

const Footer = () => (
  <Container>
    © {new Date().getFullYear()} – Dominic Walch
    <br />
    <Link to="/impressum">Impressum</Link>
  </Container>
);

Footer.propTypes = {};

export default Footer;
