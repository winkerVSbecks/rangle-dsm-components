import React from 'react';
import {
  ExtraLargeHeading,
  LargeHeading,
  MediumHeading,
  SmallHeading,
  LargeCTA,
  SmallCTA,
  ListLink,
  Breadcrumb,
  Caption,
  Body,
  EditorialText,
  QuoteText,
} from '../src/typography';
import { Box } from '../src/box';

export default {
  title: 'Typography',
  component: ExtraLargeHeading,
};

export const Headings = () => (
  <>
    <ExtraLargeHeading>Extra Large Heading</ExtraLargeHeading>
    <LargeHeading>Large Heading</LargeHeading>
    <MediumHeading>Medium Heading</MediumHeading>
    <SmallHeading>Small Heading</SmallHeading>
  </>
);

export const ExtraLargeHeadingStory = () => (
  <>
    <ExtraLargeHeading>Extra Large Heading</ExtraLargeHeading>
  </>
);

ExtraLargeHeadingStory.story = {
  parameters: {
    'in-dsm': {
      component: ExtraLargeHeading,
      componentPath: '../src/typography',
      id: '5e1000d19ea961491514c913',
      versionFilePath: '../version-file.json',
    },
  },
};

export const CTA = () => (
  <>
    <Box mb={4}>
      <LargeCTA href="#">Large CTA →</LargeCTA>
    </Box>
    <Box mb={4}>
      <LargeCTA href="#">Large CTA ↗</LargeCTA>
    </Box>
    <Box mb={4}>
      <SmallCTA href="#">Small CTA →</SmallCTA>
    </Box>
    <Box>
      <SmallCTA href="#">Small CTA ↗</SmallCTA>
    </Box>
  </>
);

export const Links = () => (
  <>
    <Box mb={4}>
      <ListLink href="#">List Link</ListLink>
    </Box>
    <Box mb={4}>
      <Breadcrumb href="#">Breadcrumb</Breadcrumb>
    </Box>
    <Box mb={4}>
      <Caption type="dark" href="#">
        Caption Dark
      </Caption>
    </Box>
    <Box>
      <Caption type="light" href="#">
        Caption Light
      </Caption>
    </Box>
  </>
);

export const Content = () => (
  <>
    <Box mb={4}>
      <Body>Body Copy</Body>
    </Box>
    <Box mb={4}>
      <EditorialText>Editorial Text</EditorialText>
    </Box>
    <Box mb={4}>
      <QuoteText>“Quote Text”</QuoteText>
    </Box>
  </>
);
