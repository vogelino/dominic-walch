import styled from 'styled-components';
import Title from 'components/title';
import fadeInAnimation from 'helpers/cssFadeInAnimation';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  margin-bottom: 5vmin;
  ${MEDIA.PHONE`
    margin-bottom: 8vmin;
  `};
`;

export const LogoSvg = styled.svg`
  margin-right: 5vmin;
  float: left;

  ${fadeInAnimation}

  ${MEDIA.PHONE`
    width: 150px;
    margin-right: 5vmin;
  `};
`;

export const Subtitle = styled(Title)`
  display: inline-block;
  width: 100px;
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  padding-top: 16px;

  & > span {
    display: inline-block;
    ${fadeInAnimation}
    animation-delay: 50ms;
  }
`;
