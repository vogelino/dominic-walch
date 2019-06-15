import { keyframes, css } from 'styled-components';

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export default css`
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-name: ${fade};
  animation-duration: 1s;
  animation-delay: 0;
  animation-timing-function: ease-in-out;
  opacity: 0;
`;
