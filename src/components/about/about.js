import React from 'react';
import PropTypes from 'prop-types';
import { Container, Portrait } from './about.css';

const About = ({ portrait, portraitTitle }) => (
  <Container>
    <Portrait
      fluid={portrait ? portrait.childImageSharp.fluid : {}}
      alt={portraitTitle}
    />
  </Container>
);

About.propTypes = {
  portrait: PropTypes.object.isRequired,
  portraitTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default About;
