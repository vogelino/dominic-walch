import styled from 'styled-components';
import Title from 'components/title';
import { black, accent } from 'constants/theme';
import fadeInAnimation from 'helpers/cssFadeInAnimation';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 8vmin;

  ${MEDIA.PHONE`
    margin-bottom: 20vmin;
  `};
`;

export const Catchphrase = styled(Title)`
  font-weight: 500;

  ${fadeInAnimation}
  animation-delay: 150ms;
`;

export const LogicalSequence = styled(Title)`
  margin-bottom: 1.5rem;

  ${fadeInAnimation}
  animation-delay: 200ms;
`;

export const CallToActionButton = styled.a`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  padding: 1rem 1.25rem;
  background: ${accent};
  color: white;
  text-decoration: none;
  display: inline-block;
  transition: color 200ms ease-in-out, background 200ms ease-in-out;

  &:hover {
    color: ${accent};
    background: ${black};
  }

  ${fadeInAnimation}
  animation-delay: 250ms;
`;
