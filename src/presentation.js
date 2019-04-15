// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  CodePane,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    white: 'white',
    pink: '#03A9FC',
    gray: '#2d2d2d',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
    howItWorks: require('./assets/howHtmlWork.svg')
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="gray">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            HTML & CSS
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
          <Heading textColor="gray">@maxkharena</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">What is HTML?</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="pink">30 y.o.</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading size={3} textColor="secondary" caps>Versions</Heading>
            <List>
                <ListItem>HTML	1991</ListItem>
                <ListItem>HTML 2.0	1995</ListItem>
                <ListItem>HTML 3.2	1997</ListItem>
                <ListItem>HTML 4.01	1999</ListItem>
                <ListItem>HTML5	2014</ListItem>
                <ListItem>HTML5.1	2016</ListItem>
            </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">How this works?</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.howItWorks.replace("/", "")} margin="0px auto 0px" width="700px" />
        </Slide>
      </Deck>
    );
  }
}
