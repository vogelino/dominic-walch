import styled from 'styled-components';
import Title from 'components/title';

export const Container = styled.header`
  margin-bottom: 8vmin;
`;

export const LogoSvg = styled.svg`
  margin-right: 10vmin;
  float: left;
`;

export const Subtitle = styled(Title)`
  display: inline-block;
  width: 100px;
  font-size: 1rem;
  line-height: 1.45rem;
  font-weight: 300;
  padding-top: 16px;
`;
