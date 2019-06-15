import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  ${({ fw = '' }) => fw && `font-weight: ${fw};`}
  ${({ pl = '' }) => pl && `padding-left: ${pl};`}

  /* ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `}; */
`;
