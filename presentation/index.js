// Import React
import React from 'react';
import { Deck, Heading, Slide, List, ListItem, BlockQuote, Quote, Cite, Image, Code } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';

import Profile from './profiles';
import Twitter from './twitter';

import 'prismjs/themes/prism-okaidia.css';
import './index.css';

import conf from './conf.js';
const { displayMinor } = conf;

const images = {
  consoleGroup: require('../assets/img/console-group.png'),
  consoleTable1: require('../assets/img/console-table1.png'),
  consoleTable2: require('../assets/img/console-table2.png'),
  consoleTable3: require('../assets/img/console-table3.png'),
  consoleTable4: require('../assets/img/console-table4.png'),
  john: require('../assets/img/john.jpg'),
  jl: require('../assets/img/jl.jpg'),
  lille: require('../assets/img/lille.jpg'),
  promise: require('../assets/img/promise.gif'),
  label: require('../assets/img/label.jpg'),
  badass: require('../assets/img/badass.gif'),
  fear: require('../assets/img/fear.gif'),
  withFramework: require('../assets/img/withFramework.gif')
};

preloader({
  consoleGroup: images.consoleGroup,
  consoleTable1: images.consoleTable1,
  consoleTable2: images.consoleTable2,
  consoleTable3: images.consoleTable3,
  consoleTable4: images.consoleTable4,
  john: images.john,
  jl: images.jl,
  lille: images.lille,
  promise: images.promise,
  badass: images.badass,
  fear: images.fear,
  withFramework: images.withFramework
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    mustard: '#FFC857',
    ochre: '#E9724C',
    cardinal: '#C5283D',
    acajou: '#481D24',
    blue: '#255F85',
    white: '#fff'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} bgColor="mustard">
        <Slide bgImage={images.lille}>
          <Heading size={2} textColor="mustard">
            JS Developer, you should know it
          </Heading>
          {displayMinor && <Heading size={6} textColor="white">
            Discovery of a new fashionable framework : Vanilla.js
          </Heading>}
          <Twitter />
        </Slide>
        <Profile
          name="Johnathan MEUNIER"
          job="FullStack Engineer JS"
          website="Johnathan.fr"
          twitter="j7n_ _"
          github="johnmeunier"
          pic={images.john}
        />
        <Profile
          name="Jean-Lou PIERME"
          job="FullStack Software Engineer"
          website="jlou.fr"
          twitter="jloupiote"
          github="jlou"
          pic={images.jl}
        />
        {displayMinor && <>
        <Slide bgImage={images.withFramework} />
        <Slide bgImage={images.fear} />
        <Slide>
          <Heading size={4} textColor="acajou">Vanilla.JS</Heading>
          <iframe src="http://vanilla-js.com/" width="100%" height="600px" />
        </Slide> </>}
        <Slide bgColor="acajou" textColor="mustard">
          <Heading size={1}>{'{Object}'}</Heading>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/object.example')}
          ranges={require('./loc/object.json')}
        />
        <Slide bgColor="acajou" textColor="mustard">
          <Heading size={1}>{'[Array]'}</Heading>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/array.example')}
          ranges={require('./loc/array.json')}
        />
        <Slide bgColor="acajou" textColor="mustard">
          <Heading size={1}>{'function()'}</Heading>
        </Slide>
        <Slide textColor="acajou">
          <Heading size={4} textColor="acajou">
            {'function()'}
          </Heading>
          <Heading size={5} textColor="acajou">
            pure
          </Heading>
          <List>
            <ListItem>No side effects</ListItem>
            <ListItem>Deterministic: its result depends only on his parameters</ListItem>
          </List>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/pure.example')}
          ranges={require('./loc/pure.json')}
        />
        <Slide textColor="acajou">
          <Heading size={4} textColor="acajou">
            {'function()'}
          </Heading>
          <Heading size={5} textColor="acajou">
            pure
          </Heading>
          <List>
            <ListItem>Immutability (~50% less debug)</ListItem>
            <ListItem>Pragmatic</ListItem>
            <ListItem>Simplify tests</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            {'function()'}
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
          code={require('raw-loader!../assets/codes/currying-basic.example')}
          ranges={require('./loc/currying-basic.json')}
        />
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/currying-avoid.example')}
          ranges={require('./loc/currying-avoid.json')}
        />
        <Slide textColor="acajou">
          <Heading size={4} textColor="acajou">
            {'function()'}
          </Heading>
          <Heading size={5} textColor="acajou">
            Higher-order function
          </Heading>
          <List>
            <ListItem>Takes one or more functions as arguments</ListItem>
            <ListItem>Returns a function as its result</ListItem>
          </List>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/hof-add.example')}
          ranges={require('./loc/hof-add.json')}
        />
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/hof-safe.example')}
          ranges={require('./loc/hof-safe.json')}
        />

        <Slide bgColor="acajou" textColor="mustard">
          <Heading size={1}>{'(.O{the}rs[])'}</Heading>
        </Slide>
        {displayMinor && <>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/label.example')}
          ranges={require('./loc/label.json')}
        />
        <Slide>
          <Heading size={4} textColor="acajou">Label result</Heading>
          <Image src={images.label} />
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/block.example')}
          ranges={require('./loc/block.json')}
        />
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/fetch.example')}
          ranges={require('./loc/fetch.json')}
        />
        <Slide>
          <Heading size={4} textColor="acajou">
            Promise
          </Heading>
          <Image src={images.promise} height="600px" />
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/promises.example')}
          ranges={require('./loc/promises.json')}
        />
        </>}
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/expressions.example')}
          ranges={require('./loc/expressions.json')}
        />
        {displayMinor && <>
        <Slide bgColor="acajou" textColor="mustard">
          <Heading size={1}>One more thing ...</Heading>
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/console-group.example')}
          ranges={require('./loc/console-group.json')}
        />
        <Slide>
          <Heading size={4} textColor="acajou">
            console.group()
          </Heading>
          <Image src={images.consoleGroup} height="600px" />
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            console.table()
          </Heading>
          <Image src={images.consoleTable1} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            console.table()
          </Heading>
          <Image src={images.consoleTable2} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            console.table()
          </Heading>
          <Image src={images.consoleTable3} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            console.table()
          </Heading>
          <Image src={images.consoleTable4} />
        </Slide>
        <CodeSlide
          className="codeSlide--john"
          lang="js"
          code={require('raw-loader!../assets/codes/console-time.example')}
          ranges={require('./loc/console-time.json')}
        />
        <Slide>
          <Heading size={4} textColor="acajou">
            Copy
          </Heading>
          <video width="100%" controls src={require('file-loader!../assets/video/copy.mp4')}>
            Fallback
          </video>
        </Slide>
        <Slide>
          <Heading size={4} textColor="acajou">
            Live Expression
          </Heading>
          <video width="100%" controls src={require('file-loader!../assets/video/liveExpression.mp4')} />
        </Slide>
        <Slide bgImage={images.badass} />
        </>}
        <Slide bgImage={images.lille}>
          <Heading size={6} textColor="#fff">
            JS Developer, you should know it
          </Heading>
          <Heading textColor="mustard" fit>
            Thanks!
          </Heading>
          <Twitter />
        </Slide>
      </Deck>
    );
  }
}
