// Import React
import React from 'react';
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem as Li,
  List as U,
  Quote,
  Slide,
  Text,
  Notes,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#16c2e2',
    quartenary: '#CECECE',
    dramadary: '#16c2e2'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const List = styled(U)`

`;

const ListItem = styled(Li)`
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

const RainbowSlide = styled('div')`
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

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgImage="star-zoom.png" bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Flutter
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            to the Future
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            The performant alternative to react native
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            What is it?
          </Heading>
          <Text size={6} textColor="secondary">
            Flutter is a dart framework for developing apps on iOS and Android.
          </Text>

        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Features
          </Heading>
          <Text textColor="secondary">
            Hot reload in milliseconds, out of the box
          </Text>
          <img src="hot-reload.gif" />
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Grid>
            <div className="col">
              <Heading size={6} textColor="primary" textAlign="left" caps>
              Features
              </Heading>
              <Text textColor="secondary" textAlign="left">
              Expressive and Flexible UI
              </Text>
              <List textAlign="left">
                <ListItem>Native look and feel</ListItem>
                <ListItem>Material widget library included</ListItem>
                <ListItem>Straightforward customization</ListItem>
              </List>
            </div>
            <div className="col">
              <img src="material.gif" />
            </div>
          </Grid>
        </Slide>
        <RainbowSlide>
          <Slide transition={['slide']} bgColor="transparent">
            <Heading size={6} textColor="primary" caps>
              FEATURES
            </Heading>
            <Heading size={1} textColor="secondary" fit caps>
              Native
            </Heading>
            <Heading size={1} textColor="secondary" fit caps>
              performance
            </Heading>
            <Text textColor="secondary" fit caps>
             frame rates as high as 120FPS!
            </Text>
          </Slide>
        </RainbowSlide>
        <Slide transition={['slide']} bgColor="primary">
          <p>
        <img src="notdead.gif" />
          </p>
          <Heading size={6} textColor="secondary" fit>
            Wait, isn't dart a dead language?
          </Heading>
          <Text textColor="secondary" fit>
            The rumors of dart's demise have been greatly exaggerated
          </Text>
          <Notes>
            <p>
            I want to take a moment and put a particularly silly rumor going around the internet. Dart is most certainly NOT dead. Google uses Dart and flutter extensively and Dart in particular, due to its use on adwords, represents a sizeable amount of internal development.
            </p>
            <p>
            Google is also developing a new operating system codename Fushia based around flutter.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
