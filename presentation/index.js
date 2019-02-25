// Import React
import React from "react";
import { Deck, Heading, Slide, List, ListItem, BlockQuote, Quote, Cite } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import CodeSlide from "spectacle-code-slide";

import "prismjs/themes/prism-okaidia.css";
import "./index.css";

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    mustard: "#FFC857",
    ochre: "#E9724C",
    cardinal: "#C5283D",
    acajou: "#481D24",
    blue: "#255F85",
    white: "#fff"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={300} theme={theme} bgColor="mustard">
        <Slide>
          <Heading size={2} textColor="acajou">
            JS Developer, you should know it
          </Heading>
          <Heading size={5} textColor="white">
            Discovery of a new fashionable framework : Vanilla.js
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor="acajou">
            {"{Object}"}
          </Heading>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require("raw-loader!../assets/codes/object.example")}
          ranges={require("./loc/object.json")}
        />
        <Slide>
          <Heading size={1} textColor="acajou">
            {"[Array]"}
          </Heading>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require("raw-loader!../assets/codes/array.example")}
          ranges={require("./loc/array.json")}
        />
        <Slide>
          <Heading size={1} textColor="acajou">
            {"function()"}
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            {"function()"}
          </Heading>
          <Heading size={5} textColor="acajou">
            pure
          </Heading>
          <List>
            <ListItem>No side effects</ListItem>
            <ListItem>Its result depends only on his parameters</ListItem>
          </List>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require("raw-loader!../assets/codes/pure.example")}
          ranges={require("./loc/pure.json")}
        />
        <Slide>
          <Heading size={4} textColor="acajou">
            {"function()"}
          </Heading>
          <Heading size={5} textColor="acajou">
            pure
          </Heading>
          <List>
            <ListItem>Immutability (~50% less debug)</ListItem>
            <ListItem>Pragmatic</ListItem>
            <ListItem>Simplify test</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            {"function()"}
          </Heading>
          <Heading size={5} textColor="acajou">
            currying
          </Heading>
          <BlockQuote>
            <Quote>
              There is a way to reduce functions of more than one argument to functions of one argument, a way called
              currying
            </Quote>
            <Cite>Handbook of the History of Logic - Volume 5</Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require("raw-loader!../assets/codes/currying-basic.example")}
          ranges={require("./loc/currying-basic.json")}
        />
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require("raw-loader!../assets/codes/currying-avoid.example")}
          ranges={require("./loc/currying-avoid.json")}
        />
      </Deck>
    );
  }
}
