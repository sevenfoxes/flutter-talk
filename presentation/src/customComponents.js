import styled from 'react-emotion';
import { Slide } from 'spectacle';

import {
  CodePane as Cp,
  ListItem as Li,
  List as U,
  Quote as Q,
} from 'spectacle';

Cp.defaultProps = {
  theme: 'external',
  lineNumbers: true
}

export const CodePane = styled(Cp)`
  font-family: "Fira Code" !important;
`

export const List = styled(U)`

`;

export const Quote = styled(Q)`
  font-size: 3rem;
  font-weight: normal;
  font-style: italic;
  line-height: 1.3;
`;

export const ListItem = styled(Li)`
  list-style-type: none;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2rem;

  &:before {
    background: currentColor;
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 10px;
    transform: translateY(-50%);
    position: absolute;
    left: 0;
    top: .6em;
    width: 10px;
  }
`;

export const RainbowSlide = styled(Slide)`
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800%;
  position: fixed;
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  left: 0;
  scale: 1;
  zoom: 0;
  padding: 0 10%;
  animation: rainbow 20s linear infinite;

  > * {
    transform: translateY(20%);
  }


  @keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
 }
`

export const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
`;
