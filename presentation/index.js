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
  secondary: "#c9ca00",
  tertiary: "yellow",
  quartenary: "red"
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
            <Image width="40%" src={images.vdlogo} />
            <Text textSize="1.5em" margin="20px 0px 0px" bold>By Bruce LANE</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Created with</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  Cinder
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  GLSL
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  NodeJS
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  ReactJS
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Why C++ ?</Heading>
            <List>
              <ListItem>Maximum performance!</ListItem>
              <ListItem>low level direct hardware access</ListItem>
              <ListItem>multimedia (video, graphics, audio)</ListItem>
              <ListItem>libraries for network, MIDI, OSC, etc.</ListItem>
              <ListItem>40 years of C/C++ code</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Cinder uses OpenGL to use the resources of the graphics card (GPU, memory).<br />
              </Quote>
              <Cite>CPU can be used for other tasks</Cite>
            </BlockQuote>
            <Image width="70%" src={images.opengl} />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Installation Windows - Mac - Linux</Heading>
            <List>
              <ListItem>launch cmd (Win+R cmd) or terminal</ListItem>
              <ListItem>cd Documents</ListItem>
              <ListItem>git clone --recursive https://github.com/cinder/Cinder</ListItem>
              <ListItem>cd Cinder</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" caps>Cinder - compilation on windows</Heading>
            <List>
              <ListItem>Explorer: go to Cinder/proj/vc2015</ListItem>
              <ListItem>open cinder.sln</ListItem>
              <ListItem>build debug and release versions: cinder.lib is generated</ListItem>
              <ListItem>Explorer: Cinder/samples/basicApp/vc2013</ListItem>
              <ListItem>open basicApp.sln</ListItem>
              <ListItem>run basicApp</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Cinder - compilation on mac</Heading>
            <List>
              <ListItem>terminal: go to Cinder/proj/xcode</ListItem>
              <ListItem>run ./full_build.sh</ListItem>
              <ListItem>cinder.a is generated</ListItem>
              <ListItem>Finder: Cinder/samples/basicApp/xcode</ListItem>
              <ListItem>open basicApp.xcodeproj</ListItem>
              <ListItem>run basicApp</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" caps>Cinder - compilation on linux</Heading>
            <List>
              <ListItem>terminal: go to Cinder/</ListItem>
              <ListItem>mkdir build && cd build</ListItem>
              <ListItem>cmake ..</ListItem>
              <ListItem>make -j 8</ListItem>
              <ListItem>cd samples/BasicApp/proj/cmake</ListItem>
              <ListItem>mkdir build && cd build</ListItem>
              <ListItem>cmake ..</ListItem>
              <ListItem>make -j 8</ListItem>
              <ListItem>run ./Debug/BasicApp/BasicApp</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade", "slide"]} bgColor="primary">
            <Heading size={4} caps fit textColor="tertiary"><code>Setup Videodromm</code></Heading>
            <Terminal title="bruce@videodromm" output={[
              <Typist cursor={cursor}>cd Cinder</Typist>,
              <Typist cursor={cursor}>cd ..</Typist>,
              <Typist cursor={cursor}>mkdir videodromm</Typist>,
              <Typist cursor={cursor}>cd videodromm</Typist>,
              <Typist cursor={cursor}>git clone https://github.com/videodromm/videodromm-livecoding-cinder</Typist>,
              <Typist cursor={cursor}>cd videodromm-livecoding-cinder</Typist>,
              <Typist cursor={cursor}>./install.sh</Typist>,
              <div style={{ color: "#33B969" }}>all projects are now available locally, ready to compile!</div>
            ]}
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Now compile with</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  Visual Studio (Windows)
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  XCode (MAC)
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="black" margin={10}>
                  CMake (LINUX)
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={4} caps fit textColor="tertiary"><code>Setup Netdromm</code></Heading>
            <Terminal title="bruce@videodromm" output={[
              <Typist cursor={cursor}>git clone https://github.com/videodromm/netdromm</Typist>,
              <Typist cursor={cursor}>npm install</Typist>,
              <Typist cursor={cursor}>npm start</Typist>,
              <div>
                <div style={{ color: "#33B969" }}>info: Application server running on port 8088!</div>
                <div style={{ color: "#DEC612" }}>info: user connected: ::ffff:127.0.0.1</div>
                <Image width="40%" src={images.ws} />
              </div>]}
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Credits</Heading>
            <List>
              <ListItem><a target="_blank" href="https://github.com/patriciogonzalezvivo/glslEditor">glsl editor</a> by Patricio Gonzalez Vivo</ListItem>
              <ListItem><a target="_blank" href="https://github.com/shawnlawson/The_Force/">the_Force</a> by Shawn Lawson</ListItem>
              <ListItem>Samer Buna, Eve Porcello and Alex Banks for their react/nodejs courses on <a target="_blank" href="https://www.linkedin.com/learning/">LinkedIn</a></ListItem>
              <ListItem>Omar Cornut for imgui</ListItem>
              <ListItem>Paul Houx for Cinder-Warping</ListItem>
              <ListItem>All the friends from the Cinder and openFrameworks projects</ListItem>
              </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
