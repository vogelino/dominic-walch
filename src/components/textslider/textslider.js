import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Slides,
  Slide,
  SlideTitle,
  SlideContent,
  Emojis,
  Emoji,
} from './textslider.css';

const TextSlider = ({ slides = [], emojis = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Container>
      <Emojis>
        {emojis.map((emoji, idx) => (
          <Emoji
            className={idx === activeSlide ? 'active' : ''}
            key={`${emoji}-${idx}`}
            onClick={() => setActiveSlide(idx)}
            idx={idx}
          >
            {emoji}
          </Emoji>
        ))}
      </Emojis>
      <Slides>
        {slides.map(({ id, title, text }, idx) => (
          <Slide key={id} className={idx === activeSlide ? 'active' : ''}>
            <SlideTitle as="h3">{title}</SlideTitle>
            <SlideContent dangerouslySetInnerHTML={{ __html: text }} />
          </Slide>
        ))}
      </Slides>
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
