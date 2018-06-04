import styled from 'react-emotion';
import CodeSlide  from 'spectacle-code-slide';

import {
  ListItem as Li,
  List as U,
} from 'spectacle';

export const List = styled(U) `

`;

export const ListItem = styled(Li) `
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

export const RainbowSlide = styled('div') `
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800%;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  animation: rainbow 18s ease infinite;

  > div {
    left: 100vw;
  }

  @keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
`;

export const Grid = styled('div') `
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
`;
