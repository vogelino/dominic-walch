import styled from 'styled-components';
import fadeInAnimation from 'helpers/cssFadeInAnimation';
import { black } from 'constants/theme';

export const Container = styled.section`
  padding-top: 10vmin;
  text-align: left;
  font-size: 1rem;
  color: gray;

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
