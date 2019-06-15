import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import { Container, Portrait } from './about.css';

const About = ({ portrait, portraitTitle, title, text }) => (
  <Container>
    <Portrait
      fluid={portrait ? portrait.childImageSharp.fluid : {}}
      alt={portraitTitle}
    />
    <Title as="h2">{title}</Title>
    <p dangerouslySetInnerHTML={{ __html: text }} />
  </Container>
);

About.propTypes = {
  portrait: PropTypes.object.isRequired,
  portraitTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default About;
