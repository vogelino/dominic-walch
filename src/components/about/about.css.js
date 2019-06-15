import styled from 'styled-components';
import Img from 'gatsby-image';
import MEDIA from 'helpers/mediaTemplates';
import fadeInAnimation from 'helpers/cssFadeInAnimation';

export const Container = styled.section``;

export const Portrait = styled(Img)`
  margin-bottom: 10vmin;
  border-radius: 2px;

  ${MEDIA.TABLET`
    margin-bottom: 5vmin;
  `}

  ${fadeInAnimation}
  animation-delay: 800ms;
`;
