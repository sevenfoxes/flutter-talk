/* eslint import/no-webpack-loader-syntax: off */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Notes,
  CodePane,
} from 'spectacle';

import {
  Grid,
  List,
  ListItem,
  RainbowSlide,
} from './customComponents'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

CodePane.defaultProps = {
  theme: 'external',
  lineNumbers: true
}

// Require CSS
require('normalize.css');


const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#16c2e2',
    quartenary: '#CECECE',
    dramadary: '#16c2e2',
    codeBackground: '#282C34',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);


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
          <Notes>
            <p>
              Hi, today I'll be showing you why I think flutter is a better choice for developing iOS/Android apps natively than a javascript framework, or even the device's native language.
            </p>
            <p>
              I first heard about flutter at strangeloop and a couple things stood out to me, but I wasn't sold on it. The more I study it, the more exciting it looks and I think it could become the dominant force in multiplatform devleopment.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            What is it?
          </Heading>
          <Text size={6} textColor="secondary">
            Flutter is a dart framework for developing apps on iOS and Android.
          </Text>
          <Notes>
            <p>
              Flutter is a dart framework for developing apps on iOS and Android. It is rapidly moving towards a release candidate and is already on its third beta. Google says it's now ready for production.
            </p>
            <p>
              Its goal is to give developers a way to build great apps, fast. How does it do that? Let's look at some of its marquee features...
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Features
          </Heading>
          <Text textColor="secondary">
            Hot reload in milliseconds, out of the box
          </Text>
          <img alt="showing hot reloading" src="hot-reload.gif" />
          <Notes>
            <p>
              With zero configuration (outside installing the framework) you will be hot reloading on both iPhone and Android devices. The reloading is fast too, under 500ms typically.
            </p>
          </Notes>
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
              <img alt="material design example" src="material.gif" />
            </div>
          </Grid>
          <Notes>
            <p>
              Making apps that look good is pretty straightforward too. Flutter comes with a standard set of material widgets that you can change to suit your needs.
            </p>
            <p>
              They also adapt to working on iOS or Android naturally. No need to write custom widgets for each platform.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']}>
          <Heading size={6} textColor="tertiary" caps>
            Features
          </Heading>
          <Text textColor="secondary">
            Testing is a first class citizen
          </Text>
          <Notes>
            <p>
              Flutter's prioritization of testing should be of particular interest to us at Asynchrony. It comes ready to be tested with a testing library included!
            </p>
          </Notes>
        </Slide>
        <Slide transition={[]} bgColor="codeBackground">
          <Heading size={5} textColor="primary" caps>
            Unit Tests
          </Heading>
          <p></p>

          <CodePane source={require("./unit_test.dart.js").default} lang="js" />
        </Slide>
        <Slide
          transition={[]}
          bgColor="codeBackground">
          <Heading size={5} textColor="primary" caps>
            Widget Tests
          </Heading>
          <p></p>
          <CodePane source={require("./widget_test.dart.js").default} lang="js" />
        </Slide>
        <Slide
          transition={[]}
          bgColor="codeBackground">
          <CodePane source={require("./integration_test.dart.js").default} lang="js" />
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
            <Notes>
              <p>
                thanks to reasons we'll cover in a bit, the performance of a flutter app scales with device specs and if your device supports 120Hz refresh rate, flutter runs at 120FPS!
              </p>
            </Notes>
          </Slide>
        </RainbowSlide>
        <Slide transition={['slide']} bgColor="primary">
          <p>
        <img alt="I'm not dead" src="notdead.gif" />
          </p>
          <Heading size={6} textColor="secondary" fit>
            Wait, isn't dart a dead language?
          </Heading>
          <Text textColor="secondary" fit>
            The rumors of dart's demise have been greatly exaggerated
          </Text>
          <Notes>
            <p>
            If you do any Googling about flutter or Dart, you're going to come across someone saying "Dart is dead". Dart is most certainly NOT dead. Google uses Dart and flutter extensively and Dart in particular, due to its use on adwords, represents a sizeable amount of internal development.
            </p>
            <p>
            Google is also developing a new operating system codename Fushia based around flutter. and this year they had 6 google.io sessions for flutter.
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
