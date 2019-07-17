import React, { useState, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Slides,
  Slide,
  SlideTitle,
  Emojis,
  Emoji,
} from './textslider.css';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const TextSlider = ({ slides = [], emojis = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      const nextSlide =
        activeSlide + 1 > slides.length - 1 ? 0 : activeSlide + 1;
      setActiveSlide(nextSlide);
    },
    isRunning ? 3000 : null
  );

  const onEmojiClick = idx => {
    setIsRunning(false);
    setActiveSlide(idx);
  };

  return (
    <Container>
      <Emojis>
        {emojis.map((emoji, idx) => (
          <Emoji
            className={idx === activeSlide ? 'active' : ''}
            key={`${emoji}-${idx}`}
            onClick={() => onEmojiClick(idx)}
            idx={idx}
          >
            {emoji}
          </Emoji>
        ))}
      </Emojis>
      <Slides>
        {slides.map(({ id, title, textLines }, idx) => (
          <Slide
            key={id}
            className={
              idx === activeSlide || (!activeSlide && idx === 0) ? 'active' : ''
            }
          >
            <SlideTitle as="h3">{title}</SlideTitle>
            <p>
              {textLines.map(({ id, text }) => {
                if (id === 'email') {
                  return (
                    <a key={id} href={`mailto:${text}`}>
                      {text}
                    </a>
                  );
                }
                if (!text.trim())
                  return (
                    <Fragment key={id}>
                      <br />
                    </Fragment>
                  );
                return <div key={id}>{text}</div>;
              })}
            </p>
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
      textLines: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ),
  emojis: PropTypes.arrayOf(PropTypes.string),
};

export default TextSlider;
