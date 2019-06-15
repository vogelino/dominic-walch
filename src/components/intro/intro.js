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
    <Catchphrase as="h2" dangerouslySetInnerHTML={{ __html: catchphrase }} />
    <LogicalSequence>{logicalSequence}</LogicalSequence>
    <CallToActionButton href="mailto:hello@betteraskwalch.com">
      {buttonText}
    </CallToActionButton>
  </Container>
);

Intro.propTypes = {
  catchphrase: PropTypes.string.isRequired,
  logicalSequence: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Intro;
