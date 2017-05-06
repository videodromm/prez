// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// codeslide from https://github.com/thejameskyle/spectacle-code-slide
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
//import Interactive from "../assets/interactive";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Loading from "react-loading";

const cursor = { show: true, blink: true, element: "|", hideWhenDone: true, hideWhenDoneDelay: 1000 };

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  vdlogo: require("../assets/videodromm-logo.jpg"),
  ws: require("../assets/websocket.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#220022",
  secondary: "#c9ca00"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} >
              Videodromm
            </Heading>
            <Heading size={1} fit caps textColor="secondary">
              Open source project
            </Heading>
            <Image width="40%" src={images.vdlogo}/>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>By Bruce LANE</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit>Created with</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="primary" margin={10}>
                  Cinder
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="primary" margin={10}>
                  GLSL
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="primary" margin={10}>
                  NodeJS
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="primary" margin={10}>
                  ReactJS
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={4} caps fit textColor="tertiary"><code>Setup Netdromm</code></Heading>
            <Terminal title="bruce@videodromm" output={ [
              <Typist cursor={ cursor }>git clone https://github.com/videodromm/netdromm</Typist>,
              <Typist cursor={ cursor }>npm install</Typist>,
              <Typist cursor={ cursor }>npm start</Typist>,
              <div>
                <div style={{ color: "#33B969"}}>info: Application server running on port 8088!</div>
                <div style={{ color: "#DEC612"}}>info: user connected: ::ffff:127.0.0.1</div>
                <Image width="40%" src={images.ws}/>
              </div>]}
            />
            
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
