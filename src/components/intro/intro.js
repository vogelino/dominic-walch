import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Catchphrase,
  LogicalSequence,
  CallToActionButton,
} from './intro.css';

const Intro = ({ catchphrase, logicalSequence, buttonText }) => (
  <Container>
    <Catchphrase>{catchphrase}</Catchphrase>
    <LogicalSequence>{logicalSequence}</LogicalSequence>
    <CallToActionButton>{buttonText}</CallToActionButton>
  </Container>
);

Intro.propTypes = {
  catchphrase: PropTypes.string.isRequired,
  logicalSequence: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Intro;
