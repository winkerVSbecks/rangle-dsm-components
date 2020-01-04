import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { Box } from '../src/box';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Box p={4}>{storyFn()}</Box>
  </ThemeProvider>
);

export default ThemeDecorator;
