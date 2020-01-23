import styled from 'styled-components';
import fadeInAnimation from 'helpers/cssFadeInAnimation';
import { black } from 'constants/theme';

export const Container = styled.section`
  padding-top: 10vmin;
  text-align: left;
  font-size: 1rem;
  color: gray;
  display: grid;
  grid-template-columns: 2rem 2rem auto;
  grid-gap: 1.5rem;
  align-items: center;

  ${fadeInAnimation}
  animation-delay: 1000ms;

  a {
    color: gray;
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${black};
    }
  }
`;

export const TelegramLogo = styled.a`
  display: inline-block;

  & > svg path {
    fill: grey;
    transition: fill 200ms ease-in-out;
  }

  &:hover > svg path {
    fill: #27a7e5;
  }
`;

export const LinkedInLogo = styled.a`
  display: inline-block;

  & > svg path {
    fill: grey;
    transition: fill 200ms ease-in-out;
  }

  &:hover > svg path {
    fill: #0090c1;
  }
`;
