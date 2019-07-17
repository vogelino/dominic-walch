import styled from 'styled-components';
import Title from 'components/title';
import fadeInAnimation from 'helpers/cssFadeInAnimation';

export const Container = styled.nav`
  height: 300px;
  position: relative;
`;

export const Slides = styled.ul`
  ${fadeInAnimation}
  animation-delay: 300ms;
`;

export const SlideTitle = styled(Title)``;

export const Slide = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60px;
  left: 0;
  opacity: 0;
  transition: opacity 400ms ease-in-out;
  word-break: break-word;
  overflow-wrap: break-word;

  &.active {
    opacity: 1;
  }
`;

export const Emojis = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Emoji = styled.li`
  display: inline-block;
  margin-right: 3vmin;
  font-size: 3rem;
  filter: grayscale(1);
  transition: filter 200ms ease-in-out,
    transform 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  user-select: none;
  transform: scale(0.8);
  cursor: pointer;

  ${fadeInAnimation}
  animation-delay: ${({ idx }) => idx * 100 + 400}ms;

  &.active,
  &:hover {
    filter: grayscale(0);
    transform: scale(1);
  }
`;
