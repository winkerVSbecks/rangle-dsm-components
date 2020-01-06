import React from 'react';
import { PrimaryButton } from '../src/actions';
import { Box } from '../src/box';

export default {
  title: 'Buttons',
};

export const Default = () => (
  <>
    <PrimaryButton>Primary Button</PrimaryButton>
  </>
);

export const Inverted = () => (
  <Box px={4} py={5} bg="brand03">
    <PrimaryButton inverted>Primary Button</PrimaryButton>
  </Box>
);

export const Disabled = () => (
  <>
    <PrimaryButton disabled>Submitting…</PrimaryButton>
  </>
);
