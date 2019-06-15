import styled from 'styled-components';

export const Container = styled.nav`
  max-width: 500px;
  height: 240px;
  position: relative;
`;

export const Slides = styled.ul``;

export const Slide = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 400ms ease-in-out;

  &.active {
    opacity: 1;
  }
`;

export const Emojis = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Emoji = styled.li`
  display: inline-block;
  margin-right: 2rem;
  font-size: 3rem;
  filter: grayscale(1);
  transition: filter 200ms ease-in-out,
    transform 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  user-select: none;
  transform: scale(0.8);
  cursor: pointer;

  &.active,
  &:hover {
    filter: grayscale(0);
    transform: scale(1);
  }
`;
