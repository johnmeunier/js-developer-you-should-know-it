// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, Slide } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

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
      <Deck transition={['zoom', 'slide']} transitionDuration={300} theme={theme} bgColor="mustard">
        <Slide>
          <Heading size={2} textColor="acajou">
            JS Developer, you should know it
          </Heading>
          <Heading size={5} textColor="white">
            Discovery of a new fashionable framework : Vanilla.js
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
