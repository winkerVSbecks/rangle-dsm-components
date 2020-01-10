import React from 'react';
import { PrimaryButton, SecondaryButton } from '../src/actions';
import { Box, Flex } from '../src/box';
import { Heading } from '../src/typography';

export default {
  title: 'Actions|Buttons',
};

export const PrimaryButtonStory = () => (
  <Box>
    <Heading type="small">Default</Heading>
    <Flex justifyContent="space-evenly" py={5} mb={5}>
      <PrimaryButton>Primary Button</PrimaryButton>
      <PrimaryButton disabled>Submitting…</PrimaryButton>
    </Flex>

    <Heading type="small">Inverted</Heading>
    <Flex justifyContent="space-evenly" py={5} bg="brand03">
      <PrimaryButton inverted>Primary Button</PrimaryButton>
      <PrimaryButton inverted disabled>
        Submitting…
      </PrimaryButton>
    </Flex>
  </Box>
);

PrimaryButtonStory.story = {
  name: 'PrimaryButton',
  parameters: {
    'in-dsm': {
      component: PrimaryButton,
      componentPath: '../src/actions',
      id: '5df93bc254036e7aad8a6015',
      versionFilePath: '../version-file.json',
    },
  },
};

export const SecondaryButtonStory = () => (
  <Box>
    <Heading type="small">Default</Heading>
    <Flex justifyContent="space-evenly" py={5} mb={5}>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <SecondaryButton disabled>Submitting…</SecondaryButton>
    </Flex>

    <Heading type="small">Inverted</Heading>
    <Flex justifyContent="space-evenly" py={5} bg="brand03">
      <SecondaryButton inverted>Secondary Button</SecondaryButton>
      <SecondaryButton inverted disabled>
        Submitting…
      </SecondaryButton>
    </Flex>
  </Box>
);

SecondaryButtonStory.story = {
  name: 'SecondaryButton',
  parameters: {
    'in-dsm': {
      component: SecondaryButton,
      componentPath: '../src/actions',
      id: '5df95c6a42128546c04f74fe',
      versionFilePath: '../version-file.json',
    },
  },
};
