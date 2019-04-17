// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  CodePane,
  ListItem,
  List,
  Slide,
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
    howItWorks: require('./assets/img/howHtmlWork.svg'),
    house: require('./assets/img/house.png'),
    hollyGrailHtml: require('./assets/img/hollyGrailHtml.png'),
    tag: require('./assets/img/tag.gif'),
    form: require('./assets/img/form.png'),
    table: require('./assets/img/table.png'),
    noviewport: require('./assets/img/noviewport.png'),
    viewport: require('./assets/img/viewport.png'),
    css: require('./assets/img/css.png'),
    lorem: require('./assets/img/lorem.png'),
    block: require('./assets/img/block.png'),
    flex: require('./assets/img/flex/displayFlex.gif'),
    axis: require('./assets/img/flex/axis.png'),
    flexDirection: require('./assets/img/flex/flexRow.gif'),
    columnReverse: require('./assets/img/flex/columnReverse.gif'),
    justifyContent: require('./assets/img/flex/justifyContent.gif'),
    alignItems: require('./assets/img/flex/alignItems.gif'),
    flexAxis: require('./assets/img/flex/flexAxis.gif'),
    alignSelf: require('./assets/img/flex/alignSelf.gif'),
    flexBasis: require('./assets/img/flex/flexBasisColumn.gif'),
    flexGrow: require('./assets/img/flex/flexGrow.gif'),
    flexShrink: require('./assets/img/flex/flexShrink.gif'),
    flexShrink2: require('./assets/img/flex/flexShrink2.gif'),
    justFlex: require('./assets/img/flex/justFlex.gif'),
    homework: require('./assets/img/flex/homework.png'),
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
        <Slide transition={['zoom']} bgColor="white">
            <Heading size={3} textColor="secondary" caps>Versions</Heading>
            <List>
                <ListItem>HTML	1991</ListItem>
                <ListItem>HTML 2.0	1995</ListItem>
                <ListItem>HTML 3.2	1997</ListItem>
                <ListItem>HTML 4.01	1999</ListItem>
                <ListItem>HTML5	2014</ListItem>
                <ListItem>HTML5.1	2016</ListItem>
                <ListItem>HTML5.2	2017</ListItem>
            </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">How this works?</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.howItWorks.replace("/", "")} margin="0px auto 0px" width="700px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">More than just a "markup"</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="white"> 
                <span role="img" aria-label="">
                    🎥🎙📷
                </span>
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">
                Semantic & tags
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.tag.replace("/", "")} margin="0px auto 0px" width="700px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.house.replace("/", "")} margin="0px auto 0px" width="900px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.hollyGrailHtml.replace("/", "")} margin="0px auto 0px" width="900px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="jsx"
                theme="external"
                margin="20px 250px; auto"
                textSize="2rem"
                source={require("./assets/code/init.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="jsx"
                theme="external"
                margin="20px 200px; auto"
                textSize="1.5rem"
                source={require("./assets/code/dirtyHtml.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">Divide and rule</Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="jsx"
                theme="external"
                margin="20px 150px; auto"
                textSize="2rem"
                source={require("./assets/code/clearHtml.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">
                Form
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="html"
                theme="external"
                margin="20px auto"
                textSize="1.5rem"
                source={require("./assets/code/form.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="html"
                theme="external"
                margin="20px auto"
                textSize="1.5rem"
                source={require("./assets/code/formNext.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">
                Table
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="html"
                theme="external"
                margin="0 200px auto"
                textSize="1.5rem"
                source={require("./assets/code/table.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.table.replace("/", "")} margin="0px auto 0px" width="900px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">
                    Viewport
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="html"
                theme="external"
                margin="0 25px auto"
                textSize="1.8rem"
                source={require("./assets/code/viewport.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.noviewport.replace("/", "")} margin="0px auto 0px" width="400px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.viewport.replace("/", "")} margin="0px auto 0px" width="400px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Heading textColor="gray">
               viewportsizes.com
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.css.replace("/", "")} margin="0px auto 0px" width="500px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                Selectors
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="css"
                theme="external"
                margin="0 120px auto"
                textSize="1.8rem"
                source={require("./assets/code/selectors.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="css"
                theme="external"
                margin="0 120px auto"
                textSize="1.8rem"
                source={require("./assets/code/selectorSpecify.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                batificity.com
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                Box model
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <CodePane
                lang="html"
                theme="external"
                margin="0 120px auto"
                textSize="1.5rem"
                source={require("./assets/code/box.txt")}
            />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.lorem.replace("/", "")} margin="0px auto 0px" width="600px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.block.replace("/", "")} margin="0px auto 0px" width="600px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                Flexbox
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="o"
                textSize="1.5rem"
                source={require("./assets/code/flex.txt")}
            />
            <Image src={images.flex.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                Flex axis
            </Heading>
            <Image src={images.axis.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="o"
                textSize="1.5rem"
                source={require("./assets/code/flexDirection.txt")}
            />
            <Image src={images.flexDirection.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="o"
                textSize="1.5rem"
                source={require("./assets/code/rowReverse.txt")}
            />
            <Image src={images.columnReverse.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="o"
                textSize="1.5rem"
                source={require("./assets/code/justifyContent.txt")}
            />
            <Image src={images.justifyContent.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="0"
                textSize="1.5rem"
                source={require("./assets/code/alignItems.txt")}
            />
            <Image src={images.alignItems.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.flexAxis.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="0"
                textSize="1.5rem"
                source={require("./assets/code/alignSelf.txt")}
            />
            <Image src={images.alignSelf.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="0"
                textSize="1.5rem"
                source={require("./assets/code/flexBasis.txt")}
            />
            <Image src={images.flexBasis.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.flexGrow.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.flexShrink.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <Image src={images.flexShrink2.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="white">
            <CodePane
                lang="css"
                theme="external"
                margin="0"
                textSize="1.5rem"
                source={require("./assets/code/flexCombine.txt")}
            />
            <Image src={images.justFlex.replace("/", "")} margin="0px auto 0px" width="100%" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                Homework
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Image src={images.homework.replace("/", "")} margin="0px auto 0px" width="500px" />
        </Slide>
        <Slide transition={['zoom']} bgColor="gray">
            <Heading textColor="white">
                Thx <span role="img" aria-label="">😸</span>
            </Heading>
        </Slide>
      </Deck>
    );
  }
}
