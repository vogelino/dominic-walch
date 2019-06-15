import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import { Container, Slides, Slide, Emojis, Emoji } from './textslider.css';

const TextSlider = ({ slides = [], emojis = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Container>
      <Slides>
        {slides.map(({ id, title, text }, idx) => (
          <Slide key={id} className={idx === activeSlide ? 'active' : ''}>
            <Title as="h3">{title}</Title>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </Slide>
        ))}
      </Slides>
      <Emojis>
        {emojis.map((emoji, idx) => (
          <Emoji
            className={idx === activeSlide ? 'active' : ''}
            key={`${emoji}-${idx}`}
            onClick={() => setActiveSlide(idx)}
          >
            {emoji}
          </Emoji>
        ))}
      </Emojis>
    </Container>
  );
};

TextSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  emojis: PropTypes.arrayOf(PropTypes.string),
};

export default TextSlider;
