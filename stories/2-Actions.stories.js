import React from 'react';
import { PrimaryButton, SecondaryButton } from '../src/actions';
import { Box, Flex } from '../src/box';
import { SmallHeading } from '../src/typography';

export default {
  title: 'Buttons',
};

export const Primary = () => (
  <Box>
    <SmallHeading>Default</SmallHeading>
    <Flex justifyContent="space-evenly" py={5} mb={5}>
      <PrimaryButton>Primary Button</PrimaryButton>
      <PrimaryButton disabled>Submitting…</PrimaryButton>
    </Flex>

    <SmallHeading>Inverted</SmallHeading>
    <Flex justifyContent="space-evenly" py={5} bg="brand03">
      <PrimaryButton inverted>Primary Button</PrimaryButton>
      <PrimaryButton inverted disabled>
        Submitting…
      </PrimaryButton>
    </Flex>
  </Box>
);

export const Secondary = () => (
  <Box>
    <SmallHeading>Default</SmallHeading>
    <Flex justifyContent="space-evenly" py={5} mb={5}>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <SecondaryButton disabled>Submitting…</SecondaryButton>
    </Flex>

    <SmallHeading>Inverted</SmallHeading>
    <Flex justifyContent="space-evenly" py={5} bg="brand03">
      <SecondaryButton inverted>Secondary Button</SecondaryButton>
      <SecondaryButton inverted disabled>
        Submitting…
      </SecondaryButton>
    </Flex>
  </Box>
);
