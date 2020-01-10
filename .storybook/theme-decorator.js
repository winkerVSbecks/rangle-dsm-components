import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../src/theme';
import { Box } from '../src/box';

import RiformaRegularWOFF2 from '../public/fonts/RangleRiformaWeb-Regular.woff2';
import RiformaRegularWOFF from '../public/fonts/RangleRiformaWeb-Regular.woff';
import RiformaLightWOFF2 from '../public/fonts/RangleRiformaWeb-Light.woff2';
import RiformaLightWOFF from '../public/fonts/RangleRiformaWeb-Light.woff';
import RiformaMediumWOFF2 from '../public/fonts/RiformaLL-Medium.woff2';
import RiformaMediumWOFF from '../public/fonts/RiformaLL-Medium.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'LL Riforma';
  src: url(${RiformaLightWOFF2}) format('woff2'),
    url(${RiformaLightWOFF}) format('woff');
  font-weight: 300;
  font-display: block;
  font-style: normal;
}

@font-face {
  font-family: 'LL Riforma';
  src: url(${RiformaRegularWOFF2}) format('woff2'),
    url(${RiformaRegularWOFF}) format('woff');
  font-weight: 400;
  font-display: block;
  font-style: normal;
}

@font-face {
  font-family: 'LL Riforma';
  src: url(${RiformaMediumWOFF2}) format('woff2'),
    url(${RiformaMediumWOFF}) format('woff');
  font-weight: 500;
  font-display: block;
  font-style: normal;
}
`;

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Box p={4}>{storyFn()}</Box>
    </>
  </ThemeProvider>
);

export default ThemeDecorator;
