import styled from 'styled-components';
import Title from 'components/title';
import { accent } from 'constants/theme';

export const Container = styled.section`
  max-width: 500px;
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 10vmin;
`;

export const Catchphrase = styled(Title)`
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const LogicalSequence = styled(Title)`
  margin-bottom: 1.5rem;
`;

export const CallToActionButton = styled.a`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 6px;
  background: ${accent};
  display: inline-block;
`;
