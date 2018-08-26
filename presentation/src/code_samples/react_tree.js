export default `
/* eslint import/no-webpack-loader-syntax: off */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Slide,
  Text,
  Notes,
} from 'spectacle';

import {
  CodePane,
  Grid,
  List,
  ListItem,
  Quote,
  RainbowSlide
} from './customComponents'

// import * as RainbowSlide from './rainbowSlide'

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
    dramadary: '#16c2e2',
    codeBackground: '#282C34',
    rainbow: 'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)'
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
              Hi, today I'll be showing you why I think flutter is a better choice for developing iOS/Android apps than a javascript framework, or even the device's native language.
            </p>
            <p>
              I first heard about flutter at strangeloop and a couple things stood out to me, especially its headline features that we'll cover in a second, but I wasn't sold on it, mainly because I have never done native development before. I have been wanting to branch out from being primarily a javascript developer so, rather than doing the obvious and learning react native, I started learning flutter. I've been looking at and building the example apps for awhile now and I think it could become a dominant force in multiplatform devleopment.
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
              Flutter is a dart framework for developing apps on iOS and Android. It's currently beta but has seen a significant amount of progress in devleopment and Google says it's now ready for production.
            </p>
            <p>
              Its goal is to give developers a way to build great reactive apps, quickly. How does it do that? Let's look its big features...
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
              With zero configuration (outside installing the framework, an editor and a plugin) you will be hot reloading on both iPhone and Android devices. Reloads are fast too, often under 500ms.
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
                <ListItem>material look and feel*</ListItem>
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
              What good is super fast reloading if there's nothing to reload? Flutter comes with a standard set of material widgets that you can customzie to suit your needs. These work a lot like writing a custom react Component.
            </p>
            <p>
              Flutter's material components also adapt to working on iOS or Android automatically. You have one codebase that targets both platforms.
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
              Flutter prioritizes TDD. Setting up a new project also sets up a testing workflow with no extra effort. Flutter's tests are broken down into three types:
            </p>
          </Notes>
        </Slide>
        <Slide transition={[]} bgColor="codeBackground">
          <Heading size={5} textColor="primary" caps>
            Unit Tests
          </Heading>
          <p></p>
          <CodePane source={require("./code_samples/unit_test.dart.js").default} lang="js" />
        </Slide>
        <Slide
          transition={[]}
          bgColor="codeBackground">
          <Heading size={5} textColor="primary" caps>
            Widget Tests
          </Heading>
          <p></p>
          <CodePane source={require("./code_samples/widget_test.dart.js").default} lang="js" />
        </Slide>
        <Slide
          transition={[]}
          bgColor="codeBackground">
          <Heading size={5} textColor="primary" caps>
            Integration Tests
          </Heading>
          <p></p>
          <CodePane source={require("./code_samples/integration_test.dart.js").default} lang="js" />
        </Slide>
        <RainbowSlide transition={['slide']}>
          <div>
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
          </div>
          <Notes>
            <p>
              thanks to reasons we'll cover in a bit, the performance of a flutter app scales with device specs and if your device supports 120Hz refresh rate, flutter runs at 120FPS! It is as fast as any native app, runs on both iOS and Android from a single codebase, and has an AWESOME development environment. There's a few things that I'd like to cover before jumping into the app that get brought up a LOT when talking about flutter
            </p>
          </Notes>
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
              If you do any Googling about flutter or Dart, you're going to come across someone saying "Dart is dead".  Literally, google dart is dead and the first result is about how dart is dead. However, Dart is most certainly NOT dead. Google uses Dart and flutter extensively and Dart in particular. Due to its use on adwords, dart represents a sizeable amount of internal development codebase at Google.
            </p>
            <p>
              In addition to Adwords, Google is also developing a new operating system, codename Fushia based around flutter and Dart. They also had 6 google.io sessions for flutter this year.
            </p><p>
              Not the sort of thing you'd expect from a dead language.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="#673fb2">
          <div className="clipped"></div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <Heading className="shade" size={6} textColor="primary" fit>
            Flutter's visual design
          </Heading>
          <Text className="shade" textColor="primary" fit>
            It doesn't look like a "native" app
          </Text>
          <Text className="shade" textColor="primary" fit>
            and it's not supposed to
          </Text>
          <Notes>
            <p>
              Earlier I put an asterisk next to material look and feel. And that's because the app doesn't visually appear different from platform to platform by default. Google chose, intentionally to make their widgets conform to their own material standards as opposed to making them fit both Apple's design guideline, and their own.
            </p>
            <p>
              I believe that google is encouraging people to build interfaces that are cohesive between platforms. Whether that's just using google's material, something completely custom or something in-between.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="codeBackground" className="wide_slide">
          <Heading size={5} textColor="primary" caps>
            OMG WHY DOES THIS EXIST?!
          </Heading>
          <p></p>
          <CodePane source={require("./code_samples/big_tree.dart.js").default} lang="js" />
          <Notes>
            <p>
              One last complaint I'd like to look at is Flutter's widget tree. I took issue with this myself when I first saw it. It doesn't look particularly intuitive. especially In this example, it's not particularly easy to tell what things do, it's certainly not very dry. Why is it like this?
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="codeBackground" className="wide_slide">
          <Heading size={5} textColor="primary" caps>
            This seems familiar...
          </Heading>
          <p></p>
          <CodePane source={require("./code_samples/html_tree.html.js").default} lang="html" />
          <Notes>
            <p>
              Oh, that's interesting. When you look at it this way, it's sort of like HTML. But HTML isn't code. it's pretty static. This is where flutter's "interface as code" let's us get around writing a big tree. Since it's just classes, you can factor them out into logical pieces or simply put them in different files. Technically, there's still a tree...
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="codeBackground" className="wide_slide">
          <Heading size={5} textColor="primary" caps>
            hey! This seems FAMILAR.
          </Heading>
          <p></p>
          <CodePane source={require("./code_samples/react_tree.js").default} lang="js" />
          <Notes>
            <p>
              But when has that been an issue before?
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            But why's it fast tho?
          </Heading>
          <Notes>
            <p>
              Now that we've covered some of the most common questions about Flutter, let's
              Let's talk about WHY flutter is fast.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="40px">Flutter is the only mobile SDK that provides reactive views without requiring a JavaScript bridge. That should be enough to make Flutter interesting and worth trying</Quote>
            <Cite>Wm Leler - Senior Software Engineer at Google</Cite>
          </BlockQuote>
          <Notes>
            <p>
              This quote from Wm Leler sums it up pretty nicely...
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            But why's it fast tho?
          </Heading>
          <Notes>
            <p>
              Alright, fine, I'll show you some illustrations as well.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            OEM SDKs
          </Heading>
          <p>
            <img alt="OEM SDK" src="oemsdk.png" className="piczoom" />
          </p>
          <Notes>
            <p>
              Here we have the architecture of a native SDK. It's pretty Straightforward, your app, written in the native language of the device, talks to OEM widgets and APIs
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Reactive Views
          </Heading>
          <p>
            <img alt="Reactive views architecture diagram" src="reactiveviews.png" className="piczoom" />
          </p>
          <Notes>
            <p>
              This is an example of a reactive application architecture, such as you get from React Native. You're application is actually excecuted across a bridge that alows your javascript to interact with OEM widgets. This Javascript bridge is slow. Each side of the bridge is fast, but this bridge is a bottleneck, so you need to write your app to minimize trips over the bridge.
            </p>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Flutter's Architechture
          </Heading>
          <p>
            <img alt="Reactive views architecture diagram" src="flutterarch.png" className="piczoom" />
          </p>
          <Notes>
            <p>
              Lastly we have Flutter and you can see that things are a bit different. First, you'll notice that dart isn't in this picture. Your code is AOT compiled to native. This completely removes the need for any sort of bridge. More than that, It doesn't access OEM widgets or webviews for that matter, instead provides its own and renders straight to canvas.
            </p>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}

`;
